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
var pesquisaComponent_1 = require('./components/pesquisaComponent');
var router_1 = require('@angular/router');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'meu-app',
            directives: [pesquisaComponent_1.PesquisaComponent, router_1.ROUTER_DIRECTIVES],
            template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t  <div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t  <a class=\"navbar-brand\" href=\"#\">API GitHub</a>\n\t\t</div>\n\t\t<div>\n\t\t  <ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a href=\"/pesquisa\">Pesquisar Usu\u00E1rio</a></li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n\t</nav>\n\t\t<br /><br /><br />\n\t\n\t\t\n\t\t<body class=\"container\">\n\t\t<div class=\"jumbotron\">\n\t\t\t\t<h1 class=\"text-center\">Teste MateraSystems</h1>\n\t\t\t\t<hr />\n\t\t\t\n\t\t\t\n\t\t\t\n\n\t\t<pesquisa></pesquisa>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map