const model = require('./db');
var restful = require('node-restful');
var Schema = model.Schema;

var productSchema = new Schema({
    acronym: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    nombre: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    imagen: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    descripcion: {
        type: Schema.Types.String,
        required: false,
        unique: false
    },
    costo: {
        type: Schema.Types.Number,
        required: false,
        unique: false,
        default: 0
    },
    existencia: {
        type: Schema.Types.Number,
        require: true,
        unique: false
    },
    companyName: {
        type: Schema.Types.String,
        require: false,
        unique: false
    },
    sucursalName: {
        type: Schema.Types.String,
        require: false,
        unique: false
    },
    estado: {
        type: Schema.Types.Number,
        require: true,
        unique: false
    }
});

var Product = restful.model('Product', productSchema, 'vproduct');

module.exports = Product;