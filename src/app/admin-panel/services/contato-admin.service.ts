import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "./../../app.api"
import { Contato } from "../../web-app/contato/contato.model"

@Injectable()
export class ContatoAdminService {

    constructor(private http: HttpClient){}

    getTeste(){
        return console.log("kennedy")
    }

}