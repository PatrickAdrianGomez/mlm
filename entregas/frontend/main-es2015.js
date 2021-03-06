(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Inicio de Sesión</h5>\n    </div>\n    <div class=\"card-body\">\n      <form #formUser=\"ngForm\" (ngSubmit)=\"onSignIn()\">\n        <div class=\"form-group\">\n          <i class=\"fas fa-fingerprint\"></i>\n          <label for=\"ci\">&nbsp; Cédula de Identidad</label>\n          <input type=\"text\" class=\"form-control\" id=\"ci\" name=\"ci\" [(ngModel)]=\"user.ci\" #ci=\"ngModel\"\n            aria-describedby=\"ciHelp\" placeholder=\"Introduzca su CI\">\n          <small id=\"ciHelp\" class=\"form-text text-muted\">Su número de carnet incluida la extensión.</small>\n        </div>\n        <div class=\"form-group\">\n          <i class=\"fas fa-key\"></i>\n          <label for=\"phone\">&nbsp; Contraseña</label>\n          <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n            #password=\"ngModel\" placeholder=\"Enter Your Password\">\n          <div (click)=\"typeChange()\" class=\"ubicacion\">\n            <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n            <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n          </div>\n\n        </div>\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input id=\"recuerdame\" name=\"recuerdame\" type=\"checkbox\" class=\"form-control form-check-input\">\n            <span class=\"form-check-sign\">Recuerdame</span>\n          </label>\n        </div>\n        <div style=\"padding-bottom: 20px;\" class=\"text-center\">\n          <button class=\"btn waves-effect waves-light red darken-4\" type=\"submit\" name=\"action\">Ingresar\n            <i class=\"fas fa-sign-in-alt\"></i>\n          </button>\n        </div>\n      </form>\n    </div>\n    <!--<div class=\"card-footer text-muted text-center\">\n      <span style=\"margin-left:20px;\">¿Aún no tienes una cuenta?<br><a [routerLink]=\"['/sign/register']\"\n          [routerLinkActive]=\"['linkActivo']\" rel=\"noopener noreferrer\">Crear una cuenta</a></span>\n    </div>-->\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign/recover/recover.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign/recover/recover.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Cambio de Contraseña</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <form class=\"col s12\" name=\"formRecover\" #formRecover=\"ngForm\" (ngSubmit)=\"onSignIn()\">\n          <div class=\"form-group\" *ngIf=\"hayCodigo\">\n            <i class=\"fas fa-fingerprint\"></i>\n            <label for=\"ci\">&nbsp; Cédula de Identidad</label>\n            <input type=\"text\" class=\"form-control\" id=\"ci\" name=\"ci\" [(ngModel)]=\"user.ci\" #ci=\"ngModel\"\n              aria-describedby=\"ciHelp\" placeholder=\"Introduzca su CI\" required>\n            <small id=\"ciHelp\" class=\"form-text text-muted\">Su número de carnet incluida la extensión.</small>\n          </div>\n          <div class=\"form-group\" *ngIf=\"hayCodigo\">\n            <i class=\"fas fa-key\"></i>\n            <label for=\"password\" *ngIf=\"!hayCodigo\">&nbsp; Contraseña Enviada por Correo</label>\n            <label for=\"password\" *ngIf=\"hayCodigo\">&nbsp; Contraseña Actual</label>\n            <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n              #password=\"ngModel\" placeholder=\"Introduzca su Contraseña\">\n            <div (click)=\"typeChange()\" class=\"ubicacion\">\n              <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n              <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <i class=\"fas fa-key\"></i>\n                <label for=\"password1\">&nbsp; Nueva Contraseña</label>\n                <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password1\" name=\"password1\" [(ngModel)]=\"passwd1\"\n                  placeholder=\"Introduzca su Nueva Contraseña\" required>\n                <div (click)=\"typeChange()\" class=\"ubicacion\">\n                  <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n                  <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <i class=\"fas fa-key\"></i>\n                <label for=\"password2\">&nbsp; Repita Nueva Contraseña</label>\n                <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password2\" name=\"password\" [(ngModel)]=\"passwd2\"\n                  placeholder=\"Repita su Nueva Contraseña\" required>\n                <div (click)=\"typeChange()\" class=\"ubicacion\">\n                  <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n                  <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-row\" *ngIf=\"hayCodigo == false\">\n            <div class=\"form-group col-12\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input id=\"estado\" name=\"estado\" type=\"checkbox\" class=\"form-control form-check-input\" ngModel required>\n                  <span class=\"form-check-sign\">\n                    Estoy de acuerdo con <a href=\"http://ventun.com/index.php/terms\" target=\"_blank\">Términos de\n                      Servicio</a>\n                    y <a href=\"http://ventun.com/index.php/privacy\" target=\"_blank\">Política de Privacidad</a>\n                  </span>\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-bottom: 20px;\" class=\"text-center\">\n            <div class=\"form-row\">\n              <div class=\"col-12 col-md-2\"></div>\n              <button class=\"btn waves-effect waves-light red darken-4 col-12 col-md-4\" [disabled]=\"formRecover.invalid\"\n                type=\"submit\" name=\"action\">Cambio de Contraseña\n                <i class=\"fas fa-sign-in-alt\"></i>\n              </button>\n              <button class=\"btn waves-effect waves-light red darken-4 col-12 col-md-4\" name=\"actionBack\"\n                (click)=\"vaTras()\">Cancelar\n              </button>\n              <div class=\"col-12 col-md-2\"></div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--\n    <div style=\"padding-bottom: 20px;\">\n      <button class=\"btn waves-effect waves-light red darken-4\" type=\"submit\" name=\"action\">Recuperar\n        <i class=\"material-icons right\">send</i>\n      </button>\n    </div>\n    <span style=\"margin-left:20px;\"><a [routerLink]=\"['/sign/login']\" [routerLinkActive]=\"['linkActivo']\"\n        rel=\"noopener noreferrer\">Volver a Iniciar Sesión</a></span>\n\n  </div>\n</div>-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Registro de Usuario</h5>\n    </div>\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"onRegister()\" name=\"contextForm\" #contextForm=\"ngForm\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"ci\">CI</label>\n            <input type=\"text\" class=\"form-control\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"invitation.profile.ci\" id=\"ci\"\n              placeholder=\"Cédula de Identidad\" minlength=\"6\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n            <select class=\"form-control\" name=\"expedido\" id=\"expedido\" #expedido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.expedido\" required aria-hidden=\"true\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            \n          </div>\n          <!--<div class=\"form-group col-6 col-md-4\">\n            <a class=\"btn btn-warning\" style=\"margin-top: 28px;\" (click)=\"verificarUsuario()\">Verificar</a>\n          </div>-->\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"nombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"invitation.profile.firstName\"\n              id=\"nombre\" placeholder=\"nombre\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"apellidos\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" name=\"apellidoP\" #apellido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.lastNameP\" id=\"apellidoP\" placeholder=\"Apellido Paterno\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"apellidos\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" name=\"apellidoM\" #apellido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.lastNameM\" id=\"apellidoM\" placeholder=\"Apellido Materno\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"gender\">Sexo</label>\n            <select class=\"form-control\" id=\"gender\" name=\"gender\" #gender=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.gender\" required>\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option [ngValue]=\"0\">\n                Hombre\n              </option>\n              <option [ngValue]=\"1\">\n                Mujer\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"birthDate\">Fecha de Nacimiento</label>\n            <input type=\"date\" class=\"form-control\" name=\"birthDate\" #birthDate=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.birthDate\" id=\"birthDate\" placeholder=\"Fecha de Nacimiento\">\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"phone\">Teléfono</label>\n            <input type=\"phone\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"invitation.contact.phone\"\n              id=\"phone\" placeholder=\"Número Telefónico\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"email\">e-mail</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"invitation.contact.email\"\n              id=\"email\" placeholder=\"Correo Electrónico\">\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\" hidden>\n            <label for=\"password\">Contraseña</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\"\n              [(ngModel)]=\"invitation.password\" id=\"password\" placeholder=\"Contraseña\">\n\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"local\" class=\"control-label\">País</label>\n\n              <select class=\"form-control\" name=\"local\" id=\"local\" #local=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.country\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectedValue($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                  {{littleLocal.name}}\n                </option>\n              </select>\n\n              \n            </div>\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n              <select class=\"form-control\" name=\"depaMini\" id=\"depaMini\" #depaMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.state\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectDepartamento($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                  {{littleDepa.name}}\n                </option>\n              </select>\n              \n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n              <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.city\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectCiudad($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                  {{littleCiudad.name}}\n                </option>\n              </select>\n              \n            </div>\n\n            <div class=\"form-group col-md-4 campoFormulario\">\n              <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n              <select class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.zone\" required aria-hidden=\"true\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                  {{littleZona.name}}\n                </option>\n              </select>\n              \n            </div>\n            <div class=\"form-group col-md-8 campoFormulario\">\n              <label class=\"control-label\">\n                Calle\n              </label>\n              <input name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\" type=\"text\" required\n                #streetDirecction=\"ngModel\" [(ngModel)]=\"invitation.contact.address.especificLocation\">\n            </div>\n            <div class=\"form-group col-md-4 campoFormulario\">\n              <label for=\"codePostal\" class=\"control-label\">Código Postal</label>\n              <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n                #codePostal=\"ngModel\" [(ngModel)]=\"invitation.contact.codePostal\" minlength=\"4\" required>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"compania\">Empresa</label>\n            <select class=\"form-control\" id=\"companyName\" name=\"companyName\" #companyName=\"ngModel\" \n              [(ngModel)]=\"job.companyName\" required (ngModelChange)=\"updateSelectEquipo($event)\">\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option *ngFor='let item of this.ListCompany' [ngValue]=\"item._id\">\n                {{item.name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"tipo\">Rol</label>\n            <select class=\"form-control\" id=\"typeAccount\" name=\"typeAccount\" #typeAccount=\"ngModel\" \n              [(ngModel)]=\"job.typeAccount\" required>\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option *ngFor='let item of this.ListRol' [ngValue]=\"item._id\">\n                {{item.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-12\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input id=\"acuerdo\" name=\"acuerdo\" type=\"checkbox\" #acuerdo=\"ngModel\"\n                  class=\"form-control form-check-input\" [(ngModel)]=\"invitation.estado\" required>\n                <span class=\"form-check-sign\">Estoy de acuerdo con Términos de Servicio y Política de Privacidad</span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Registrar</button>\n      </form>\n    </div>\n    <div class=\"card-footer text-muted text-center\">\n      <span>Ya poseo una cuenta<br>\n        <a [routerLink]=\"['/sign/login']\" [routerLinkActive]=\"['linkActivo']\" rel=\"noopener noreferrer\">Iniciar\n          Sesión</a>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign/login/login.component */ "./src/app/sign/login/login.component.ts");
/* harmony import */ var _sign_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/register/register.component */ "./src/app/sign/register/register.component.ts");
/* harmony import */ var _sign_recover_recover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign/recover/recover.component */ "./src/app/sign/recover/recover.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");







