import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { NoticiaService } from "./../services/noticia.service"
import { Subscription } from "rxjs"
import { Noticia } from "./../noticias/noticia.model"

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit, OnDestroy {

  public noticia: string

  private httpReq: Subscription

  constructor(private ns: NoticiaService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const titulo: string = this.ar.snapshot.params['title']

    this.getNoticiaByTitle(titulo)
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getNoticiaByTitle(title: string) {
    this.httpReq = this.ns.getNoticiaByTitle(title).subscribe((noticia) => {
      this.noticia = noticia['data']
    })
  }

}
