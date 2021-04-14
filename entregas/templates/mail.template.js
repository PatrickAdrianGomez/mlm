seleccionCabecera = (opcion = 0, cuerpo) => {
    switch (opcion) {
        case 20:
            return cabecera(cuerpo);
        default:
            return cabecera(cuerpo);
    }
}

seleccionCuerpo = (opcion = 0, cuerpo) => {
    switch (opcion) {
        case 1:
            return consultaProducto(cuerpo);
        case 2:
            return bienvenida(cuerpo);
        case 3:
            return verificacion(cuerpo);
        default:
            break;
    }
}

cabecera = (cuerpo) => {
    return `<table width="100%" style="border-spacing: 0;">
        <tr style="background-color: #391261;">
            <td>
                <!--<a href="http://www.allasite.com">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVbw-cygTiLkBqV7Jov7xEh_KKm8eCs4fDwQ&usqp=CAU"
                        alt="Logo" width="150"></a>-->
            </td>
            <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="subhead" style="padding-left: 5px; color: #fdb928;">
                            MLM
                        </td>
                    </tr>
                    <tr>
                        <td class="h1" style="padding-top: 5px; color: #fdb928;">
                            ` + cuerpo.cabecera.saludo + `
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>`;
}

verificacion = (cuerpo) => {
    return `<!--[if (gte mso 9)|(IE)]>
    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
            <![endif]-->
            
    <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0"
    style="width:100%;max-width:425px;">
        <tr>
            <td class="bodycopy">
                <br/><h3>Introduce el siguiente código.</h3>
                <strong><font style="color:white;">` + cuerpo.codigo + `</font></strong><br/>
                <font style="color:white;">No compartas este código con nadie.</font><br/>
                
                <br/><font style="color:white;">Gracias y Bienvenido.</font><br/>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0 0 0;">
                <table class="buttonwrapper" bgcolor="#3b0000"
                    border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="button" height="45">
                            <a href="` + cuerpo.encriptado + `">Verifica tu cuenta.</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

            <!--[if (gte mso 9)|(IE)]>
            </td>
        </tr>
    </table>
    <![endif]-->`
}

bienvenida = (cuerpo) => {
    return `<!--[if (gte mso 9)|(IE)]>
    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
            <![endif]-->
            
    <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0"
    style="width: 100%; max-width: 425px;">
        <tr>
            <td class="p bodycopy">` + cuerpo.nombre + `.</td>
        </tr>
        <tr>
            <td class"p"><br/>
            Estamos felices de que inicies con nosotros.<br/><br/>
            MLM es el Multi nivel de multi empresas más grande del País.<br/><br/>
            Inicia con nosotros, creceremos juntos.<br/><br/><br/><br/>
            Correo de Inicio de sesión: ` + cuerpo.email + `<br/>
            Contraseña de Inicio de sesión: ` + cuerpo.password + `<br/><br/><br/>
            Por seguridad tu información personal, así como tu contraseña estará cifrada, de modo que esta vez será la única vez que podrá ver su contraseña actual.<br/><br/><br/><br/>
            Gracias y Bienvenido.
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0 0 0;">
                <table class="buttonwrapper" bgcolor="#3b0000"
                    border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="button" height="45">
                            <a href="http://ventunentregas.com">Visítanos</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

            <!--[if (gte mso 9)|(IE)]>
            </td>
        </tr>
    </table>
    <![endif]-->`
}

consultaProducto = (cuerpo) => {
    return `<!--[if (gte mso 9)|(IE)]>
    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
            <![endif]-->
<table class="col425" align="left" border="0" cellpadding="0" cellspacing="0"
style="width: 100%; max-width: 425px;">
<tr>
<td class="innerpadding borderbottom headerTable">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td class="h2">
            `+ cuerpo.detalle.titulo + `
        </td>
    </tr>
    <tr>
        <td class="bodycopy">
            `+ cuerpo.detalle.subtitulo + `
        </td>
    </tr>
</table>
</td>
</tr>
<tr>
<td class="innerpadding borderbottom">
<table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td height="115" style="padding: 0 20px 20px 0;">
            <img class="fix" src="`+ cuerpo.detalle.imagen + `" width="115"
                height="115" border="0" alt="" />
        </td>
    </tr>
</table>
<!--[if (gte mso 9)|(IE)]>
        <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td>
                <![endif]-->
<table class="col380" align="left" border="0" cellpadding="0" cellspacing="0"
    style="width: 100%; max-width: 380px;">
    <tr>
        <td>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="bodycopy">
                        `+ cuerpo.detalle.mensaje + `
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px 0 0 0;">
                        <table class="buttonwrapper" bgcolor="#3b0000"
                            border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="button" height="45">
                                    <a href="` + cuerpo.encriptado + `">Verifica
                                        el Pedido</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!--[if (gte mso 9)|(IE)]>
                </td>
            </tr>
        </table>
        <![endif]-->
</td>
</tr>
</table>
<!--[if (gte mso 9)|(IE)]>
    </td>
</tr>
</table>
<![endif]-->`;
}

