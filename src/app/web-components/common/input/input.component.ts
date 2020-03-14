import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { FormControlName } from "@angular/forms"

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  @Input() value: string = null

  input: any

  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngAfterContentInit() {
    this.input = this.control

    if (this.input === undefined) {
      throw new Error('Esse componente deve ser usado com uma diretiva FormControlName')
    }
  }

  verifyInputEmpty(): boolean {
    return this.input.value != "" ? true : false
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty) && this.verifyInputEmpty()
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty)
  }

}
