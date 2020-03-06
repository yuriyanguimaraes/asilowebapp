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

  contato: Contato
  contatoForm: FormGroup

  constructor(private contatoService: ContatoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contatoService.getContato().subscribe(res => {
      console.log(res)
    })

    this.contatoForm = this.formBuilder.group({
      '_id': [null],
      'rua': [null],
      'bairro': [null],
      'numero': [null],
      'cep': [null],
      'complemento': [null],
      'cidade': [null],
      'estado': [null],
      'telefone': [null],
      'email': [null]
    })

  }

  putContato(){
    console.log("botão de put funcionando")
  }

}
