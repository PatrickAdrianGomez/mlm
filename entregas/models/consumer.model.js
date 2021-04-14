const model = require('./db');
var restful = require('node-restful');
var schemas = require('./schemas');

var Schema = model.Schema;

var consumerSchema = new Schema({
    ci: {
        type: Schema.Types.String,
        require: false,
        unique: false
    },
    phone: {
        type: Schema.Types.String,
        require: true,
        unique: true
    },
    name: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    lastName: {
        type: Schema.Types.String,
        require: true,
        unique: false
    },
    address: [{
        geoData: {
            type: Schema.Types.String,
            required: false,
            unique: false
        },
        especificLocation: {
            type: Schema.Types.String,
            required: false,
            unique: false
        }
    }],
    estado: {
        type: Schema.Types.Number,
        require: true,
        unique: false
    }
});

var Consumer = restful.model('Consumer', consumerSchema, 'vconsumer');

module.exports = Consumer;