seguimientoProducto = (cuerpo) => {
    return `<!--[if (gte mso 9)|(IE)]>
    <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td>
            <![endif]-->
            
    <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0"
    style="width: 100%; max-width: 425px;">
        <tr>
            <td class="bodycopy">
                <h4>Tu número de pedido es el 52.</h4>
                <p>Con ese número podrás verificar cuando lo desees en que estado se encuentra tu pedido.</p>
                <br/>
                <br/><p>Gracias.</p>
                <p></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0 0 0;">
                <table class="buttonwrapper" bgcolor="#3b0000"
                    border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="button" height="45">
                            <a href="http://ventunentregas.com/purchases/52">Controla tu Pedido</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

            <!--[if (gte mso 9)|(IE)]>
            </td>
        </tr>
    </table>
    <![endif]-->`
}

var pie = `<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
    <td align="center" style="padding: 20px 0 0 0;" bgcolor="#44525f">
        <table border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                    <a href="https://www.facebook.com/">
                        <img src="images/facebook.png" width="37" height="37" alt="Facebook"
                            border="0" />
                    </a>
                </td>
                <td width="37" style="text-align: center; padding: 0 10px 0 10px;">
                    <a href="http://www.twitter.com/">
                        <img src="images/twitter.png" width="37" height="37" alt="Twitter"
                            border="0" />
                    </a>
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td align="center" class="p2">
        Colon, entre Lemoine y La Riva. <br/>
        Este correo fue enviado a usted por mlm.contact@gmail.com<br/>
        Copyright&copy; 2020 <a href="http://ventun.com"><font color="#3b0000">Ventun</font></a>, Derechos Reservados<br/>
        Santa Cruz - Bolivia<br/>
    </td>
</tr>
</table>`;


exports.tablaMensaje = (opcion, cuerpo) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MLM, VENTUN</title>
        <style type="text/css">
            body {
                margin: 0;
                padding: 0;
                min-width: 100% !important;
            }
    
            img {
                height: auto;
            }
    
            .content {
                width: 100%;
                max-width: 600px;
            }
    
            .header {
                padding: 40px 30px 20px 30px;
            }
    
            .innerpadding {
                padding: 30px 30px 30px 30px;
            }
    
            .borderbottom {
                border-bottom: 1px solid #f2eeed;
            }
    
            .subhead {
                font-size: 15px;
                color: #ffffff;
                font-family: sans-serif;
                letter-spacing: 10px;
            }
    
            .h1,
            .h2,
            .bodycopy {
                color: #ffffff;
                font-family: sans-serif;
                font-size: 24px;
                line-height: 30px;
            }

            .h1 {
                font-size: 33px;
                line-height: 38px;
                font-weight: bold;
            }
    
            .h2 {
                padding: 0 0 15px 0;
                font-size: 24px;
                line-height: 28px;
                font-weight: bold;
            }
    
            .button {
                text-align: center;
                font-size: 18px;
                font-family: sans-serif;
                font-weight: bold;
                padding: 0 30px 0 30px;
            }
    
            .button a {
                color: #ffffff;
                text-decoration: none;
            }
    
            .footer {
                padding: 20px 30px 15px 30px;
            }
    
            .footercopy {
                font-family: sans-serif;
                font-size: 14px;
                color: #ffffff;
            }
    
            .footercopy a {
                color: #ffffff;
                text-decoration: underline;
            }

            .p .footercopy {
                color: #ffffff;
            }
    
            .footerTable {
                font-size: .8em;
                text-justify: auto;
            }

            .p {
                font-size: 15px;
                color: #ffffff;
                line-height: 30px;
                padding: 0 0 15px 0;
            }
            .p2 {
                font-size: 10px;
                color: #ffffff;
                line-height: 15px;
                padding: 0 0 15px 0;
            }
    
            @media only screen and (max-width: 550px),
            screen and (max-device-width: 550px) {
                body .hide {
                    display: none !important;
                }
    
                body .buttonwrapper {
                    background-color: transparent !important;
                }
    
                body .button {
                    padding: 0px !important;
                }
    
                body .button a {
                    background-color: #e05443;
                    padding: 15px 15px 13px !important;
                }
    
                body .unsubscribe {
                    display: block;
                    margin-top: 20px;
                    padding: 10px 50px;
                    background: #2f3942;
                    border-radius: 5px;
                    text-decoration: none !important;
                    font-weight: bold;
                    color: #c7d8a7;
                }
            }
        </style>
    </head>
    
    <body>
        <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <!--[if (gte mso 9)|(IE)]>
                        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                                <![endif]-->
                    <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td bgcolor="#3b0000" class="header">
                                <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td height="70" style="padding:0 20px 20px 0;">
                                            <a href="http://ventunentregas.com">
                                                <img class="fix"
                                                    src="http://ventun.com/assets/img/logo-ventun.png"
                                                    width="70" height="70" border="0" alt="" />
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                ` + seleccionCabecera(opcion, cuerpo) + `
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ` + seleccionCuerpo(opcion, cuerpo) + `
                            </td>
                        </tr>
                        <!--<tr>
                                            <td class="innerpadding borderbottom">
                                                <img class="fix" src="images/wide.png" width="100%" border="0" alt="" />
                                            </td>
                                        </tr>-->
                        <tr>
                            <td class="innerpadding bodycopy footerTable">
                                Este correo fue enviado a travez de la plataforma multinivel MLM.<br>
                            </td>
                        </tr>
                        <tr>
                            ` + pie + `
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>`;
}