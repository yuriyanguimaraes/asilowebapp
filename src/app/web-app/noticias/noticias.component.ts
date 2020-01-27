import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "./../services/noticias.service"
import { Noticia } from "./noticia.model"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[]

  constructor(private ns: NoticiasService) { }

  ngOnInit() {
    this.getNoticias()
  }

  getNoticias() {
    this.ns.getNoticias().subscribe(noticias => {
      for (let i = 0; i < noticias['data'].length; i++) {
        noticias['data'][i]['descricao'] = noticias['data'][i]['descricao'].substring(0, 74)
      }
      this.noticias = noticias['data']
    })
  }
}
