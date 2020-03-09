import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "../../app.api"
import {FAQ_Admin} from "../faq-admnin/faq.model"


@Injectable({
  providedIn: 'root'
})
export class FAQ_AdminService {

  constructor(private http: HttpClient) { }

  params = new HttpParams()

  getFAQWithParams(): Observable<HttpResponse<FAQ_Admin[]>>{
    return this.http.get<FAQ_Admin[]>(`${AsiloWebApi}/faq`, { params: this.params, observe: 'response' })
  }

//   create(): Observable<FAQ_Admin[]>{
//     return this.http.post<FAQ_Admin[]>(`${AsiloWebApi}/faq`,)
//   }

}