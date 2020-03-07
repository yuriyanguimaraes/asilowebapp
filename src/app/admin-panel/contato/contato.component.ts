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
    this.contatoService.getContato().subscribe(res => {
      console.log(res)
      this.contatoForm.patchValue({
        _id: res['data']['_id'],
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
  }

  enableInputs() {
    console.log(this.propriedade)
    this.propriedade = false
    console.log(this.propriedade)
  }

  putContato(id, form: NgForm) {
    console.log("botão de put funcionando")
    this.contatoService.putContato(id, form).subscribe(res => {
      console.log(res)
    })
  }

}
