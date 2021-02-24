var config = {
    server: {
        port: process.env.PORT || 16679
    },
    db: {
        options: {
            useFindAndModify: false,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500
        },
        //uri: 'mongodb://localhost:27017/mlm'
        //uri: 'mongodb://userENTREGAS:MPatrickLRobertoM77@45.225.75.2:16677/entregas'
        //uri: 'mongodb://userMLM:MPatrickLRobertoM77@45.225.75.2:16677/mlm'
        uri: 'mongodb://userMLM:MPatrickLRobertoM77@localhost:16677/mlm'
        //uri: 'mongodb://userMLM:MPatrickLRobertoM77@11.vps.confiared.com:16677/mlm'
        //uri: 'mongodb://userMLM:MPatrickLRobertoM77@127.0.0.1:16677/mlm'
    },
    bcrypt: {
        saltRounds: 11
    },
    token: {
        secret: 'VENTUN->Patrick-Roberto<-entregas',
        sesion: { session: false }
    },
    serverURL: __dirname
};

module.exports = config;