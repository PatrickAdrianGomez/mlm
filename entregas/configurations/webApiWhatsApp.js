const webWhatsApp = require('baileys');
const fs = require('fs');
const client = new webWhatsApp();
//client.autoReconnect = true;
var authInfo = null;

module.exports.conectWhtspp = async (req, res) => {
    try {
        const file = fs.readFileSync("auth_whtspp.json"); // load a closed session back if it exists
        authInfo = JSON.parse(file);
    } catch { 
        console.log('authInfo excepcion', authInfo);
    }

    //const authJSON = JSON.parse( fs.readFileSync("auth_whtspp.json") );
    client.connect(authInfo, 20*1000)
        .then(([user, chats, contacts, unread]) => {
            var authInfo = client.base64EncodedAuthInfo();
            fs.writeFileSync('auth_whtspp.json', JSON.stringify(authInfo, null, '\t'));
            console.log('Autenticaicón exitosa');
            //res.status(200).json({mensaje: 'Autenticación exitosa'});
        }).catch((err) => console.log('Se encontró un error: ', err));

};

module.exports.sendWhtspp = async (req, res) => {
    options = {
        quoted: null,
        timestamp: new Date()
    }
    client.sendTextMessage(`${req.phone}@s.whatsapp.net`, req.body, options)
        .then(
            console.log('Notificación Enviada')
            //res.status(200).json({'WhatsApp': 'Notificación Enviada.'})
            
        );
}