import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal"
import { ModalDialogComponent } from "./../../../web-components/common/modal-dialog/modal-dialog.component"
import { TransparenciaService } from "./../../../shared/services/transparencia.service"
import { Router } from "@angular/router"
import { requiredFileType } from "./../../../shared/functions/upload-file-validator.function"
import { uploadProgress } from "./../../../shared/functions/upload-progress.function"
import { toResponseBody } from "./../../../shared/functions/to-response-body.function"
import { toFormData } from "./../../../shared/functions/to-form-data.function"

@Component({
  selector: 'app-novo-transparencia',
  templateUrl: './novo-transparencia.component.html',
  styleUrls: ['./novo-transparencia.component.css']
})
export class NovoTransparenciaComponent implements OnInit {

  modalRef: BsModalRef
  _formTransparencia: FormGroup
  progress = 0
  success = false

  selectOptionCategory: any[] = [
    { value: 'Documentos Oficiais' },
    { value: 'Prestação de Contas' },
    { value: 'Relatório de Atividades' },
  ]

  constructor(private _builder: FormBuilder, private _modal: BsModalService, private _service: TransparenciaService, private _router: Router) { }

  ngOnInit() {
    this._formTransparencia = this._builder.group({
      titulo: this._builder.control(null, [Validators.required]),
      descricao: this._builder.control(null, [Validators.required]),
      categoria: this._builder.control("Selecione", [Validators.required]),
      arquivo: this._builder.control(null, [Validators.required, requiredFileType('pdf')])
    })
  }

  canCancel() {
    const initialState = {
      title: "Confirmação",
      message: "Deseja cancelar a inserção do documento atual?"
    }

    this.modalRef = this._modal.show(ModalDialogComponent, { initialState })
    this.modalRef.content.action.subscribe((answer) => {
      if (answer) {
        this._formTransparencia.reset()
      }
    })
  }

  addNewDocuments() {
    this.success = false
    this._service.postDocuments(toFormData(this._formTransparencia.value)).pipe(
      uploadProgress(progress => (this.progress = progress)),
      toResponseBody()
    ).subscribe(res => {
      this.progress = 0
      this.success = true
      this._formTransparencia.reset()
      this._router.navigate(['/admin/transparencia'])
    })
  }

}
