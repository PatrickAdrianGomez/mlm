var Pedido = require('../models/pedido.model');
var Persona = require('../models/person.model');
var ww = require('../configurations/webApiWhatsApp');

exports.creaPedido = async (req, res, next) => {
    if (req.body.codigo == 0) {
        const filter = {};
        let result = await Pedido.findOne(filter).sort({ _id: -1 });
        let miPedido = new Pedido();
        miPedido = req.body;
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
            setPedido(miPedido, misProductos);
            await Persona.find({ 'vehiculo.placaVehiculo': { $exists: true } }, function (err, docs) {
                for (let i = 0; i < docs.length; i++) {
                    let body = {'phone': '591'+ docs[i].contact.phone, 'body': 'Nuevo Pedido en el sistema, ingrese al sistema para llevar el pedido a su destino.\n http://11.vps.confiared.com:16678/pedidos/1'};
                    ww.sendWhtspp(body, res);
                }
            });

            generateMensajes(miPedido);
            res.status(200).json({ 'pedido': nuevoPedido });
        } catch (error) {
            res.status(200).json({ 'pedido': null });
        }
    }
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