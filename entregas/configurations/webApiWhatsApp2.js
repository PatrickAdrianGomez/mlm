const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const EventEmitter = require('events');
const emitter = new EventEmitter()
const puppeteer = require('puppeteer');
emitter.setMaxListeners(100);

const client = new Client();

module.exports.conectWhtspp = async(req, res) => {
    //client.initialize();
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qr);
        qrcode.generate(qr, {small: true});
    });
};

client.on('ready', () => {
    console.log('Client is ready!');
    let number = '59172696012@c.us';
        message = 'HOLA DESDE NUESTRAS NUEVAS INTALACIONES';
        console.log('emntróasdokasjnld laskjd laksd lasd');
        client.sendMessage(number, message);
});

module.exports.sendWhtspp = async(req, res) => {
    /*options = {
        quoted: null,
        timestamp: new Date()
    }*/
    let number = req.phone+'@c.us';
        message = req.body;
        client.sendMessage(number, message);

    /*client.on('ready', () => {
        console.log('Client is ready!2');
    });

console.log(req);
    client.on('message', msg => {
        console.log('msg------------', msg);
        let number = '59172696012@c.us';
        message = 'HOLA DESDE NUESTRAS NUEVAS INTALACIONES';
        console.log('emntróasdokasjnld laskjd laksd lasd');
        client.sendMessage(number, message);
    });

    /*client.sendTextMessage(`${req.phone}@s.whatsapp.net`, req.body, options)
    .then(
        res.status(200).json({'WhatsApp': 'Notificación Enviada.'})
        console.log('Notificación Enviada')
    );*/
}

client.on('message_create', (msg) => {
    // Fired on all message creations, including your own
    if (msg.fromMe) {
        // do stuff here
    }
});

client.on('message', msg => {
    console.log(msg);
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();