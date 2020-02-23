import { Component, OnInit, Input } from '@angular/core';
// import { CarouselConfig } from "ngx-bootstrap/carousel"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true } }
  // ]
})
export class GalleryComponent implements OnInit {

  @Input() images: string

  constructor() { }

  ngOnInit() {

  }
}
