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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Inicio de Sesión</h5>\n    </div>\n    <div class=\"card-body\">\n      <form #formUser=\"ngForm\" (ngSubmit)=\"onSignIn()\">\n        <div class=\"form-group\">\n          <i class=\"fas fa-fingerprint\"></i>\n          <label for=\"ci\">&nbsp; Cédula de Identidad</label>\n          <input type=\"text\" class=\"form-control\" id=\"ci\" name=\"ci\" [(ngModel)]=\"user.ci\" #ci=\"ngModel\"\n            aria-describedby=\"ciHelp\" placeholder=\"Introduzca su CI\">\n          <small id=\"ciHelp\" class=\"form-text text-muted\">Su número de carnet incluida la extensión.</small>\n        </div>\n        <div class=\"form-group\">\n          <i class=\"fas fa-key\"></i>\n          <label for=\"phone\">&nbsp; Contraseña</label>\n          <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n            #password=\"ngModel\" placeholder=\"Enter Your Password\">\n          <div (click)=\"typeChange()\" class=\"ubicacion\">\n            <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n            <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n          </div>\n\n        </div>\n        <div class=\"form-group form-check\">\n          <label class=\"form-check-label\">\n            <input id=\"recuerdame\" name=\"recuerdame\" type=\"checkbox\" class=\"form-control form-check-input\">\n            <span class=\"form-check-sign\">Recuerdame</span>\n          </label>\n        </div>\n        <div style=\"padding-bottom: 20px;\" class=\"text-center\">\n          <button class=\"btn waves-effect waves-light red darken-4\" type=\"submit\" name=\"action\">Ingresar\n            <i class=\"fas fa-sign-in-alt\"></i>\n          </button>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer text-muted text-center\">\n      <span style=\"margin-left:20px;\">¿Aún no tienes una cuenta?<br><a [routerLink]=\"['/sign/register']\"\n          [routerLinkActive]=\"['linkActivo']\" rel=\"noopener noreferrer\">Crear una cuenta</a></span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/recover/recover.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/recover/recover.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Cambio de Contraseña</h5>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <form class=\"col s12\" #formUser=\"ngForm\" (ngSubmit)=\"onSignIn()\">\n          <div class=\"form-group\">\n            <i class=\"fas fa-fingerprint\"></i>\n            <label for=\"ci\">&nbsp; Cédula de Identidad</label>\n            <input type=\"text\" class=\"form-control\" id=\"ci\" name=\"ci\" [(ngModel)]=\"user.ci\" #ci=\"ngModel\"\n              aria-describedby=\"ciHelp\" placeholder=\"Introduzca su CI\">\n            <small id=\"ciHelp\" class=\"form-text text-muted\">Su número de carnet incluida la extensión.</small>\n          </div>\n          <div class=\"form-group\">\n            <i class=\"fas fa-key\"></i>\n            <label for=\"password\">&nbsp; Contraseña</label>\n            <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\n              #password=\"ngModel\" placeholder=\"Introduzca su Contraseña\">\n            <div (click)=\"typeChange()\" class=\"ubicacion\">\n              <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n              <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <i class=\"fas fa-key\"></i>\n                <label for=\"password1\">&nbsp; Nueva Contraseña</label>\n                <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password1\" name=\"password1\"\n                  [(ngModel)]=\"passwd1\" placeholder=\"Introduzca su Nueva Contraseña\">\n                <div (click)=\"typeChange()\" class=\"ubicacion\">\n                  <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n                  <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <i class=\"fas fa-key\"></i>\n                <label for=\"password2\">&nbsp; Repita Nueva Contraseña</label>\n                <input type=\"{{typeInput}}\" class=\"form-control\" id=\"password2\" name=\"password\"\n                  [(ngModel)]=\"passwd2\" placeholder=\"Repita su Nueva Contraseña\">\n                <div (click)=\"typeChange()\" class=\"ubicacion\">\n                  <i class=\"far fa-eye\" *ngIf=\"typeInput=='password'\" style=\"float: right;\"></i>\n                  <i class=\"far fa-eye-slash\" *ngIf=\"typeInput=='text'\" style=\"float: right;\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"padding-bottom: 20px;\" class=\"text-center\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-2\"></div>\n              <button class=\"btn waves-effect waves-light red darken-4 col-12 col-md-4\" type=\"submit\" name=\"action\">Cambio de Contraseña\n                <i class=\"fas fa-sign-in-alt\"></i>\n              </button>\n              <button class=\"btn waves-effect waves-light red darken-4 col-12 col-md-4\" name=\"action\" (click)=\"vaTras()\">Cancelar\n              </button>\n              <div class=\"col-12 col-md-2\"></div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--\n    <div style=\"padding-bottom: 20px;\">\n      <button class=\"btn waves-effect waves-light red darken-4\" type=\"submit\" name=\"action\">Recuperar\n        <i class=\"material-icons right\">send</i>\n      </button>\n    </div>\n    <span style=\"margin-left:20px;\"><a [routerLink]=\"['/sign/login']\" [routerLinkActive]=\"['linkActivo']\"\n        rel=\"noopener noreferrer\">Volver a Iniciar Sesión</a></span>\n\n  </div>\n</div>-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card\" style=\"top: 2em; vertical-align: center;\">\n    <div class=\"card-header text-center\">\n      <img src=\"assets/img/logos/v.png\" alt=\"Ventun\">\n      <h5>Registro de Usuario</h5>\n    </div>\n    <div class=\"card-body\">\n      <form (ngSubmit)=\"onRegister()\" name=\"contextForm\" #contextForm=\"ngForm\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"ci\">CI</label>\n            <input type=\"text\" class=\"form-control\" name=\"ci\" #ci=\"ngModel\" [(ngModel)]=\"invitation.profile.ci\" id=\"ci\"\n              placeholder=\"Cédula de Identidad\" minlength=\"6\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"expedido\" class=\"control-label\">Expedido en:</label>\n            <select class=\"form-control\" name=\"expedido\" id=\"expedido\" #expedido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.expedido\" required aria-hidden=\"true\">\n              <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n              <option *ngFor='let littleDepa of depasCI' [ngValue]=\"littleDepa._id\">\n                {{littleDepa.name}}\n              </option>\n            </select>\n            \n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <a class=\"btn btn-warning\" style=\"margin-top: 28px;\" (click)=\"verificarUsuario()\">Verificar</a>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"nombre\">Nombre</label>\n            <input type=\"text\" class=\"form-control\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"invitation.profile.firstName\"\n              id=\"nombre\" placeholder=\"nombre\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"apellidos\">Apellido Paterno</label>\n            <input type=\"text\" class=\"form-control\" name=\"apellidoP\" #apellido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.lastNameP\" id=\"apellidoP\" placeholder=\"Apellido Paterno\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"apellidos\">Apellido Materno</label>\n            <input type=\"text\" class=\"form-control\" name=\"apellidoM\" #apellido=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.lastNameM\" id=\"apellidoM\" placeholder=\"Apellido Materno\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"gender\">Sexo</label>\n            <select class=\"form-control\" id=\"gender\" name=\"gender\" #gender=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.gender\" required>\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option [ngValue]=\"0\">\n                Hombre\n              </option>\n              <option [ngValue]=\"1\">\n                Mujer\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"birthDate\">Fecha de Nacimiento</label>\n            <input type=\"date\" class=\"form-control\" name=\"birthDate\" #birthDate=\"ngModel\"\n              [(ngModel)]=\"invitation.profile.birthDate\" id=\"birthDate\" placeholder=\"Fecha de Nacimiento\">\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"phone\">Teléfono</label>\n            <input type=\"phone\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"invitation.contact.phone\"\n              id=\"phone\" placeholder=\"Número Telefónico\" required>\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\">\n            <label for=\"email\">e-mail</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"invitation.contact.email\"\n              id=\"email\" placeholder=\"Correo Electrónico\">\n\n          </div>\n          <div class=\"form-group col-6 col-md-4\" hidden>\n            <label for=\"password\">Contraseña</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\"\n              [(ngModel)]=\"invitation.password\" id=\"password\" placeholder=\"Contraseña\">\n\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"local\" class=\"control-label\">País</label>\n\n              <select class=\"form-control\" name=\"local\" id=\"local\" #local=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.country\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectedValue($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleLocal of ListLOCMain' [ngValue]=\"littleLocal._id\">\n                  {{littleLocal.name}}\n                </option>\n              </select>\n\n              \n            </div>\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"depaMini\" class=\"control-label\">Departamento</label>\n              <select class=\"form-control\" name=\"depaMini\" id=\"depaMini\" #depaMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.state\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectDepartamento($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleDepa of listDepa' [ngValue]=\"littleDepa._id\">\n                  {{littleDepa.name}}\n                </option>\n              </select>\n              \n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"form-group col-md-12 col-lg-6 campoFormulario\">\n              <label for=\"cityMini\" class=\"control-label\">Ciudad</label>\n              <select class=\"form-control\" name=\"cityMini\" id=\"cityMini\" #cityMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.city\" required aria-hidden=\"true\"\n                (ngModelChange)=\"updateSelectCiudad($event)\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleCiudad of listCiudad' [ngValue]=\"littleCiudad._id\">\n                  {{littleCiudad.name}}\n                </option>\n              </select>\n              \n            </div>\n\n            <div class=\"form-group col-md-4 campoFormulario\">\n              <label for=\"zonaMini\" class=\"control-label\">Zona</label>\n              <select class=\"form-control\" name=\"zonaMini\" id=\"zonaMini\" #zonaMini=\"ngModel\"\n                [(ngModel)]=\"invitation.contact.address.zone\" required aria-hidden=\"true\">\n                <option [ngValue]=\"undefined\" selected>Elija una Opción</option>\n                <option *ngFor='let littleZona of listZona' [ngValue]=\"littleZona._id\">\n                  {{littleZona.name}}\n                </option>\n              </select>\n              \n            </div>\n            <div class=\"form-group col-md-8 campoFormulario\">\n              <label class=\"control-label\">\n                Calle\n              </label>\n              <input name=\"streetDirecction\" class=\"form-control\" id=\"streetDirecction\" type=\"text\" required\n                #streetDirecction=\"ngModel\" [(ngModel)]=\"invitation.contact.address.especificLocation\">\n            </div>\n            <div class=\"form-group col-md-4 campoFormulario\">\n              <label for=\"codePostal\" class=\"control-label\">Código Postal</label>\n              <input type=\"text\" placeholder=\"Code Postal\" class=\"form-control\" name=\"codePostal\" id=\"codePostal\"\n                #codePostal=\"ngModel\" [(ngModel)]=\"invitation.contact.codePostal\" minlength=\"4\" required>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"compania\">Empresa</label>\n            <select class=\"form-control\" id=\"companyName\" name=\"companyName\" #companyName=\"ngModel\" \n              [(ngModel)]=\"job.companyName\" required (ngModelChange)=\"updateSelectEquipo($event)\">\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option *ngFor='let item of this.ListCompany' [ngValue]=\"item._id\">\n                {{item.name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"tipo\">Rol</label>\n            <select class=\"form-control\" id=\"typeAccount\" name=\"typeAccount\" #typeAccount=\"ngModel\" \n              [(ngModel)]=\"job.typeAccount\" required>\n              <option [ngValue]=undefined selected>Elija una Opción</option>\n              <option *ngFor='let item of this.ListRol' [ngValue]=\"item._id\">\n                {{item.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-12\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input id=\"acuerdo\" name=\"acuerdo\" type=\"checkbox\" #acuerdo=\"ngModel\"\n                  class=\"form-control form-check-input\" [(ngModel)]=\"invitation.estado\" required>\n                <span class=\"form-check-sign\">Estoy de acuerdo con Términos de Servicio y Política de Privacidad</span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contextForm.invalid\">Registrar</button>\n      </form>\n    </div>\n    <div class=\"card-footer text-muted text-center\">\n      <span>Ya poseo una cuenta<br>\n        <a [routerLink]=\"['/sign/login']\" [routerLinkActive]=\"['linkActivo']\" rel=\"noopener noreferrer\">Iniciar\n          Sesión</a>\n      </span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class user {
}


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
            console.log('Usuario sin permisos');
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
        //console.log(this.url_base + subRuta);
        return this.http.get(this.url_base + subRuta, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataWithParams(ruta, params) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        console.log(this.url_base + subRuta + params);
        return this.http.get(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
    }
    get_dataWithParamsOne(ruta, params) {
        let subRuta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        //console.log(this.url_base + subRuta + params, this.generarAutorizacion('with'));
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
        console.log(this.url_base + subruta + "/");
        return this.http.post(this.url_base + subruta + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    editObject(ruta, xobject) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        let xid = xobject['_id'];
        console.log(this.url_base + subruta + "/" + xid + "/", xobject);
        return this.http.put(this.url_base + subruta + "/" + xid + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    delObject(ruta, id) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        console.log(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('with') });
        return this.http.delete(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('with') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res));
    }
    verifyUser(ruta) {
        let subruta = _globalVars__WEBPACK_IMPORTED_MODULE_3__["globalRoutes"][ruta];
        //console.log(this.url_base + subruta);
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
/*! exports provided: globalVars, globalConfigurations, userPermissions, globalImages, jobs, globalImagesSize, globalRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalVars", function() { return globalVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalConfigurations", function() { return globalConfigurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPermissions", function() { return userPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalImages", function() { return globalImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobs", function() { return jobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalImagesSize", function() { return globalImagesSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalRoutes", function() { return globalRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const globalVars = {
    //domain: 'http://104.197.114.137:8002',
    //filesDomain: 'http://104.197.114.137:8002',
    domain: 'http://127.0.0.1:8002',
    filesDomain: 'http://127.0.0.1:8002',
    //domain: '',
    //filesDomain: '',
    language: 'es',
    moneda: 'BOL',
    caducaEnDias: 7
};
const globalConfigurations = {
    pais: '5f20d21991a91e3e79106752',
    ciudad: '5f20d29391a91e3e79106756',
    company: '5f20d1de91a91e3e79106750',
    rol: '5f20d1f091a91e3e79106751',
    vehiculo: '5f9643504f5a0d13e04f6327'
};
const userPermissions = {
    adm: '5f2b0dab9f5ad6106c166233',
    dist: '5f2b0db79f5ad6106c166234',
    rep: '5f2b0dc29f5ad6106c166235',
    sup: '5f6a7892cd503e1d304b5c29'
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
    mailSender: 'api/v1/mailSender',
    userVerification: 'api/v1/userVerification',
    mailProduct: 'api/v1/mailProduct',
    user: 'api/v1/quser',
    login: 'api/v1/login',
    register: 'api/v1/register',
    recover: 'api/v1/recover'
};


/***/ }),

