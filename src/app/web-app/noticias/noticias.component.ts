import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "./../services/noticias.service"
import { Noticia } from "./noticia.model"

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //Dataset
  noticias: Noticia[]

  //Control Variables
  isLoading: boolean

  constructor(private ns: NoticiasService) { }

  ngOnInit() {
    this.getNoticias()
  }

  getNoticias() {
    this.isLoading = true
    this.ns.getNoticias().subscribe(noticias => {
      this.noticias = noticias['data']
      this.isLoading = false
    })
  }
}
