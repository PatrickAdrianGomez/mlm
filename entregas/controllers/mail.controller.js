var nodemailer = require('nodemailer');
var config = require('../configurations/configurations');
var cryptoJS = require('crypto-js');
var mails = require('../templates/mail.template')
const { urlencoded } = require('express');

exports.decryURL = (req, res, next) => {
    try {
        let buscar = ' ';
        let bearer = req.query.url.replace(new RegExp(buscar, "g"), "+");
        var enBytes = cryptoJS.AES.decrypt(bearer, config.tokenURL.secret);
        var desencriptado = JSON.parse(enBytes.toString(cryptoJS.enc.Utf8));
        res.status(200).jsonp(desencriptado);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.sendMyMail = (req, res) => {
    //Creamos el objeto de transporte
    var transporter = nodemailer.createTransport({
        host: '127.0.0.1',
        port: 25,
        secure: false,
        auth: {
            user: 'info@ventun.com',
            pass: 'roberto321'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    var cuerpo = {};
    cuerpo.cabecera = {};
    cuerpo.nombre = req.body.nombre;
    cuerpo.apellido = req.body.apellido;
    cuerpo.email = req.body.email;
    cuerpo.password = req.body.password;
    cuerpo.cabecera.saludo = 'Bienvenido';

    var mailOptions = {
        from: 'info@ventun.com',
        //to: req.body.email,
        //to: 'patrick_adrian@hotmail.com, patrick@hotmail.com',
        to: 'patrick_adrian@hotmail.com',
        subject: 'Bienvenido a MLM',
        html: mails.tablaMensaje(2, cuerpo)
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).jsonp(req.body);
        }
    });
}

exports.mailSender = (req, res) => {
    //Varialves que definen el comportamiento de los mails
    let miSubjetct = '';
    let miOpcion = 0;
    let miCuerpo = {};
    let cuerpo = {};
    cuerpo.cabecera = {};
    let cabecera = {};

    //Creamos el objeto de transporte
    let transporter = nodemailer.createTransport({
        host: '127.0.0.1',
        port: 25,
        secure: false,
        auth: {
            user: 'info@ventun.com',
            pass: 'roberto321'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    let creandoURL = {};
    let encriptado;
    let correo;

    switch (res) {
        case 'verificacion':
            cuerpo.nombre = req.nombre;
            cuerpo.email = req.email;
            correo = req.email;
            cuerpo.password = req.password;
            cuerpo.cabecera.saludo = 'Bienvenido';

            miSubjetct = 'Bienvenido a MLM';
            miOpcion = 2;
            miCuerpo = cuerpo;

            break;
        case 'registro':
            cabecera.saludo = 'Verifica tu nueva cuenta.';
            cuerpo.codigo = generaCodigoVerificacion();
            creandoURL.urlBase = req.body.destino.pagina;
            creandoURL.urlFinal = req.body.detalle.email;
            encriptado = cryptoJS.AES.encrypt(JSON.stringify(creandoURL), config.tokenURL.secret).toString();
            cuerpo.encriptado = "http://localhost:4200/productmail/" + encodeURIComponent(encriptado);
            miSubjetct = 'Verificación Ventun MLM';
            miOpcion = 3;
            cuerpo.cabecera = cabecera;
            miCuerpo = cuerpo;
            break;
        case 'producto':
            cabecera.saludo = 'Solicitud de Compra de Productos';
            miOpcion = 1;
            miSubjetct = 'MLM';
            creandoURL.urlBase = req.body.destino.pagina;
            creandoURL.urlFinal = req.body.detalle.articulo;
            encriptado = cryptoJS.AES.encrypt(JSON.stringify(creandoURL), config.tokenURL.secret).toString();
            cuerpo = req.body;
            cuerpo.encriptado = "http://localhost:4200/productmail/" + encodeURIComponent(encriptado);
            cuerpo.cabecera = cabecera;
            miCuerpo = cuerpo;
            console.log('producto', miCuerpo);
            break;
        default:
            break;
    }

    let mailOptions = {
        from: 'info@ventun.com',
        //to: 'patrick_adrian@hotmail.com',
        to: correo,
        //to: 'patrick_adrian@hotmail.com, patrick@hotmail.com',
        subject: miSubjetct,
        html: mails.tablaMensaje(miOpcion, miCuerpo)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).json(error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            res.status(200).json(req.body);
        }
    });
}

generaCodigoVerificacion = () => {
    return '1234'; //Math.random().toString(36).substring(7);
}