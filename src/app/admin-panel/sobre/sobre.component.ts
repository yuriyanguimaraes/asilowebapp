import { Component, OnInit } from '@angular/core';
import { SobreService } from '../services/sobre.service';
import { Sobre } from './sobre.model';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public sobre: Sobre

  constructor(private sobreService: SobreService) { }

  ngOnInit() {
    this.getSobre();
  }

  getSobre() {
    this.sobreService.getSobre().subscribe((sobre) => {
      this.sobre = sobre['data']
    })
  }

}