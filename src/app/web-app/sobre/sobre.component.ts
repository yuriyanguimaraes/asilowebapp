import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  about: string[] = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos ad facere expedita tenetur officiis sed quam asperiores deleniti impedit iusto vel nulla, eveniet voluptas animi. Voluptas eaque similique impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure officia dolorem porro soluta dolore deserunt molestias vitae illo, veritatis minima quasi nam fugiat hic quae odio cupiditate dicta excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium blanditiis soluta consectetur ipsam recusandae excepturi. Magnam itaque consequuntur est dignissimos quis saepe rerum illo, voluptatibus, error laborum nihil id.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos ad facere expedita tenetur officiis sed quam asperiores deleniti impedit iusto vel nulla, eveniet voluptas animi. Voluptas eaque similique impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure officia dolorem porro soluta dolore deserunt molestias vitae illo, veritatis minima quasi nam fugiat hic quae odio cupiditate dicta excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium blanditiis soluta consectetur ipsam recusandae excepturi. Magnam itaque consequuntur est dignissimos quis saepe rerum illo, voluptatibus, error laborum nihil id.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos ad facere expedita tenetur officiis sed quam asperiores deleniti impedit iusto vel nulla, eveniet voluptas animi. Voluptas eaque similique impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iure officia dolorem porro soluta dolore deserunt molestias vitae illo, veritatis minima quasi nam fugiat hic quae odio cupiditate dicta excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium blanditiis soluta consectetur ipsam recusandae excepturi. Magnam itaque consequuntur est dignissimos quis saepe rerum illo, voluptatibus, error laborum nihil id."];

  constructor() { }

  ngOnInit() {
  }

}