/***/ "./src/app/sign/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/sign/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ubicacion {\r\n    width: 18px!important;\r\n    height: 14px!important;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: -50px;\r\n    left: -10px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51YmljYWNpb24ge1xyXG4gICAgd2lkdGg6IDE4cHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4IWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/sign/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/sign/recover/recover.component.css":
/*!****************************************************!*\
  !*** ./src/app/sign/recover/recover.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ubicacion {\r\n    width: 18px!important;\r\n    height: 14px!important;\r\n    overflow: hidden;\r\n    position: relative;\r\n    top: -50px;\r\n    left: -10px;\r\n    float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9yZWNvdmVyL3JlY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWduL3JlY292ZXIvcmVjb3Zlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnViaWNhY2lvbiB7XHJcbiAgICB3aWR0aDogMThweCFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTUwcHg7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







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
    }
    onSignIn() {
        if (this.passwd1 === this.passwd2) {
            try {
                this.connexion.get_dataWithParamsNoAuth('recover', '?ci=' + this.user.ci + '&password=' + this.user.password + '&newpass=' + this.passwd2).subscribe((userJWT) => {
                    console.log('userJWT', userJWT);
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(userJWT)) {
                        localStorage.clear();
                        this._router.navigate(['/sign/login']);
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
};
RecoverComponent.ctorParameters = () => [
    { type: src_app_services_connexion_service__WEBPACK_IMPORTED_MODULE_3__["ConnexionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
RecoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/recover/recover.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recover.component.css */ "./src/app/sign/recover/recover.component.css")).default]
    })
], RecoverComponent);



