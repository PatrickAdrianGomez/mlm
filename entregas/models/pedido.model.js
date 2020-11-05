const model = require('./db');
var restful = require('node-restful');

var schemas = require('./schemas');
var Schema = model.Schema;

var pedidoSchema = new Schema({
    codigo: {
        type: Schema.Types.Number,
        required: true,
        unique: false
    },
    nombreCliente: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    apellidoCliente: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    productos: [{
        id: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        nombre: {
            type: Schema.Types.String,
            require: false,
            unique: false
        },
        cantidad: {
            type: Schema.Types.Number,
            require: false,
            unique: false
        }
    }],
    direccion: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    geolocalizacion: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    telefono: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    fechaHora: {
        type: Schema.Types.Date,
        required: true,
        unique: false
    },
    usuario: {
        id: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        nombre: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        telefono: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        fotografia: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        tipoVehiculo: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        placaVehiculo: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        detallesVehiculo: {
            type: Schema.Types.String,
            required: false,
            unique: false
        }
    },
    companyName: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    sucursalName: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    estadoActual: {
        type: Schema.Types.Number,
        require: true,
        unique: false
    },
    ubicacionActual: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    entrega: {
        usuarioNombre: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        registroFoto: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        cancelaPedido: {
            type: Schema.Types.Date,
            required: false,
            unique: false
        },
        asignadoPedido: {
            type: Schema.Types.Date,
            required: false,
            unique: false
        },
        recogidoPedido: {
            type: Schema.Types.Date,
            required: false,
            unique: false
        },
        entregadoPedido: {
            type: Schema.Types.Date,
            required: false,
            unique: false
        },
    }
});

var Pedido = restful.model('Pedido', pedidoSchema, 'vpedido');

module.exports = Pedido;