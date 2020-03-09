import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { AsiloWebApi } from "./../../app.api"
import {FAQ} from "./../faq/faq.model"

@Injectable({
  providedIn: 'root'
})
export class FAQService {

  constructor(private http: HttpClient) { }

  getFAQ(): Observable<FAQ[]>{
    return this.http.get<FAQ[]>(`${AsiloWebApi}/faq`)
  }

}
