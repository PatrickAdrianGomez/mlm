const usersController = require('../controllers/user.controller');
const fileController = require('../controllers/file.controller');
const pedidoController = require('../controllers/pedido.controller');
const whtspp = require('../configurations/webApiWhatsApp');
//const mailController = require('../controllers/mail.controller');

var express = require('express');
var router = express.Router();
const app = express();

const passport = require('passport');
const authenticationJWT = require('../configurations/authenticationJWT');
// Set up middleware
const AuthenticateJWT = passport.authenticate('jwt', { session: false });

// Usuarios endpoints
router.get('/login', usersController.userLogin);
router.post('/register', usersController.userRegister);
router.get('/recover', usersController.passwordRecover);

router.post('/invitation', usersController.registerInvitation);
router.get('/invitation', usersController.getAllInvitations);
router.get('/personInvitation', usersController.getPersonInvitation);
router.put('/personInvitation', usersController.updatePersonInvitation);
router.get('/personAssociated', usersController.getPersonAssociated);
router.post('/pedido', pedidoController.creaPedido);

router.post('/image', AuthenticateJWT, fileController.upload);

router.post('/connectW', whtspp.conectWhtspp);
router.post('/sendW', whtspp.sendWhtspp);

//router.post('/mailSender', mailController.mailSender);
//router.get('/mailReciver', mailController.decryURL);

app.use(passport.initialize());
require('../configurations/authenticationJWT')(passport);

// Main endpoint
app.get('/', (req, res, next) => {
    res.render('api.html');
});
module.exports = router;