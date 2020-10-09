const model = require('./db');
var restful = require('node-restful');

var schemas = require('./schemas');
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
    existencia: {
        type: Schema.Types.Number,
        require: true,
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