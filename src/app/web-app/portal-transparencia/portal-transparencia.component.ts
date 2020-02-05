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

  filterDate: boolean = false
  filterCategory: boolean = false
  order: boolean = false

  constructor(private ts: TransparenciaService, private ar: ActivatedRoute, private r: Router) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.getDocumentsWithParams()
  }

  getDocumentsWithParams() {
    this.ts.getDocumentsWithParams().subscribe(documents => {
      this.documents = documents['data']
    })
  }

  clearConditions() {
    if (this.filterCategory) {
      this.filterCategory = false
    } else if (this.filterDate) {
      this.filterDate = false
    } else {
      this.order = false
    }

    this.r.navigate(['/transparencia'])
  }

}
