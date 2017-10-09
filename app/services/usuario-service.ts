import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { HttpUtilServices } from './http-util-services'
import { User } from '../models/user' 
import { Repository } from '../models/repository' 
import {RepositoryDetails} from '../models/repositoryDetails'

@Injectable()

export class UsuarioService{

    private path = ''
    

    constructor(private http: Http,
                private httpUtil: HttpUtilServices ){}

    userList(user:string): Observable <User> {               //faz a busca pelo usuário
       
        this.path = 'users'

        return this.http.get(this.httpUtil.url(this.path + '/' + user), 
        this.httpUtil.headers())
        .map(this.httpUtil.extrairDados)
        .catch(this.httpUtil.processarErros)
    }

    repositoryList(user:string): Observable <Repository[]> { //lista o repositório do usuário

        this.path='users'

        return this.http.get(this.httpUtil.url(this.path + '/' + user + '/repos'), 
        this.httpUtil.headers())
        .map(this.httpUtil.extrairDados)
        .catch(this.httpUtil.processarErros)
    }

    repositoryDetails(reposDetails : any): Observable <RepositoryDetails> {

        this.path='repos'

        return this.http.get(this.httpUtil.url(this.path + '/' + reposDetails),
        this.httpUtil.headers())
        .map(this.httpUtil.extrairDados)
        .catch(this.httpUtil.processarErros)
    }
}