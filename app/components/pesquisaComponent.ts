import {Component} from '@angular/core'
//import {ListaComponent} from './listaComponent'
import {User} from '../models/user'
import {Repository} from '../models/repository'
import {RepositoryDetails} from '../models/repositoryDetails'
import {UsuarioService} from '../services/usuario-service'
import {AppComponent} from '../app.component'


@Component({
    selector: 'pesquisa',
    templateUrl: 'app/views/pesquisa-lista.html',
    providers: [UsuarioService]
})

export class PesquisaComponent{

    private userTxt:string  //variável do input
    private msgErro: string
    
    //Models
    private user : User
    private repos : Repository[]
    private reposDetails: RepositoryDetails

    //Variaveis de controle da view
    public searchExist: Boolean
    private userExist: Boolean
    private reposExist : Boolean
    private listAsc: Boolean
    private repDetailsExist : Boolean

    
    constructor(private usuarioService : UsuarioService ){
      
        this.userExist = false
        this.reposExist = false
        this.listAsc = false
        this.repDetailsExist = false
        this.searchExist = true
        
        
        
    }
    
    newSearch(){

        this.userTxt = '' 
        this.searchExist = true
        this.userExist = false              //Volta ao estado inicial
        this.reposExist = false
        this.repDetailsExist = false
    }

    ngOnInit(){
       
        this.reposDetails = new RepositoryDetails
        this.user = new User
       
       }

       

    Search(){

        this.userExist = true
        this.searchExist = false    //controla a view

        let obj =  this.usuarioService.userList(this.userTxt).subscribe(
           user => this.user = user,        //faz o get dos dados do usuário
           error  => this.msgErro = error,
           ()=>console.log(this.user) 
        )
            return obj
       
    }


    changeOrderList(){
        this.listAsc = !this.listAsc    //muda a ordem da lista
        console.log(this.listAsc)
        this.repositoryList()
    }

    orderDesc(){
            
            this.repos.sort(function(a,b){
            return a.stargazers_count + b.stargazers_count  //ordem decrescente
     })
    }

    orderAsc(){
        this.repos.sort(function(a,b){
                return a.stargazers_count - b.stargazers_count  //ordem crescente
        })
    }

    repositoryList(){
        this.reposExist = true 
        

        let obj = this.usuarioService.repositoryList(this.user.login).subscribe(
           repos => this.repos = repos,
           error => this.msgErro = error,
           ()=>{
                    if(this.listAsc == false ){  //faz o get dos repositórios
                    this.orderDesc()
                    console.log(this.repos[0].full_name)
                }else{
                    this.orderAsc()
                    console.log(this.repos[this.repos.length - 1].full_name)
                }
              })

              return obj      
    }

    DetailsOfRepository(){

        this.repDetailsExist = !this.repDetailsExist


        //faz o get dos detalhes do repositório com maior número de estrelas baseado na listagem

            if(this.listAsc == false){
            let obj =  this.usuarioService.repositoryDetails(this.repos[0].full_name).subscribe(
            reposDetails => this.reposDetails = reposDetails,
            error  => this.msgErro = error,
            ()=>console.log(this.reposDetails)
         )
             return obj 
        }else{
            let obj =  this.usuarioService.repositoryDetails(this.repos[this.repos.length - 1].full_name).subscribe(
                reposDetails => this.reposDetails = reposDetails,
                error  => this.msgErro = error,
                ()=>console.log(this.reposDetails)
             )
                 return obj 
        }


    }

   

}