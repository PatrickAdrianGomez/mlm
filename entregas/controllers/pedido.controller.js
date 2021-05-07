var Pedido = require('../models/pedido.model');
var Consumer = require('../models/consumer.model');
var Persona = require('../models/person.model');
var ww = require('../configurations/webApiWhatsApp');

exports.creaPedido = async (req, res, next) => {
    if (req.body.codigo == 0) {
        const filter = {};
        let result = await Pedido.findOne(filter).sort({ _id: -1 });
        let miPedido = new Pedido();
        miPedido = req.body;
        let consumers = await Consumer.findOne({ phone: miPedido.telefono });
        if (result) {
            let fechaUltimoPedido = result.fechaHora.getDate() + ':' + result.fechaHora.getMonth() + ':' + result.fechaHora.getFullYear();
            let fecha = new Date();
            let fechaActual = fecha.getDate() + ':' + fecha.getMonth() + ':' + fecha.getFullYear();
            if (fechaUltimoPedido == fechaActual) {
                miPedido.codigo = result.codigo + 1;
            } else {
                miPedido.codigo = 1;
            }
        } else {
            miPedido.codigo = 1;
        }
        try {
            let misProductos = [];
            miPedido.productos.forEach(prod => {
                misProductos.push({ id: prod.id, nombre: prod.nombre, cantidad: prod.cantidad, costo: prod.costo });
            });
            //var resp = updateConsumer(miPedido);

            setPedido(miPedido, misProductos);
            if (consumers == null) {
                setConsumer(miPedido);
            } else {
                if (!verificaDatos(consumers, req.body)) {
                    updateConsumer(miPedido);
                }
            }

            await Persona.find({ 'vehiculo.placaVehiculo': { $exists: true } }, function (err, docs) {
                for (let i = 0; i < docs.length; i++) {
                    let body = {'phone': '591'+ docs[i].contact.phone, 'body': '*Universal delivery* \n Hay un nuevo pedido registrado, ingrese al sistema para su atención.\n http://ventunentregas.com/pedidos/1'};
                    ww.sendWhtspp(body, res);
                }
            });

            //generateMensajes(miPedido);
            res.status(200).json({ 'pedido': nuevoPedido });
        } catch (error) {
            res.status(200).json({ 'pedido': null });
        }
    }
}

exports.changeStatus = (req, res, next) => {
    let estado;
    switch (req.body.estadoActual) {
        case 1:
            estado = '*agendado* y a la espera del personal de delivery.';
            break;
        case 2:
            estado = '*asignado* a un conductor.';
            break;
        case 3:
            estado = 'ya en camino, en breve podrá disfrutar de su pedido.';
            break;
        case 4:
            estado = 'cuatro';
            break;
        case 5:
            estado = '*entregado*. \n Agradecemos su confianza.';
            break;
        case 0:
            estado = '*cancelado*. \n Lamentamos los inconvenientes.';
            break;
        default:
            break;
    }
    let body = { 'phone': '591' + req.body.telefono, 'body': '*Estimado ' + req.body.nombreCliente + '.* \n Su pedido se encuentra ' + estado };
    try {
        ww.sendWhtspp(body, res);
    } catch (error) {
        res.status(200).json({ 'Error': error });    
    }
    res.status(200).json({ 'mensaje': 'enviado a ' + body.phone });
}

setPedido = (pedido, productos) => {
    let newPedido = new Pedido({
        codigo: pedido.codigo,
        nombreCliente: pedido.nombreCliente,
        apellidoCliente: pedido.apellidoCliente,
        productos: productos,
        direccion: pedido.direccion,
        geolocalizacion: pedido.geolocalizacion,
        telefono: pedido.telefono,
        fechaHora: pedido.fechaHora,
        usuario: {
            id: '',
            nombre: '',
            telefono: '',
            fotografia: '',
            tipoVehiculo: '',
            placaVehiculo: '',
            detallesVehiculo: ''
        },
        companyName: pedido.companyName,
        sucursalName: pedido.sucursalName,
        estadoActual: pedido.estadoActual,
        ubicacionActual: pedido.ubicacionActual,
        entrega: {
            usuarioNombre: pedido.entrega.usuarioNombre,
            registroFoto: pedido.entrega.registroFoto,
            cancelaPedido: pedido.entrega.cancelaPedido,
            asignadoPedido: pedido.entrega.asignadoPedido,
            recogidoPedido: pedido.entrega.recogidoPedido,
            entregadoPedido: pedido.entrega.entregadoPedido
        }
    });
    newPedido.save();
};

setConsumer = (pedidoCompleto) => {
    let newConsumer = new Consumer({
        ci: pedidoCompleto.ci,
        phone: pedidoCompleto.telefono,
        name: pedidoCompleto.nombreCliente,
        lastName: pedidoCompleto.apellidoCliente,
        address: [{
            geoData: pedidoCompleto.geolocalizacion,
            especificLocation: pedidoCompleto.direccion,
        }],
        estado: 1
    });
    newConsumer.save();
};

updateConsumer = async (pedidoCompleto) => {
    return resp = await Consumer.findOneAndUpdate(
        { phone: pedidoCompleto.telefono },
        { $push: { address: { geoData: pedidoCompleto.geolocalizacion, especificLocation: pedidoCompleto.direccion } } },
        { new: true }
    );
};

verificaDatos = (datosBD, datosFrontEnd) => {
    resp = false;
    datosBD.address.forEach(element => {
        if ((element.geoData == datosFrontEnd.geolocalizacion) && (element.especificLocation == datosFrontEnd.direccion)) {
            resp = true;
        }
    });
    return resp;
}