import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "./../services/noticias.service"
import { Noticia } from "./noticia.model"
import { Subscription } from "rxjs"

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //Dataset
  noticias: Noticia[]

  //Control Variables
  private httpReq: Subscription
  isLoading: boolean
  messageApi: string
  statusResponse: number

  constructor(private ns: NoticiasService) { }

  ngOnInit() {
    this.getNoticias()
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getNoticias() {
    this.isLoading = true
    this.httpReq = this.ns.getNoticias().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.noticias = response.body['data']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.error['message']
      this.isLoading = false
    })
  }
}
