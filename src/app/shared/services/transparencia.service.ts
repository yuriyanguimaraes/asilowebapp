import { Injectable } from "@angular/core"
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import { Transparencia } from "../models/transparencia.model"

@Injectable()
export class TransparenciaService {

    constructor(private http: HttpClient) { }

    params = new HttpParams()

    getDocumentsWithParams(): Observable<HttpResponse<Transparencia[]>> {
        return this.http.get<Transparencia[]>(`${AsiloWebApi}/transparencia/`, { params: this.params, observe: 'response' })
    }

    postDocuments(formData) {
        return this.http.post<any>(`${AsiloWebApi}/transparencia/`, formData, { reportProgress: true, observe: 'events' })
    }

    downloadDocument(filename: string): Observable<Blob> {
        return this.http.get(`${AsiloWebApi}/transparencia/${filename}`, { responseType: 'blob' })
    }
}