import { Injectable } from '@angular/core'
import { Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()

export class HttpUtilServices{

    private userDetailURL: string = 'https://api.github.com/'
    //private userRepositoryURL: string = '/repos'
    //private repositoryDetailsURL: string ='​https://api.github.com/repos'

    url(path: string) {
		return this.userDetailURL + path
    }
    
    headers() {
        let headersParams = { 'Content-Type': 'application/json' }
        if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token']
		}
		let headers = new Headers(headersParams)
    	let options = new RequestOptions({ headers: headers })
    	return options
    }
    
    extrairDados(response: Response) {
    	let data = response.json()         //converte os dados para json
    	return data || {}
  	}
 
  	processarErros(erro: any) {
	    return Observable.throw('Dados não encontrados')
	}
}