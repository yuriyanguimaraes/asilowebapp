import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobre } from './sobre/sobre.model';
import { AsiloWebApi } from '../app.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  constructor(private http: HttpClient) { }

  getSobre(): Observable<Sobre> {
    return this.http.get<Sobre>(`${AsiloWebApi}/quemSomos`)
  }
}