const routes = [
    { path: 'sign/login', component: _sign_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sign/register', component: _sign_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'sign/password', component: _sign_recover_recover_component__WEBPACK_IMPORTED_MODULE_5__["RecoverComponent"] },
    {
        path: 'central',
        loadChildren: () => __webpack_require__.e(/*! import() | central-central-module */ "central-central-module").then(__webpack_require__.bind(null, /*! ./central/central.module */ "./src/app/central/central.module.ts")).then(m => m.CentralModule)
    },
    {
        path: '',
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]],
        loadChildren: () => __webpack_require__.e(/*! import() | adm-adm-module */ "adm-adm-module").then(__webpack_require__.bind(null, /*! ./adm/adm.module */ "./src/app/adm/adm.module.ts")).then(m => m.AdmModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MultiNivel de MultiEmpresas';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _sign_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign/login/login.component */ "./src/app/sign/login/login.component.ts");
/* harmony import */ var _sign_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign/register/register.component */ "./src/app/sign/register/register.component.ts");
/* harmony import */ var _sign_recover_recover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign/recover/recover.component */ "./src/app/sign/recover/recover.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _sign_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _sign_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _sign_recover_recover_component__WEBPACK_IMPORTED_MODULE_9__["RecoverComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/invitation.ts":
/*!**************************************!*\
  !*** ./src/app/models/invitation.ts ***!
  \**************************************/
/*! exports provided: invitation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invitation", function() { return invitation; });
class invitation {
}


/***/ }),

