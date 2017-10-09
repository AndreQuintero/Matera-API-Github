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
//import {ListaComponent} from './listaComponent'
var user_1 = require('../models/user');
var repositoryDetails_1 = require('../models/repositoryDetails');
var usuario_service_1 = require('../services/usuario-service');
var PesquisaComponent = (function () {
    function PesquisaComponent(usuarioService) {
        this.usuarioService = usuarioService;
        this.userExist = false;
        this.reposExist = false;
        this.listAsc = false;
        this.repDetailsExist = false;
        this.searchExist = true;
    }
    PesquisaComponent.prototype.newSearch = function () {
        this.userTxt = '';
        this.searchExist = true;
        this.userExist = false; //Volta ao estado inicial
        this.reposExist = false;
        this.repDetailsExist = false;
    };
    PesquisaComponent.prototype.ngOnInit = function () {
        this.reposDetails = new repositoryDetails_1.RepositoryDetails;
        this.user = new user_1.User;
    };
    PesquisaComponent.prototype.Search = function () {
        var _this = this;
        this.userExist = true;
        this.searchExist = false; //controla a view
        var obj = this.usuarioService.userList(this.userTxt).subscribe(function (user) { return _this.user = user; }, //faz o get dos dados do usuário
        function (//faz o get dos dados do usuário
            error) { return _this.msgErro = error; }, function () { return console.log(_this.user); });
        return obj;
    };
    PesquisaComponent.prototype.changeOrderList = function () {
        this.listAsc = !this.listAsc; //muda a ordem da lista
        console.log(this.listAsc);
        this.repositoryList();
    };
    PesquisaComponent.prototype.orderDesc = function () {
        this.repos.sort(function (a, b) {
            return a.stargazers_count + b.stargazers_count; //ordem decrescente
        });
    };
    PesquisaComponent.prototype.orderAsc = function () {
        this.repos.sort(function (a, b) {
            return a.stargazers_count - b.stargazers_count; //ordem crescente
        });
    };
    PesquisaComponent.prototype.repositoryList = function () {
        var _this = this;
        this.reposExist = true;
        var obj = this.usuarioService.repositoryList(this.user.login).subscribe(function (repos) { return _this.repos = repos; }, function (error) { return _this.msgErro = error; }, function () {
            if (_this.listAsc == false) {
                _this.orderDesc();
                console.log(_this.repos[0].full_name);
            }
            else {
                _this.orderAsc();
                console.log(_this.repos[_this.repos.length - 1].full_name);
            }
        });
        return obj;
    };
    PesquisaComponent.prototype.DetailsOfRepository = function () {
        var _this = this;
        this.repDetailsExist = !this.repDetailsExist;
        //faz o get dos detalhes do repositório com maior número de estrelas baseado na listagem
        if (this.listAsc == false) {
            var obj = this.usuarioService.repositoryDetails(this.repos[0].full_name).subscribe(function (reposDetails) { return _this.reposDetails = reposDetails; }, function (error) { return _this.msgErro = error; }, function () { return console.log(_this.reposDetails); });
            return obj;
        }
        else {
            var obj = this.usuarioService.repositoryDetails(this.repos[this.repos.length - 1].full_name).subscribe(function (reposDetails) { return _this.reposDetails = reposDetails; }, function (error) { return _this.msgErro = error; }, function () { return console.log(_this.reposDetails); });
            return obj;
        }
    };
    PesquisaComponent = __decorate([
        core_1.Component({
            selector: 'pesquisa',
            templateUrl: 'app/views/pesquisa-lista.html',
            providers: [usuario_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], PesquisaComponent);
    return PesquisaComponent;
}());
exports.PesquisaComponent = PesquisaComponent;
//# sourceMappingURL=pesquisaComponent.js.map