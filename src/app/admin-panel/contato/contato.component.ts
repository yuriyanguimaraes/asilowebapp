import { ContatoService } from './../../web-app/services/contato.service';
import { Contato } from './../../web-app/contato/contato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoAdminComponent implements OnInit {

  public contato: Contato

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.getContato()
  }

  getContato(){
    this.contatoService.getContato().subscribe(response => {
      //console.log(res)
      this.contato = response['data']
      //console.log(this.contato)
    })
  }

}
