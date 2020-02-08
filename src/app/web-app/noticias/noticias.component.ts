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
  isLoading: boolean = false
  messageApi: string
  statusResponse: number
  p: number
  total: number
  limit: number
  filterDate: boolean = false
  order: boolean = false

  constructor(private ns: NoticiasService) { }

  ngOnInit() {
    this.ns.params = this.ns.params.set('order', 'descending')
    this.ns.params = this.ns.params.set('page', '1')

    this.getNoticiasWithParams()
  }

  ngOnDestroy() {
    this.httpReq.unsubscribe()
  }

  getNoticiasWithParams() {
    this.isLoading = true
    this.httpReq = this.ns.getNoticiasWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.noticias = response.body['data']
      this.p = response.body['page']
      this.total = response.body['count']
      this.limit = response.body['limit']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.error['message']
      this.isLoading = false
    })
  }

  getPage(page: number) {
    this.noticias = null
    this.ns.params = this.ns.params.set('page', page.toString())
    this.getNoticiasWithParams()
  }

}
