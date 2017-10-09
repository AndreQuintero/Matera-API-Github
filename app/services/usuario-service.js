"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_util_services_1 = require('./http-util-services');
var UsuarioService = (function () {
    function UsuarioService(http, httpUtil) {
        this.http = http;
        this.httpUtil = httpUtil;
        this.path = '';
    }
    UsuarioService.prototype.userList = function (user) {
        this.path = 'users';
        return this.http.get(this.httpUtil.url(this.path + '/' + user), this.httpUtil.headers())
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
    };
    UsuarioService.prototype.repositoryList = function (user) {
        this.path = 'users';
        return this.http.get(this.httpUtil.url(this.path + '/' + user + '/repos'), this.httpUtil.headers())
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
    };
    UsuarioService.prototype.repositoryDetails = function (reposDetails) {
        this.path = 'repos';
        return this.http.get(this.httpUtil.url(this.path + '/' + reposDetails), this.httpUtil.headers())
            .map(this.httpUtil.extrairDados)
            .catch(this.httpUtil.processarErros);
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_util_services_1.HttpUtilServices])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario-service.js.map