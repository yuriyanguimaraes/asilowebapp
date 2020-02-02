import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Transparencia } from "./../portal-transparencia/transparencia.model"

@Injectable()
export class TransparenciaService {

    constructor(private http: HttpClient) { }
}