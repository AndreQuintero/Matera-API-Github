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
var Observable_1 = require('rxjs/Observable');
var HttpUtilServices = (function () {
    function HttpUtilServices() {
        this.userDetailURL = 'https://api.github.com/';
    }
    //private userRepositoryURL: string = '/repos'
    //private repositoryDetailsURL: string ='​https://api.github.com/repos'
    HttpUtilServices.prototype.url = function (path) {
        return this.userDetailURL + path;
    };
    HttpUtilServices.prototype.headers = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['token']) {
            headersParams['Authorization'] = localStorage['token'];
        }
        var headers = new http_1.Headers(headersParams);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    HttpUtilServices.prototype.extrairDados = function (response) {
        var data = response.json(); //converte os dados para json
        return data || {};
    };
    HttpUtilServices.prototype.processarErros = function (erro) {
        return Observable_1.Observable.throw('Dados não encontrados');
    };
    HttpUtilServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpUtilServices);
    return HttpUtilServices;
}());
exports.HttpUtilServices = HttpUtilServices;
//# sourceMappingURL=http-util-services.js.map