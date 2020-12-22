var http = require("http");
var nodemailer = require('nodemailer');

http.createServer(function(request, response) {

    var transporter = nodemailer.createTransport({
        host: '11.vps.confiared.com',
        port: 25,
        auth: {
            user: 'info@ventun.com',
            pass: 'roberto321'
        }
    });
    var mailOptions = {
        from: 'info@ventun.com',
        to: 'patrick_adrian@hotmail.com',
        subject: 'Bienvenido a MLM',
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        console.log('info: ', info);
        if (error) {
            console.log('hubo un error: ', error);
            //response.send(500, error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            //response.status(200).jsonp(req.body);
        }
    });

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hola Mundo. Esta página está ejecutando Node.js versión: ");
  response.write(process.version);
  response.end();
}).listen(16678);