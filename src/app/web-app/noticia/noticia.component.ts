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

  //Dataset
  noticia: Noticia

  //Control Variables
  private httpReq: Subscription
  isLoading: boolean
  messageApi: string
  statusResponse: number

  constructor(private ns: NoticiaService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const titulo: string = this.ar.snapshot.params['title']

    this.getNoticiaByTitle(titulo)
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getNoticiaByTitle(title: string) {
    this.isLoading = true
    this.httpReq = this.ns.getNoticiaByTitle(title).subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.noticia = response.body['data']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.body['message']
      this.isLoading = false
    })
  }

}
