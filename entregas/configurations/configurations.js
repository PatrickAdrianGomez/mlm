var config = {
    server: {
        port: process.env.PORT || 8002
    },
    db: {
        options: {
            useFindAndModify: false,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500
        },
        //uri: 'mongodb://localhost:27017/mlm'
        uri: 'mongodb://userENTREGAS:MPatrickLRobertoM77@34.67.218.15:8890/entregas'
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