var Pedido = require('../models/pedido.model');

exports.creaPedido = async(req, res, next) => {
    console.log(req.body.codigo, 'req.body.codigo');
    if (req.body.codigo == 0) {
        const filter = {companyName: req.body.companyName, sucursalName: req.body.sucursalName};
        let result = await Pedido.findOne(filter).sort({_id: -1});
        let miPedido = new Pedido();
        miPedido = req.body;
        miPedido.codigo = result.codigo + 1;
        console.log(miPedido);
        try {
            //miPedido.save();
            setPedido(miPedido);
            console.log('guardoooooooooo');
            res.status(200).json({ 'pedido': nuevoPedido });
        } catch (error) {
            res.status(200).json({ 'pedido': null });
        }
    }


}

setPedido = (pedido) => {
    let newPedido = new Pedido({
        codigo: pedido.codigo,
        nombreCliente: pedido.nombreCliente,
        apellidoCliente: pedido.apellidoCliente,
        productos: {
            id: pedido.productos.id,
            nombre: pedido.productos.nombre,
            cantidad: pedido.productos.cantidad
        },
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
        ubicacionActual: pedido.ubicacionActual
    });
    //newPedido = pedido;
    newPedido.save();
    console.log('res', res);
    //return res._id;
};