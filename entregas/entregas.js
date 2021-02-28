const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
//const bodyParser = require('body-parser');

const routesManager = require('./routes/routesManager');
var config = require('./configurations/configurations');

var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.bmp',
    '.BMP',
    '.png',
    '.PNG',
    '.jfif',
    '.JFIF',
    '.jpeg',
    '.JPEG',
    '.jpg',
    '.JPG',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
    '.txt'
];
// settings
app.set('port', config.server.port);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//cors
app.use(cors());
config.serverURL = __dirname;
config.serverURL = path.join(config.serverURL, 'frontend');
// middelewares
app.use(express.json({limit: '100mb', extended: true}));//remplaza a body-parser
// Inicialización de las rutas
app.use('/api', routesManager);

/** Estas lineas debo eliminar */
var ww = require('./configurations/webApiWhatsApp');
ww.conectWhtspp();

//Redirect all the other resquests
app.get('*', function (req, res) {
    if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
        res.sendFile(path.resolve("frontend" + req.url));
    }
    else {
        res.sendFile(path.resolve('frontend/index.html'));
    }
});
// start server
app.listen(app.get('port'), () => {
    console.log('inicio ', app.get('port'));
});