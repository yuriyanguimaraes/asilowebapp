import { Injectable } from "@angular/core"
import { HttpClient, HttpResponse } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "./../../app.api"
import { Noticia } from "./../noticias/noticia.model"

@Injectable()
export class NoticiasService {

    constructor(private http: HttpClient) { }

    getNoticias(): Observable<HttpResponse<Noticia[]>> {
        return this.http.get<Noticia[]>(`${AsiloWebApi}/noticia`, { observe: 'response' })
    }

}