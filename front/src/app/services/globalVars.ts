export const globalVars = {
    //domain: 'http://35.239.157.9:8001',
    //filesDomain: 'http://35.239.157.9:8001',
    domain: 'http://127.0.0.1:8001',
    filesDomain: 'http://127.0.0.1:8001/',

    language: 'es',
    moneda: 'BOL'
};

export const globalConfigurations = {
    pais: '5e14d334d235a7103c0ba4f1',
    ciudad: '5e14d611d235a7103c0ba4f6',
    company: '5e252fb391a1412bf8709a69',
    rol: '5f151a066223cb2cdc7c606e'
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

    user: 'api/v1/quser',
    login: 'api/v1/login',
    register: 'api/v1/register',
    recover: 'api/v1/recover'
};
