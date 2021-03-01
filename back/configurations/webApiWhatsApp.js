const webWhatsApp = require('baileys');

const client = new webWhatsApp();

module.exports.conectWhtspp = async(req, res) => {
    client.connect()
    .then(([user, chats, contacts, unread]) => {
        console.log('Autenticaicón exitosa');
        //res.status(200).json({mensaje: 'Autenticaicón exitosa'});
    }).catch((err) => console.log(err));
};

module.exports.sendWhtspp = async(req, res) => {
    options = {
        quoted: null,
        timestamp: new Date()
    }
    client.sendTextMessage(`${req.phone}@s.whatsapp.net`, req.body, options)
    .then(
        /*res.status(200).json({'WhatsApp': 'Notificación Enviada.'})*/
        console.log('Notificación Enviada')
    );
}