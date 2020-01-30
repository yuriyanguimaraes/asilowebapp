import { Component, OnInit } from '@angular/core'
import { SobreService } from './../services/sobre.service'
import { Sobre } from './sobre.model'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  about: Sobre[]

  constructor(private sobreS: SobreService) { }

  ngOnInit() {
    this.getSobre()
  }

  getSobre() {
    this.sobreS.getSobre().subscribe(sobreS => {
      this.about = sobreS;
    })
  }


}
