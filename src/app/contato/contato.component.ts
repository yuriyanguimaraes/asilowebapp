import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() {}

  //AQUI SERÁ FEITO A CONFIGURAÇÃO DA API DO GOOGLE MAPS
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;


  ngOnInit() {}

}
