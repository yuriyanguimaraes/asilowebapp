import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../../web-app/noticias/noticia.model';
import { AsiloWebApi } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

    params = new HttpParams()
    

    getNoticiasWithParams(): Observable<HttpResponse<Noticia[]>> {
      return this.http.get<Noticia[]>(`${AsiloWebApi}/noticia`, { params: this.params, observe: 'response'})
    }
}
