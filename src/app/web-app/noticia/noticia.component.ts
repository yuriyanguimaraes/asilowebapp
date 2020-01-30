import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { NoticiaService } from "./../services/noticia.service"

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  noticia: string

  constructor(private ns: NoticiaService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const titulo: string = this.ar.snapshot.params['title']

    this.getNoticiaByTitle(titulo)
  }

  getNoticiaByTitle(title: string) {
    this.ns.getNoticiaByTitle(title).subscribe((noticia) => {
      this.noticia = noticia['data']
    })
  }

}
