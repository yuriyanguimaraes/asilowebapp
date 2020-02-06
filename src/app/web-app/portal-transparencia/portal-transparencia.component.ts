import { Component, OnInit, Renderer } from '@angular/core';
import { Transparencia } from "./transparencia.model"
import { TransparenciaService } from "./../services/transparencia.service"
import { Router } from "@angular/router"

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

  constructor(private ts: TransparenciaService, private r: Router, private render: Renderer) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.ts.params = this.ts.params.set('order', 'descending')
    this.ts.params = this.ts.params.set('page', '1')

    this.getDocumentsWithParams()
  }

  getDocumentsWithParams() {
    this.ts.getDocumentsWithParams().subscribe(documents => {
      this.documents = documents['data']
    })
  }

  setOrderByParam(valueOrder: string) {
    this.ts.params = this.ts.params.set('order', valueOrder)
    this.order = true
    this.documents = null
    this.getDocumentsWithParams()
  }

  setActiveDropdownMenuItem(event: any) {
    let oldClasses = event.target.getAttribute('class')

    this.render.setElementAttribute(event.target, "class", `${oldClasses} active`)
  }

  setCategoryByParam(valueCategory: string) {
    this.ts.params = this.ts.params.set('category', valueCategory)
    this.filterCategory = true
    this.documents = null
    this.getDocumentsWithParams()
  }

  setActiveMenuItem(event: any) {
    let oldClasses = event.target.getAttribute('class')

    this.render.setElementAttribute(event.target, "class", `${oldClasses} active`)
  }

  clearConditions() {
    if (this.filterCategory) {
      this.filterCategory = false
      this.ts.params = this.ts.params.delete('category')
    } else if (this.filterDate) {
      this.filterDate = false
      this.ts.params = this.ts.params.delete('dateStart')
      this.ts.params = this.ts.params.delete('dateFinish')
    } else {
      this.order = false
      this.ts.params = this.ts.params.delete('order')
    }

    this.documents = null
    this.getDocumentsWithParams()
  }

}
