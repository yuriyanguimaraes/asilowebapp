import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Transparencia } from "./../portal-transparencia/transparencia.model"

@Injectable()
export class TransparenciaService {

    constructor(private http: HttpClient) { }

    getDocumentsTransparencia(): Observable<Transparencia[]> {
        return this.http.get<Transparencia[]>(`${AsiloWebApi}/transparencia`)
    }

    getDocumentsTransparenciaByCategory(category: string): Observable<Transparencia[]>{
        return this.http.get<Transparencia[]>(`${AsiloWebApi}/transparencia/${category}`)
    }
}