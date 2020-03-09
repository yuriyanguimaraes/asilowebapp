import { Observable } from 'rxjs';
import { Contato } from './contato.model';
import { ContatoService } from './../services/contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  Contato: Contato

  constructor(private contatoService: ContatoService) {
  }

  ngOnInit() {
    this.contatoService.getContato().subscribe(response => {
      console.log(response)
      this.Contato = response['data']
    })
  }

  // CONFIGURAÇÃO DA API DO GOOGLE MAPS
  // LOCALIZAÇÃO DO LAR DE IBITINGA
  lat: number = -21.748462;
  lng: number = -48.824793;
  zoom: number = 15;

}
