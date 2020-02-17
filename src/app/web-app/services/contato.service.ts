import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "./../../app.api"
import { Contato } from "../contato/contato.model"

@Injectable()
export class ContatoService {
    
    constructor(private http: HttpClient){}

    getContato(): Observable<Contato>{
        return this.http.get<Contato>(`${AsiloWebApi}/contato`)
    }

    getTeste(){
        return "service-funcionando"
    }

}