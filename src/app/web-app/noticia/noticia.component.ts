import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { NoticiaService } from "./../services/noticia.service"
import { Noticia } from "./../noticias/noticia.model"

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia: string

  constructor(private ns: NoticiaService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.ar.snapshot.params['_id']

    this.getNoticiaById(id)
  }

  getNoticiaById(id: string) {
    this.ns.getNoticiaById(id).subscribe((noticia) => {
      this.noticia = noticia['data']
    })
  }

}