/***/ "./src/app/models/schema.ts":
/*!**********************************!*\
  !*** ./src/app/models/schema.ts ***!
  \**********************************/
/*! exports provided: job, address, field, contact, vehiculo, profile, Contexto, State, Products, Pedido, Location, TypeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "job", function() { return job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiculo", function() { return vehiculo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contexto", function() { return Contexto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pedido", function() { return Pedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeContext", function() { return TypeContext; });
class job {
}
class address {
}
class field {
}
class contact {
}
class vehiculo {
}
class profile {
}
class Contexto {
    constructor(_id, acronym, name, description, estado, owner) {
        this._id = _id;
        this.acronym = acronym;
        this.name = name;
        this.description = description;
        this.estado = estado;
        this.owner = owner;
    }
}
Contexto.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String }
];
class State {
}
class Products {
}
class Pedido {
}
class Location {
    constructor(_id, acronym, name, level, typecon_id, estado, owner, resources, geoData, childs = [], ischeck = false) {
        this._id = _id;
        this.acronym = acronym;
        this.name = name;
        this.level = level;
        this.typecon_id = typecon_id;
        this.estado = estado;
        this.owner = owner;
        this.resources = resources;
        this.geoData = geoData;
        this.childs = childs;
        this.ischeck = ischeck;
    }
}
Location.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: undefined },
    { type: Array },
    { type: Boolean }
];
class TypeContext {
    constructor(_id, acronym, name, description, estado, context_id) {
        this._id = _id;
        this.acronym = acronym;
        this.name = name;
        this.description = description;
        this.estado = estado;
        this.context_id = context_id;
    }
}
TypeContext.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
class user {
}


/***/ }),

