export const globalVars = {
    domain: 'http://104.197.114.137:8001',
    filesDomain: 'http://104.197.114.137:8001',
    //domain: 'http://127.0.0.1:8001',
    //filesDomain: 'http://127.0.0.1:8001/',

    language: 'es',
    moneda: 'BOL',
    caducaEnDias: 7
};

export const globalConfigurations = {
    pais: '5f20d21991a91e3e79106752',
    ciudad: '5f20d29391a91e3e79106756',//5f20d2c491a91e3e79106757',
    company: '5f20d1de91a91e3e79106750',
    rol: '5f20d1f091a91e3e79106751'
};

export const globalImages = {
};

export var jobs = [];

export const globalImagesSize = {
    widthScale: 768,
    heightScale: 1024, //xga
    thumbWidth: 480,
    thumbHeight: 640 //vga
};
export const globalRoutes = {
    person: 'api/v1/qperson',
    personInvitation: 'api/v1/personInvitation',
    personAssociated: 'api/v1/personAssociated',
    company: 'api/v1/qcompany',
    job: 'api/v1/qjob',
    location: 'api/v1/qlocation',
    invitation: 'api/v1/invitation',
    invitationQuick: 'api/v1/qinvitation',
    context:'api/v1/qcontext',
    contextact:'api/v1/qcontext?estado=1',
    typecontext:'api/v1/qtypecontext',
    typecontextact:'api/v1/qtypecontext?estado=1',

    mailSender: 'api/v1/mailSender',
    userVerification: 'api/v1/userVerification',
    mailProduct: 'api/v1/mailProduct',
    
    user: 'api/v1/quser',
    login: 'api/v1/login',
    register: 'api/v1/register',
    recover: 'api/v1/recover'
};
