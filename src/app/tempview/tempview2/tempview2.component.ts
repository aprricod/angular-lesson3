import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempview2',
  templateUrl: './tempview2.component.html',
  styleUrls: ['./tempview2.component.css'],
})
export class Tempview2Component implements OnInit {
  @ContentChild(Tempview2Component, { static: true })
  header: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  change() {
    console.log(this.header);
  }
}
