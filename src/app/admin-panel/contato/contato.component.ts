import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ContatoService } from './../../web-app/services/contato.service';
import { Contato } from './../../web-app/contato/contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoAdminComponent implements OnInit {

  _id: string
  rua: string
  bairro: string
  numero: number
  cep: string
  complemento: string
  cidade: string
  estado: string
  telefone: string
  email: string

  propriedade: boolean = true

  contato: Contato
  contatoForm: FormGroup

  constructor(private contatoService: ContatoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      '_id': [null, Validators.required],
      'rua': [null, [Validators.required, Validators.maxLength(100)]],
      'bairro': [null, [Validators.required, Validators.maxLength(100)]],
      'numero': [null, [Validators.required, Validators.maxLength(20)]],
      'cep': [null, [Validators.required, Validators.maxLength(20)]],
      'complemento': [null, Validators.maxLength(100)],
      'cidade': [null, [Validators.required, Validators.maxLength(100)]],
      'estado': [null, [Validators.required, Validators.maxLength(2)]],
      'telefone': [null],
      'email': [null, [Validators.required, Validators.maxLength(40)]]
    })
    
    this.contatoService.getContato().subscribe(res => {
      this._id = res['data']['_id']
      console.log(this._id, res)
      this.contatoForm.patchValue({
        _id: this._id,
        rua: res['data']['rua'],
        bairro: res['data']['bairro'],
        numero: res['data']['numero'],
        cep: res['data']['cep'],
        complemento: res['data']['complemento'],
        cidade: res['data']['cidade'],
        estado: res['data']['estado'],
        telefone: res['data']['telefone'],
        email: res['data']['email']
      })
    })
    console.log(`meu id aqui: ${this._id}`)
    console.log(`contatoForm:`, this.contatoForm.value)
    //this.construirForm()
  }

  enableInputs() {
    this.propriedade = false
    console.log(this._id, this.rua, this.email)
  }

  disableInputs() {
    this.propriedade = true
  }

  putContato(id, form: NgForm) {
    id = this._id
    console.log(id)
    console.log("botão de put funcionando")
    this.contatoService.putContato(id, form).subscribe(res => {
      console.log(res)
    })
  }

}