/***/ "./src/app/services/authentication-storage.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/authentication-storage.service.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationStorageService", function() { return AuthenticationStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationStorageService = class AuthenticationStorageService {
    constructor() { }
    isAuthenticated() {
        //return this.getToken() == '1';
        if (!this.getToken()) {
            return false;
        }
        else {
            return true;
        }
    }
    storeToken(token) {
        localStorage.setItem("token", token);
    }
    getToken() {
        return localStorage.getItem("userType");
    }
    removeToken() {
        return localStorage.removeItem("token");
    }
};
AuthenticationStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationStorageService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-storage.service */ "./src/app/services/authentication-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let AuthenticationService = class AuthenticationService {
    constructor(authenticate, router, http) {
        this.authenticate = authenticate;
        this.router = router;
        this.http = http;
    }
    canActivate() {
        if (!localStorage.getItem('userCi')) {
            this.redirectLogin();
        }
        else {
            return true;
        }
        /*if (!this.authenticate.isAuthenticated()) {
          localStorage.clear();
          console.log('You are not authorised to view this page');
          this.redirectLogin();
          return false;
        }
        return true;*/
    }
    redirectLogin() {
        this.router.navigate(['/sign/login']);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _authentication_storage_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/connexion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/connexion.service.ts ***!
  \***********************************************/
/*! exports provided: ConnexionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionService", function() { return ConnexionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _globalVars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ConnexionService = class ConnexionService {
    constructor(http) {
        this.http = http;
        this.unvalor = '';
        this.url_base = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].domain + "/";
        let headAuth = this.generarAutorizacion('with');
        this.headersWithAuth = headAuth;
    }
    generarAutorizacion(auth) {
        let head;
        if (localStorage.getItem("token") == '') {
            auth = 'without';
        }
        switch (auth) {
            case 'with':
                head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                });
                break;
            case 'without':
                head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                });
                break;
            default:
                head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                });
                break;
        }
        return head;
    }
    get_data(ruta) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.get(this.url_base + subRuta, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataWithParams(ruta, params) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.get(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataWithParamsOne(ruta, params) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.get(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataWithParamsNoAuth(ruta, params) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        //onsole.log(this.url_base + subRuta + params, this.generarAutorizacion('with'));
        return this.http.get(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataId(ruta, id) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.get(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('with') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    addObject(ruta, xobject) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.post(this.url_base + subruta + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    editObject(ruta, xobject) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        let xid = xobject['_id'];
        return this.http.put(this.url_base + subruta + "/" + xid + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    postData(ruta, data) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.post(this.url_base + subruta, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    delObject(ruta, id) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.delete(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('with') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    verifyUser(ruta) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        return this.http.post(this.url_base + subruta, { headers: this.generarAutorizacion('with') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            //console.log('resresresresresresresresresresresresresresres', res);
        }));
    }
};
ConnexionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConnexionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConnexionService);



/***/ }),

