import { Component, OnInit } from '@angular/core';
import { FAQService } from "./../services/faq.service"
import { FAQ } from "./../faq/faq.model"

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faq: FAQ[]

  constructor(private faqs: FAQService) { }

  ngOnInit() {
    this.getFAQ()
  }

  getFAQ(){
    this.faqs.getFAQ().subscribe(faq =>{
      this.faq = faq['pergunta']
    }) 
  }
}
