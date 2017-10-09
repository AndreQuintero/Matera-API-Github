import { Component } from '@angular/core'
import {PesquisaComponent} from './components/pesquisaComponent'
import { ROUTER_DIRECTIVES } from '@angular/router'
import './rxjs-operators'


@Component({
	selector: 'meu-app',
	directives: [PesquisaComponent,ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">API GitHub</a>
		</div>
		<div>
		  <ul class="nav navbar-nav">
				<li><a href="/pesquisa">Pesquisar Usuário</a></li>
		  </ul>
		</div>
	  </div>
	</nav>
		<br /><br /><br />
	
		
		<body class="container">
		<div class="jumbotron">
				<h1 class="text-center">Teste MateraSystems</h1>
				<hr />
			
			
			

		<pesquisa></pesquisa>
		</div>
	`
})
export class AppComponent {
	
}