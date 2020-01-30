import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQComponent } from '../faq/faq.component';


@NgModule({  
  imports: [
    CommonModule
  ],
  exports: [
    FAQComponent
  ],
  declarations: [FAQComponent]
})
export class FAQModule { }
