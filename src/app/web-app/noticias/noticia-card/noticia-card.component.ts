import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from "./../noticia.model"

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent implements OnInit {

  @Input() noticia: Noticia[]

  constructor() { }

  ngOnInit() {
  }

}
