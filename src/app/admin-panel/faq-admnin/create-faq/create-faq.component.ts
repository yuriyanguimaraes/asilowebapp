import { Component, OnInit } from '@angular/core'
import { FAQService } from '../../../shared/services/faq.service'
import { FAQ } from "../../../shared/models/faq.model"
import { Router } from '@angular/router'
import { Subscription } from "rxjs"
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-faq',
  templateUrl: './create-faq.component.html',
  styleUrls: ['./create-faq.component.css']
})
export class CreateFaqComponent implements OnInit {

  private httpReq: Subscription

  private faqForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public faqService: FAQService,
    private r: Router
  ) { }

  ngOnInit(){

    this.faqForm = this.formBuilder.group({
      pergunta: ['',
      Validators.compose([
         Validators.required,
         Validators.minLength(10)
       ])
     ],
     resposta: ['',
       Validators.compose([
         Validators.required,
         Validators.minLength(50)
       ])
     ],
     status: true
   });
  }

  post(form: FAQ){

    this.httpReq = this.faqService.post(form).subscribe(response =>{
      this.r.navigate(['/admin/faq/create'])
    })
    alert(`A Dúvida frequente foi cadastrada com sucesso!`);

  }


  get pergunta() { return this.faqForm.get('pergunta')}

  get resposta() { return this.faqForm.get('resposta')}

  ngOnDestroy() {
    if (this.httpReq) {
      this.httpReq.unsubscribe()
    }
  }
}
