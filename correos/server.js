var http = require("http");
var nodemailer = require('nodemailer');

inicio();

function inicio() {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'mlm.conexion@gmail.com',
            pass: 'Patito2112*'
        }
    });
    var mailOptions = {
        from: 'mlm.conexion@gmail.com',
        to: 'patrick_adrian@hotmail.com',
        subject: 'Bienvenido a MLM',
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
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

http.createServer(function(request, response) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'mlm.conexion@gmail.com',
            pass: 'Patito2112*'
        }
    });
    var mailOptions = {
        from: 'mlm.conexion@gmail.com',
        to: 'robertoirusta@gmail.com',
        subject: 'Bienvenido a MLM',
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
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

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hola Mundo. Esta página está ejecutando Node.js versión: ");
  response.write(process.version);
  response.end();
}).listen(8888);