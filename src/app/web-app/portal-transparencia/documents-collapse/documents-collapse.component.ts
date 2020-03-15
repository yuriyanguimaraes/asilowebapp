import { Component, Input } from '@angular/core';
import { Transparencia } from "../../../shared/models/transparencia.model"
import { TransparenciaService } from "../../../shared/services/transparencia.service"
import { Subscription } from "rxjs"
import { ModalLoadingComponent } from "./../../../web-components/common/modals/modal-loading/modal-loading.component"
import { ModalDialogComponent } from "./../../../web-components/common/modals/modal-dialog/modal-dialog.component"
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal"

@Component({
  selector: 'app-documents-collapse',
  templateUrl: './documents-collapse.component.html',
  styleUrls: ['./documents-collapse.component.css']
})
export class DocumentsCollapseComponent {

  @Input() document: Transparencia

  private httpReq: Subscription

  modalRef: BsModalRef

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
    private _modal: BsModalService
  ) { }

  getDownloadDocument(filename) {
    this.httpReq = this._service.downloadDocument(filename).subscribe(response => {
      console.log('ok')
    }, err => {
      console.log('error')
    })
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
