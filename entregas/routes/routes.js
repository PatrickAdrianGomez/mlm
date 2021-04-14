// Dependencies
var express = require('express');
var router = express.Router();

const passport = require('passport');
// Set up middleware
const AuthenticateJWT = passport.authenticate('jwt', { session: false });

// model schemas
var User = require('../models/user.model');
var Person = require('../models/person.model');
var Company = require('../models/company.model');
var Location = require('../models/location.model');
var Invitation = require('../models/invitation.model');
var Job = require('../models/job.model');
var TypeContext = require('../models/typeContext');
var Context = require('../models/contexto');
var Product = require('../models/products.model');
var Pedidos = require('../models/pedido.model');
const Consumer = require('../models/consumer.model');

User.methods(['get', 'put', 'post', 'delete']);
User.updateOptions({ new: true });
User.register(router, '/quser');

Person.methods(['get', 'put', 'post', 'delete']);
Person.updateOptions({ new: true });
Person.register(router, '/qperson');

Company.methods(['get', 'put', 'post', 'delete']);
Company.updateOptions({ new: true });
Company.register(router, '/qcompany');

Location.methods(['get', 'put', 'post', 'delete']);
Location.updateOptions({ new: true });
Location.register(router, '/qlocation');

Invitation.methods(['get', 'put', 'post', 'delete']);
Invitation.updateOptions({ new: true });
Invitation.register(router, '/qinvitation');

Job.methods(['get', 'put', 'post', 'delete']);
Job.updateOptions({ new: true });
Job.register(router, '/qjob');

TypeContext.methods(['get', 'put', 'post', 'delete']);
TypeContext.updateOptions({ new: true });
TypeContext.register(router, '/qtypecontext');

Context.methods(['get', 'put', 'post', 'delete']);
Context.updateOptions({new: true});
Context.register(router, '/qcontext');

Product.methods(['get', 'put', 'post', 'delete']);
Product.updateOptions({new: true});
Product.register(router, '/qproducts');

Pedidos.methods(['get', 'put', 'post', 'delete']);
Pedidos.updateOptions({new: true});
Pedidos.register(router, '/qpedido');

Consumer.methods(['get', 'put', 'post', 'delete']);
Consumer.updateOptions({new: true});
Consumer.register(router, '/qconsumer');

module.exports = router;