/***/ "./src/app/services/globalVars.ts":
/*!****************************************!*\
  !*** ./src/app/services/globalVars.ts ***!
  \****************************************/
/*! exports provided: globalVars, globalConfigurations, userPermissions, empresaPermissions, globalImages, jobs, globalImagesSize, globalRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalVars", function() { return globalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalConfigurations", function() { return globalConfigurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPermissions", function() { return userPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empresaPermissions", function() { return empresaPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalImages", function() { return globalImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobs", function() { return jobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalImagesSize", function() { return globalImagesSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalRoutes", function() { return globalRoutes; });
const globalVars = {
    domain: 'http://206.189.178.134:16679',
    filesDomain: 'http://206.189.178.134:16679',
    //domain: 'http://127.0.0.1:16679',
    //filesDomain: 'http://127.0.0.1:16679',
    //domain: '',
    //filesDomain: '',
    language: 'es',
    moneda: 'BOL',
    caducaEnDias: 7
};
const globalConfigurations = {
    pais: '5fd925beb6598a11942984d9',
    ciudad: '5fd9284cb6598a11942984dd',
    company: '5fd9b743b6598a11942984eb',
    delivery: '5fd9b66cb6598a11942984ea',
    rol: '5fd9b99cb6598a11942984ee',
    vehiculo: '5fd9bcc4b6598a11942984f4'
};
const userPermissions = {
    adm: '5fd9b9f2b6598a11942984ef',
    // CENTRALISTA ES EL ADMINISTRADOR DE LOS DELIVERYS
    cen: '608711e2ae92e862a782d784',
    //SOLO REGISTRA VENTAS
    dist: '5fd9bad9b6598a11942984f0',
    //VE TODOS LOS PEDIDOS DE TODAS LAS EMPRESAS Y DESPUES DE ELEGIRLAS, SOLO VE LAS PROPIAS
    rep: '5fd9bae7b6598a11942984f1',
    sup: '5fd9baf7b6598a11942984f2'
};
const empresaPermissions = {
    // Empresa principal administradora de todo el sistema
    prin: '5fd9b7c0b6598a11942984ec'
};
const globalImages = {};
var jobs = [];
const globalImagesSize = {
    widthScale: 768,
    heightScale: 1024,
    thumbWidth: 480,
    thumbHeight: 640 //vga
};
const globalRoutes = {
    person: 'api/v1/qperson',
    personInvitation: 'api/v1/personInvitation',
    personAssociated: 'api/v1/personAssociated',
    company: 'api/v1/qcompany',
    job: 'api/v1/qjob',
    location: 'api/v1/qlocation',
    invitation: 'api/v1/invitation',
    invitationQuick: 'api/v1/qinvitation',
    context: 'api/v1/qcontext',
    contextact: 'api/v1/qcontext?estado=1',
    typecontext: 'api/v1/qtypecontext',
    typecontextact: 'api/v1/qtypecontext?estado=1',
    products: 'api/v1/qproducts',
    pedido: 'api/v1/qpedido',
    creaPedido: 'api/v1/pedido',
    consumer: 'api/v1/qconsumer',
    buscaConsumer: 'api/v1/getConsumers',
    mailSender: 'api/v1/mailSender',
    userVerification: 'api/v1/userVerification',
    mailProduct: 'api/v1/mailProduct',
    mailChangeStatus: 'api/v1/changeStatus',
    user: 'api/v1/quser',
    login: 'api/v1/login',
    register: 'api/v1/register',
    recover: 'api/v1/recover',
    whatsAppConnect: 'api/v1/connectW',
    whatsAppSend: 'api/v1/sendW'
};


/***/ }),

/***/ "./src/app/sign/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/sign/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubicacion {\r\n    width: 18px!important;\r\n    height: 14px!important;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: -50px;\r\n    left: -10px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51YmljYWNpb24ge1xyXG4gICAgd2lkdGg6IDE4cHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4IWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sign/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/sign/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");







