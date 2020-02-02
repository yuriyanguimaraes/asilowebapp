import { Component, OnInit } from '@angular/core';
import { Transparencia } from "./transparencia.model"
import { TransparenciaService } from "./../services/transparencia.service"

@Component({
  selector: 'app-portal-transparencia',
  templateUrl: './portal-transparencia.component.html',
  styleUrls: ['./portal-transparencia.component.css']
})
export class PortalTransparenciaComponent implements OnInit {

  documents: Transparencia[]

  constructor(private ts: TransparenciaService) { }

  ngOnInit() {
    this.getDocumentsTransparencia()
  }

  getDocumentsTransparencia() {
    this.ts.getDocumentsTransparencia().subscribe(documents => {
      this.documents = documents['data']
      console.log(this.documents)
    })
  }

}
