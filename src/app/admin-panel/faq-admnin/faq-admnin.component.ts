import { Component, OnInit } from '@angular/core';
import { FAQService } from './../../shared/services/faq.service'
import { FAQ } from "./../../shared/models/faq.model"
import { Subscription } from "rxjs"
import { Router } from "@angular/router"
import { FormsModule } from "@angular/forms"


@Component({
  selector: 'app-faq-admnin',
  templateUrl: './faq-admnin.component.html',
  styleUrls: ['./faq-admnin.component.css']
})
export class FaqAdmninComponent implements OnInit {

  private httpReq: Subscription

  faqs: FAQ[]

  ordenationPerItem: any

  isLoading: boolean = false
  order: boolean = false
  messageApi: string
  statusResponse: number
  p: number
  total: number
  limit: number
  

  
  headTableItems: any[] = [
    // {
    //   option: 'Pergunta',
    //   param: 'pergunta'
    // },
    {
      option: 'Postado em',
      param: 'createdAt'
    }
  ]

  constructor(
    private faqService: FAQService,
    private r: Router
  ) { }

  ngOnInit() {

    this.r.routeReuseStrategy.shouldReuseRoute = () => false
    this.ordenationPerItem = this.headTableItems[2]

    this.faqService.params = this.faqService.params.set('columnSort', 'createdAt')
    this.faqService.params = this.faqService.params.set('valueSort', 'descending')
    this.faqService.params = this.faqService.params.set('page', '1')

    this.getFAQWithParams()
  }

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }

  getFAQWithParams() {
    this.isLoading = true
    this.httpReq = this.faqService.getFAQWithParams().subscribe(response => {
      this.statusResponse = response.status
      this.messageApi = response.body['message']
      this.faqs = response.body['data']
      this.p = response.body['page']
      this.total = response.body['count']
      this.limit = response.body['limit']
      this.isLoading = false
    }, err => {
      this.statusResponse = err.status
      this.messageApi = err.error['message']
      this.isLoading = false
    })
  }

  getPage(page: number) {
    this.faqs = null
    this.faqService.params = this.faqService.params.set('page', page.toString())
    this.getFAQWithParams()
  }

  onClickSortTable(item: any) {
    this.faqs = null
    this.ordenationPerItem = item
    this.faqService.params = this.faqService.params.set('columnSort', item['param'])
    if (this.faqService.params.get('valueSort') == 'descending') {
      this.faqService.params = this.faqService.params.set('valueSort', 'ascending')
    } else {
      this.faqService.params = this.faqService.params.set('valueSort', 'descending')
    }
    this.getFAQWithParams()
  }

}
