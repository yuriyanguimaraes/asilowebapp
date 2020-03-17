import { Component, OnInit, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { NoticiasService } from './../../shared/services/noticias.service';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/shared/models/noticia.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnDestroy {

  private httpReq: Subscription

  noticias: Noticia[]

  isLoading: boolean = false
  messageApi: string
  statusResponse: number
  p: number
  total: number
  limit: number
  sortedCollection: any[];
  collection: Noticia[]
  sortSelectedItem: any

  headTableItems: any[] = [
    {
      option: 'Título',
      param: 'titulo'
    },
    {
      option: 'Publicação',
      param: 'date'
    },
    {
      option: 'Publicado ?',
      param: 'status'
    }
  ]

  constructor(
    private _service: NoticiasService,
    private r: Router,
  ) {}

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false
    
    this.sortSelectedItem = this.headTableItems[1]

    this._service.params = this._service.params.set('columnSort', 'titulo')
    this._service.params = this._service.params.set('valueSort', 'ascending')
    this._service.params = this._service.params.set('page', '1')
    this._service.params = this._service.params.set('limit', '10')

    this.getNoticiasWithParams()
  }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  getNoticiasWithParams() {
    this.isLoading = true
    this.httpReq = this._service.getNoticiasWithParams().subscribe(response => {
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
    this._service.params = this._service.params.set('page', page.toString())
    this.getNoticiasWithParams()
  }

  onClickSortTable(item: any) {
    this.noticias = null
    this.sortSelectedItem = item
    this._service.params = this._service.params.set('columnSort', item['param'])
    if (this._service.params.get('valueSort') == 'descending') {
      this._service.params = this._service.params.set('valueSort', 'ascending')
    } else {
      this._service.params = this._service.params.set('valueSort', 'descending')
    }
    this.getNoticiasWithParams()
  }
}