/***/ }),

/***/ "./src/app/sign/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/sign/register/register.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

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
        //this.field = new field();
    }
    ngOnInit() {
        this.connexion.get_data('location').subscribe(reslo => {
            this.ListLOC = reslo;
            this.ListLOCMain = reslo.filter(LOC => LOC.typecon_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].pais);
            this.depasCI = this.ListLOC.filter(LOC => LOC.owner == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].ciudad);
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.connexion.get_data('typecontext').subscribe(reslo => {
            this.ListCompany = reslo.filter(LOC => LOC.context_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].company);
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.connexion.get_data('typecontext').subscribe(reslo => {
            console.log('typecontext', reslo);
            this.ListRol = reslo.filter(LOC => LOC.context_id == src_app_services_globalVars__WEBPACK_IMPORTED_MODULE_7__["globalConfigurations"].rol);
        }, error => {
            console.log('Hubo un problema al cargar datos. ' + error);
        });
        this.invitation.contact = this.contact;
        this.invitation.profile = this.profile;
        this.contact.address = this.address;
        this.contact.address.city = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        this.contact.address.state = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        this.contact.address.zone = new _models_schema__WEBPACK_IMPORTED_MODULE_5__["field"]();
        //this.invitation.contact = this.contact;
    }
    onRegister() {
        this.agregarDireccion();
        this.invitation.job = { ciMain: '', companyName: this.job.companyName, typeAccount: this.job.typeAccount };
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/sign/register/register.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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