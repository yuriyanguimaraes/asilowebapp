import { Contato } from './../../web-app/contato/contato.model';
import { ContatoAdminService } from './../services/contato-admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoAdminComponent implements OnInit {

  Contato: Contato

  constructor(private contatoAdminService: ContatoAdminService) { }

  ngOnInit() {
  }

  getTeste(){
    this.contatoAdminService.getTeste()
  }

}
