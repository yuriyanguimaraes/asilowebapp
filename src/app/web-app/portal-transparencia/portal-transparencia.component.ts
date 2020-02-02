import { Component, OnInit } from '@angular/core';
import { Transparencia } from "./transparencia.model"
import { TransparenciaService } from "./../services/transparencia.service"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-portal-transparencia',
  templateUrl: './portal-transparencia.component.html',
  styleUrls: ['./portal-transparencia.component.css']
})
export class PortalTransparenciaComponent implements OnInit {

  documents: Transparencia[]

  constructor(private ts: TransparenciaService, private ar: ActivatedRoute, private r: Router) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    let category = this.ar.snapshot.params['categoria']

    if (category) {
      this.getDocumentsTransparenciaByCategory(category)
    } else {
      this.getDocumentsTransparencia()
    }

  }

  getDocumentsTransparencia() {
    this.ts.getDocumentsTransparencia().subscribe(documents => {
      this.documents = documents['data']
    })
  }

  getDocumentsTransparenciaByCategory(category: string) {
    this.ts.getDocumentsTransparenciaByCategory(category).subscribe(documents => {
      this.documents = documents['data']
    })
  }

}
