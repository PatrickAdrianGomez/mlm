var http = require("http");
var nodemailer = require('nodemailer');

http.createServer(function (request, response) {

    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 25,
        auth: {
            user: "030b6b5f13ee9e",
            pass: "df445b0ea272dd"
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
            response.send(500, error.message);
        } else {
            console.log('Email enviado: ' + info.response);
            response.status(200).jsonp(req.body);
        }
    });

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hola Mundo. Esta página está ejecutando Node.js versión: ");
    response.write(process.version);
    response.end();
}).listen(16678);