let LoginComponent = class LoginComponent {
    constructor(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.typeInput = 'password';
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_6__["user"]();
    }
    ngOnInit() {
        if (localStorage.getItem('userEmail')) {
            this.user.email = localStorage.getItem('userEmail');
        }
    }
    onSignIn() {
        try {
            this.connexion.get_dataWithParams('login', '?ci=' + this.user.ci + '&password=' + this.user.password).subscribe((userJWT) => {
                if (userJWT.toString() == '0') {
                    localStorage.setItem('ci', this.user.ci.toString());
                    localStorage.setItem('pass', this.user.password.toString());
                    this._router.navigate(['/sign/password']);
                }
                else {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(userJWT)) {
                        localStorage.clear();
                        /*if (userJWT['userCompany'].length > 0) {
                          for (let i = 0; i < userJWT['userCompany'].length; i++) {
                            console.log('userJWT[userCompany]userJWT[userCompany]', userJWT['userCompany']);
                          }
                        }*/
                        for (var propiedad in userJWT) {
                            if (userJWT.hasOwnProperty(propiedad)) {
                                if ((userJWT['userCompany'].length > 0) && (propiedad == 'userCompany')) {
                                    localStorage.setItem(propiedad, JSON.stringify(userJWT[propiedad]));
                                }
                                else {
                                    if ((userJWT['vehiculo']) && (propiedad == 'vehiculo')) {
                                        localStorage.setItem(propiedad, JSON.stringify(userJWT[propiedad]));
                                    }
                                    else {
                                        localStorage.setItem(propiedad, userJWT[propiedad].toString());
                                    }
                                }
                                src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_5__["globalConfigurations"][propiedad] = userJWT[propiedad];
                            }
                        }
                        if (localStorage.getItem('userActive') == '0') {
                            localStorage.removeItem('userActive');
                            this._router.navigate(['/profile']);
                        }
                        else {
                            localStorage.removeItem('userActive');
                            this._router.navigate(['/']);
                        }
                    }
                    else {
                        localStorage.clear();
                    }
                }
            }, (error) => {
                let errorMessage = error;
                if (errorMessage.error.message === 'User does not exist') {
                    alert('Usuario aún no registrado. \n Por favor intente nuevamente');
                    this.user.email = null;
                    this.user.password = null;
                }
                if (errorMessage.error.message === 'Password did not match') {
                    alert('Contraseña incorrecta. \n Por favor intente nuevamente');
                    this.user.email = null;
                    this.user.password = null;
                }
            });
        }
        catch (error) {
            alert('El nombre de usuario o la contraseña son incorrectos. \n Por favor intente nuevamente');
            this.user.email = null;
            this.user.password = null;
        }
    }
    typeChange() {
        if (this.typeInput == 'password') {
            this.typeInput = 'text';
        }
        else {
            this.typeInput = 'password';
        }
        console.log(this.typeInput);
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/sign/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/sign/recover/recover.component.css":
/*!****************************************************!*\
  !*** ./src/app/sign/recover/recover.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ubicacion {\r\n    width: 18px!important;\r\n    height: 14px!important;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: -50px;\r\n    left: -10px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9yZWNvdmVyL3JlY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWduL3JlY292ZXIvcmVjb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnViaWNhY2lvbiB7XHJcbiAgICB3aWR0aDogMThweCFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign/recover/recover.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sign/recover/recover.component.ts ***!
  \***************************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let RecoverComponent = class RecoverComponent {
    constructor(connexion, _router, _location) {
        this.connexion = connexion;
        this._router = _router;
        this._location = _location;
        this.typeInput = 'password';
        this.passwd1 = '';
        this.passwd2 = '';
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["user"]();
    }
    ngOnInit() {
        try {
            let codigo = localStorage.getItem('code').substr(1);
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(codigo)) {
                this.hayCodigo = false;
                this.user.password = localStorage.getItem('pass');
                this.user.ci = localStorage.getItem('ci');
            }
            else {
                this.hayCodigo = true;
            }
        }
        catch (error) {
            this.hayCodigo = false;
            this.user.password = localStorage.getItem('pass');
            this.user.ci = localStorage.getItem('ci');
        }
    }
    onSignIn() {
        if ((this.passwd1 === this.passwd2) && (this.passwd2 != '')) {
            try {
                this.connexion.get_dataWithParamsNoAuth('recover', '?ci=' + this.user.ci + '&password=' + this.user.password + '&newpass=' + this.passwd2).subscribe((userJWT) => {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(userJWT)) {
                        localStorage.clear();
                        this.loginWhitOutRegister(this.user.ci, this.passwd2);
                        this._router.navigate(['/profile']);
                    }
                    else {
                        localStorage.clear();
                    }
                }, (error) => {
                    let errorMessage = error;
                    if (errorMessage.error.message === 'User does not exist') {
                        alert('Usuario aún no registrado. \n Por favor intente nuevamente');
                        this.user.email = null;
                        this.user.password = null;
                    }
                    if (errorMessage.error.message === 'Password did not match') {
                        alert('Contraseña incorrecta. \n Por favor intente nuevamente');
                        this.user.email = null;
                        this.user.password = null;
                    }
                });
            }
            catch (error) {
                alert('El nombre de usuario o la contraseña son incorrectos. \n Por favor intente nuevamente');
                this.user.email = null;
                this.user.password = null;
            }
        }
        else {
            alert('Las nuevas contraseñas deben de coincidir');
        }
    }
    typeChange() {
        if (this.typeInput == 'password') {
            this.typeInput = 'text';
        }
        else {
            this.typeInput = 'password';
        }
    }
    vaTras() {
        this._location.back();
    }
    loginWhitOutRegister(ci, pass) {
        try {
            this.connexion.get_dataWithParams('login', '?ci=' + ci + '&password=' + pass).subscribe((userJWT) => {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(userJWT)) {
                    localStorage.clear();
                    for (var propiedad in userJWT) {
                        if (userJWT.hasOwnProperty(propiedad)) {
                            if ((userJWT['userCompany'].length > 0) && (propiedad == 'userCompany')) {
                                localStorage.setItem(propiedad, JSON.stringify(userJWT[propiedad]));
                            }
                            else {
                                if ((userJWT['vehiculo']) && (propiedad == 'vehiculo')) {
                                    localStorage.setItem(propiedad, JSON.stringify(userJWT[propiedad]));
                                }
                                else {
                                    localStorage.setItem(propiedad, userJWT[propiedad].toString());
                                }
                            }
                            src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_6__["globalConfigurations"][propiedad] = userJWT[propiedad];
                        }
                    }
                    if (localStorage.getItem('userActive') == '0') {
                        localStorage.removeItem('userActive');
                        this._router.navigate(['/profile']);
                    }
                    else {
                        localStorage.removeItem('userActive');
                        this._router.navigate(['/']);
                    }
                }
                else {
                    localStorage.clear();
                }
            }, (error) => {
                let errorMessage = error;
                if (errorMessage.error.message === 'User does not exist') {
                    alert('Usuario aún no registrado. \n Por favor intente nuevamente');
                    this.user.email = null;
                    this.user.password = null;
                }
                if (errorMessage.error.message === 'Password did not match') {
                    alert('Contraseña incorrecta. \n Por favor intente nuevamente');
                    this.user.email = null;
                    this.user.password = null;
                }
            });
        }
        catch (error) {
            alert('El nombre de usuario o la contraseña son incorrectos. \n Por favor intente nuevamente');
            this.user.email = null;
            this.user.password = null;
        }
    }
};
RecoverComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
RecoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recover',
        template: __webpack_require__(/*! raw-loader!./recover.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign/recover/recover.component.html"),
        styles: [__webpack_require__(/*! ./recover.component.css */ "./src/app/sign/recover/recover.component.css")]
    })
], RecoverComponent);



