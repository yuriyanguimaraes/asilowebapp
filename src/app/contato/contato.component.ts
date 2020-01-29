import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() {}

  //AQUI SERÁ FEITO A CONFIGURAÇÃO DA API DO GOOGLE MAPS
  lat: number = -21.748462;
  lng: number = -48.824793;
  zoom: number = 15;


  ngOnInit() {}

}
