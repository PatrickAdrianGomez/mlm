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
        service: 'Gmail',
        auth: {
            user: 'mlm.conexion@gmail.com',
            pass: 'Patito2112*'
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
        from: 'mlm.conexion@gmail.com',
        to: req.body.email,
        //to: 'patrick_adrian@hotmail.com, patrick@hotmail.com',
        //to: 'patrick_adrian@hotmail.com',
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
        service: 'Gmail',
        auth: {
            user: 'mlm.conexion@gmail.com',
            pass: 'Patito2112*'
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
        from: 'mlm.conexion@gmail.com',
        //to: 'patrick_adrian@hotmail.com',
        to: correo,
        //to: 'patrick_adrian@hotmail.com, patrick@hotmail.com',
        subject: miSubjetct,
        html: mails.tablaMensaje(miOpcion, miCuerpo)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            //res.send(500, error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            //res.status(200).jsonp(req.body);
        }
    });
}

generaCodigoVerificacion = () => {
    return Math.random().toString(36).substring(7);
}

//************************ */
/*exports.mailSender2 = (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'allasite.contact@gmail.com',
            pass: 'Patito2112*'
        }
    });

    var creandoURL = {};
    creandoURL.urlBase = req.body.destino.pagina;
    creandoURL.urlFinal = req.body.detalle.articulo;

    var encriptado = cryptoJS.AES.encrypt(JSON.stringify(creandoURL), config.tokenURL.secret).toString();
    var mensajeContactoB2C = {};
    mensajeContactoB2C = req.body;
    mensajeContactoB2C.encriptado = "http://localhost:4200/productmail/" + encodeURIComponent(encriptado);
    mensajeContactoB2C.cabecera = {};


    mensajeContactoB2C.cabecera.saludo = 'Solicitud de Compra de Productos';

    switch (key) {
        case 'prodcuto':
            mensajeContactoB2C.encriptado = "http://localhost:4200/productmail/" + encodeURIComponent(encriptado);
            break;
        case 'login':
            mensajeContactoB2C = "http://localhost:4200/login/" + encodeURIComponent(encriptado);
        default:
            break;
    }


    var mailOptions = {
        from: 'allasite.contact@gmail.com',
        to: 'patrick_adrian@hotmail.com',
        subject: 'ALLASITE B2C',
        html: mails.tablaMensaje(1, mensajeContactoB2C)
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
}*/