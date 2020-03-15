import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Transparencia } from "../../shared/models/transparencia.model"
import { TransparenciaService } from "../../shared/services/transparencia.service"
import { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal"
import { ModalLoadingComponent } from "./../../web-components/common/modals/modal-loading/modal-loading.component"
import { ModalDialogComponent } from "./../../web-components/common/modals/modal-dialog/modal-dialog.component"

@Component({
  selector: 'app-portal-transparencia',
  templateUrl: './portal-transparencia.component.html',
  styleUrls: ['./portal-transparencia.component.css']
})
export class PortalTransparenciaComponent implements OnInit {

  @ViewChild('closeModal') private closeModal: ElementRef

  private httpReq: Subscription

  //Dataset
  documents: Transparencia[]

  //Forms Set
  dateBetweenFilterForm: FormGroup

  //Control Variables
  filterDate: boolean = false
  filterCategory: boolean = false
  filterOrder: boolean = false
  p: number
  total: number
  limit: number
  messageApi: string
  statusResponse: number
  isLoading: boolean
  modalRef: BsModalRef

  //Selected Items
  dropdownOrderSelectedItem: any
  categorySelectedItem: any
  categorySelectedTitle: string

  //Menu Items Set
  dropdownOrderMenuItems: any[] = [
    { option: 'Data - mais novo primeiro', param: 'descending' },
    { option: 'Data - mais antigo primeiro', param: 'ascending' }
  ]

  categoryMenuItems: any[] = [
    {
      option: 'Documentos Oficiais',
      param: 'documentos oficiais',
      description: 'Nesta seção, você encontrará os documentos oficiais relacionados a entidade, como ATAS de Diretoria e Estatutos.'
    },
    {
      option: 'Prestação de Contas',
      param: 'prestação de contas',
      description: 'Nesta seção, você encontrará os documentos de prestação de contas, que comprovam que o dinheiro recebido pela entidade está sendo utilizado em prol de seus moradores.'
    },
    {
      option: 'Relatório de Atividades',
      param: 'relatório de atividades',
      description: 'Nesta seção, você encontrará os relatórios de ativiades, que mostram as atividades que realizamos com os moradores da entidade.'
    },
  ]

  //Config Modals
  configLoadingModal: ModalOptions = {
    backdrop: 'static',
    keyboard: false,
    initialState: {
      message: "Fazendo download do documento...",
      withFooter: true
    }
  }

  configDialogModal: ModalOptions = {
    backdrop: 'static',
    keyboard: false,
    initialState: {
      message: "Deseja cancelar o download do documento?",
    }
  }

  constructor(
    private _service: TransparenciaService,
    private _router: Router,
    private _render: Renderer,
    private _formBuilder: FormBuilder,
    private _modal: BsModalService
  ) { }

  ngOnInit() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false

    this._service.params = this._service.params.set('valueSort', 'descending')
    this._service.params = this._service.params.set('page', '1')

    //Init Form
    this.dateBetweenFilterForm = this._formBuilder.group({
      dateStart: this._formBuilder.control(null, [Validators.required]),
      dateFinish: this._formBuilder.control(null)
    })
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

  setActiveMenuItem(event: any) {
    let oldClasses = event.target.getAttribute('class')

    this._render.setElementAttribute(event.target, "class", `${oldClasses} active`)
  }

  getPage(page: number) {
    this.documents = null
    this._service.params = this._service.params.set('page', page.toString())
    this.getDocumentsWithParams()
  }

  onClickCleanInputFieldsDateSearch() {
    this.dateBetweenFilterForm.reset()
  }

  onSelectOrderDropdownMenu(item: any) {
    this.dropdownOrderSelectedItem = item
    this.documents = null
    this.filterOrder = true
    this._service.params = this._service.params.set('order', item['param'])
    this.getDocumentsWithParams()
  }

  onSelectCategoryMenu(item: any) {
    this.categorySelectedItem = item
    this.categorySelectedTitle = item['option']
    this.documents = null
    this.filterCategory = true
    this.filterOrder = false
    this.dropdownOrderSelectedItem = null
    this._service.params = this._service.params.set('order', 'descending')
    this._service.params = this._service.params.set('category', item['param'])
    this.getDocumentsWithParams()
  }

  navigateToDocs(item: any) {
    this.categorySelectedItem = item
    this.categorySelectedTitle = item['option']
    this.documents = null
    this.filterCategory = true
    this._service.params = this._service.params.set('category', item['param'])
    this.getDocumentsWithParams()
  }

  onClickFilterDate() {

    let dateStart = this.dateBetweenFilterForm.value.dateStart
    let dateFinish = this.dateBetweenFilterForm.value.dateFinish

    this.documents = null
    this.filterDate = true
    this._service.params = this._service.params.set('dateStart', dateStart)

    if (dateFinish) {
      this._service.params = this._service.params.set('dateFinish', dateFinish)
    }

    this.closeModal.nativeElement.click()
    this.dateBetweenFilterForm.reset()

    this.getDocumentsWithParams()
  }

  clearConditions() {
    this.documents = null

    this._service.params = this._service.params.set('page', '1')

    this.filterDate = false
    this._service.params = this._service.params.delete('dateStart')
    this._service.params = this._service.params.delete('dateFinish')

    this.filterOrder = false
    this.dropdownOrderSelectedItem = null
    this._service.params = this._service.params.set('order', 'descending')

    this.getDocumentsWithParams()
  }

  downloadDocument() {
    this.modalRef = this._modal.show(ModalLoadingComponent, this.configLoadingModal)
    this.modalRef.content.action.subscribe((canCancel: boolean) => {
      if (canCancel) {
        //pausa a requisição enquanto aguarda a resposta
        this.modalRef = this._modal.show(ModalDialogComponent, this.configDialogModal)
        this.modalRef.content.action.subscribe((answer: boolean) => {
          if (answer) {
            //caso sim, cancela a requisição
            console.log('cancelar')
          } else {
            //caso não, despausa a requisição e volta o modal de carregamento
            console.log('nao cancelar')
            this.downloadDocument()
          }
        })
      }
    })
  }

}
