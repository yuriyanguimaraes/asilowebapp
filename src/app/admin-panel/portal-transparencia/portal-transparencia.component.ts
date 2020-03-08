import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { TransparenciaAdminService } from "./../services/transparencia.service"
import { Transparencia } from "./transparencia.model"
import { Subscription } from "rxjs"
import { trigger, transition, style, animate } from "@angular/animations"

@Component({
  selector: 'app-portal-transparencia',
  templateUrl: './portal-transparencia.component.html',
  styleUrls: ['./portal-transparencia.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('1s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class PortalTransparenciaComponent implements OnInit {

  //Request
  private httpReq: Subscription

  //Dataset
  documents: Transparencia[]

  //Control Variables
  p: number
  total: number
  limit: number
  messageApi: string
  statusResponse: number
  isLoading: boolean
  filterCategory: boolean = false

  //Selected Items
  dropdownFilterSelectedItem: any

  //Items Set
  dropdownFilterMenuItems: any[] = [
    {
      option: 'Documentos Oficiais',
      param: 'documentos oficiais',
    },
    {
      option: 'Prestação de Contas',
      param: 'prestação de contas',
    },
    {
      option: 'Relatório de Atividades',
      param: 'relatório de atividades',
    },
  ]

  constructor(
    private r: Router,
    private _service: TransparenciaAdminService
  ) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this._service.params = this._service.params.set('columnSort', 'date')
    this._service.params = this._service.params.set('valueSort', 'descending')
    this._service.params = this._service.params.set('page', '1')

    this.getDocumentsWithParams()
  }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  getDocumentsWithParams() {
    this.isLoading = true
    this.httpReq = this._service.getDocumentsWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.documents = response.body['data']
      this.messageApi = response.body['message']
      this.p = response.body['page']
      this.total = response.body['count']
      this.limit = response.body['limit']
      this.isLoading = false
    }, err => {
      this.messageApi = err.error['message']
      this.isLoading = false
    })
  }

  getPage(page: number) {
    this.documents = null
    this._service.params = this._service.params.set('page', page.toString())
    this.getDocumentsWithParams()
  }

  onSelectFilterDropdownMenu(item: any) {
    this.dropdownFilterSelectedItem = item
    this.documents = null
    this.filterCategory = true
    this._service.params = this._service.params.set('category', item['param'])
    this.getDocumentsWithParams()
  }

  clearConditions() {
    this.documents = null

    this.dropdownFilterSelectedItem = null
    this.filterCategory = false
    this._service.params = this._service.params.delete('category')

    this.getDocumentsWithParams()
  }

}
