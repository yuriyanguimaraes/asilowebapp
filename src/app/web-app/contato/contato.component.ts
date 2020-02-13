import { ContatoService } from './../services/contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { 

    this.endereco = this.contatoService.getContato();
    this.telefone = this.contatoService.getTeste();
    this.email = this.contatoService.getTeste();

  }

  ngOnInit() { }

  // CONFIGURAÇÃO DA API DO GOOGLE MAPS
  // LOCALIZAÇÃO DO LAR DE IBITINGA
  lat: number = -21.748462;
  lng: number = -48.824793;
  zoom: number = 15;

  // OUTRAS VARIÁVEIS
  endereco: any
  telefone: string
  email: string

}
