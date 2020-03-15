import { Component, Input } from '@angular/core';
import { Transparencia } from "../../../shared/models/transparencia.model"
import { TransparenciaService } from "../../../shared/services/transparencia.service"
import { Subscription } from "rxjs"
import { ModalLoadingComponent } from "./../../../web-components/common/modals/modal-loading/modal-loading.component"
import { ModalErrorComponent } from "./../../../web-components/common/modals/modal-error/modal-error.component"
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
      withFooter: false
    }
  }

  configErrorModal: ModalOptions = {
    backdrop: 'static',
    keyboard: false,
    initialState: {
      message: "Ocorreu um erro ao fazer o download do arquivo",
      withFooter: true
    }
  }

  constructor(
    private _service: TransparenciaService,
    private _modal: BsModalService
  ) { }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  getDownloadDocument() {
    this.modalRef = this._modal.show(ModalLoadingComponent, this.configLoadingModal)
    this.httpReq = this._service.downloadDocument(this.document['file']['filename']).subscribe(file => {
      this.modalRef.hide()
      this.createBlobFile(file)
    }, () => {
      this.modalRef.hide()
      this.modalRef = this._modal.show(ModalErrorComponent, this.configErrorModal)
      this.modalRef.content.action.subscribe((event) => {
        if (event) {
          this.modalRef.hide()
        }
      })
    })
  }

  createBlobFile(file) {
    var newBlob = new Blob([file], { type: "application/pdf" });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }

    const data = window.URL.createObjectURL(newBlob);

    var link = document.createElement('a');
    link.href = data;
    link.download = `${this.document['file']['originalname']}`
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    setTimeout(function () {
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }

}
