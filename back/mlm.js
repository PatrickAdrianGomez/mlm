const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const routesManager = require('./routes/routesManager');
var config = require('./configurations/configurations');

var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.JPG',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
// settings
app.set('port', config.server.port);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//cors
app.use(cors({origin: 'http://35.239.157.9:8001'}));
/*app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': 'http://35.232.169.69',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));*/
config.serverURL = __dirname;
console.log(config.serverURL);
config.serverURL = path.join(config.serverURL, 'frontend');
console.log(config.serverURL);
// middelewares
app.use(express.json({limit: '50mb', extended: true}));//remplaza a body-parser
// Inicialización de las rutas
app.use('/api', routesManager);
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