/***/ }),

/***/ "./src/app/sign/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/sign/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sign/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sign/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connexion.service */ "./src/app/services/connexion.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/schema */ "./src/app/models/schema.ts");
/* harmony import */ var _models_invitation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/invitation */ "./src/app/models/invitation.ts");
/* harmony import */ var src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/globalVars */ "./src/app/services/globalVars.ts");








let RegisterComponent = class RegisterComponent {
    constructor(connexion, _router) {
        this.connexion = connexion;
        this._router = _router;
        this.correct = false;
        this.ListCompany = [];
        this.ListRol = [];
        this.ListLOC = [];
        this.ListLOCMain = [];
        this.listDepa = [];
        this.depasCI = [];
        this.listCiudad = [];
        this.listZona = [];
        this.invitation = new _models_invitation__WEBPACK_IMPORTED_MODULE_6__["invitation"]();
        this.job = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["job"]();
        this.contact = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["contact"]();
        this.profile = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["profile"]();
        this.address = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["address"]();
        this.invitation.job = this.job;
        this.vehiculo = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["vehiculo"]();
        //this.field = new field();
    }
    ngOnInit() {
        if (this.verificaUsuarioValido()) {
            this.connexion.get_data('location').subscribe(reslo => {
                this.ListLOC = reslo;
                this.ListLOCMain = reslo.filter(LOC => LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].pais);
                this.depasCI = this.ListLOC.filter(LOC => LOC.owner == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].ciudad);
                this.ListCompany = reslo.filter(LOC => (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].company) || (LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].delivery));
                this.ListRol = reslo.filter(LOC => LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].rol);
            }, error => {
                console.log('Hubo un problema al cargar datos. ' + error);
            });
            /*this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
              this.ListCompany = reslo.filter(LOC => (LOC.context_id == globalConfigurations.company) || (LOC.context_id == globalConfigurations.delivery));
            }, error => {
              console.log('Hubo un problema al cargar datos. ' + error);
            });
            this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
              console.log('typecontext', reslo)
              this.ListRol = reslo.filter(LOC => LOC.context_id == globalConfigurations.rol);
            }, error => {
              console.log('Hubo un problema al cargar datos. ' + error);
            });*/
            this.invitation.contact = this.contact;
            this.invitation.vehiculo = this.vehiculo;
            this.invitation.profile = this.profile;
            this.contact.address = this.address;
            this.contact.address.city = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
            this.contact.address.state = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
            this.contact.address.zone = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
            //this.invitation.contact = this.contact;
        }
        else {
            this._router.navigate(['/sign/login']);
        }
    }
    verificaUsuarioValido() {
        let hayCodigo = false;
        try {
            let codigo = localStorage.getItem('code').substr(1);
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(codigo)) {
                hayCodigo = false;
            }
            else {
                let empresa = localStorage.getItem('userCompany');
                empresa = JSON.parse(empresa);
                if (src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["empresaPermissions"].prin == empresa[0]['companyName']) {
                    if (empresa[0]['sucursalName'] == 0) {
                        hayCodigo = true;
                    }
                }
            }
        }
        catch (error) {
            hayCodigo = false;
        }
        return hayCodigo;
    }
    onRegister() {
        this.agregarDireccion();
        this.invitation.job = { ciMain: '', companyName: this.job.companyName, sucursalName: '0', typeAccount: this.job.typeAccount };
        this.invitation.profile.photo = 'assets/img/noPicture.png';
        this.connexion.addObject('register', this.invitation).subscribe(regis => {
            localStorage.setItem('userPhone', regis.toString());
            alert('Registro de Usuario Satisfactorio, Verifique su correo electrónico.');
            this.correct = true;
            this._router.navigate(['/sign/login']);
        }, error => {
            var errorMessage = error;
            this.correct = false;
            switch (errorMessage.status) {
                case 400:
                    alert('Usuario ya registrado. \n Por favor intente nuevamente.');
                    break;
                default:
                    alert('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.');
                    break;
            }
        });
    }
    agregarDireccion() {
        let local, paisMini, depaMini, cityMini, zonaMini;
        let objDepartamento;
        let objCiudad;
        let objZona;
        try {
            local = $('#local')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(local)) {
                let separador = local.split(": ", 2);
                paisMini = separador[1];
                depaMini = $('#depaMini')[0].value;
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(depaMini)) {
                let separador = depaMini.split(": ", 2);
                objDepartamento = {
                    id: separador[1],
                    valor: $('#depaMini')[0].options[separador[0]].text
                };
            }
            cityMini = $('#cityMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(cityMini)) {
                let separador = cityMini.split(": ", 2);
                objCiudad = {
                    id: separador[1],
                    valor: $('#cityMini')[0].options[separador[0]].text
                };
            }
            ;
            zonaMini = $('#zonaMini')[0].value;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(zonaMini)) {
                let separador = zonaMini.split(": ", 2);
                objZona = {
                    id: separador[1],
                    valor: $('#zonaMini')[0].options[separador[0]].text
                };
            }
            let objAddress = {
                country: paisMini,
                state: objDepartamento,
                city: objCiudad,
                zone: objZona,
                geoData: this.invitation.contact.address.geoData,
                especificLocation: this.invitation.contact.address.especificLocation
            };
            this.invitation.contact.address = objAddress;
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    updateSelectedValue(index) {
        this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectDepartamento(index) {
        this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectCiudad(index) {
        this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
    }
    updateSelectEquipo(index) {
        //this.ListRol = this.ListLOC.filter(LOC => LOC.typecon_id == index);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/sign/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ventun\entregas\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map