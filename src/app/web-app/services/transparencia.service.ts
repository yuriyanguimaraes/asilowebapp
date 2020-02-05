import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Transparencia } from "./../portal-transparencia/transparencia.model"

@Injectable()
export class TransparenciaService {

    constructor(private http: HttpClient) { }

    params = new HttpParams()

    getDocumentsWithParams(): Observable<Transparencia[]> {

        this.params = this.params.append("order", "ascending")
        this.params = this.params.append("page", "1")

        return this.http.get<Transparencia[]>(`${AsiloWebApi}/transparencia`, { params: this.params })
    }
}