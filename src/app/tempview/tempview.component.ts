import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Tempview1Component } from './tempview1/tempview1.component';

@Component({
  selector: 'app-tempview',
  templateUrl: './tempview.component.html',
  styleUrls: ['./tempview.component.css'],
})
export class TempviewComponent implements AfterViewInit {
  @ViewChild('counter', { static: false })
  counter: Tempview1Component;
  name = 'Artem';
  header = 'Заголовок';
  constructor() {
    console.log('app-tempview', this.counter);
  }
  ngAfterViewInit(): void {
    console.log('app-tempview', this.counter);
    this.counter.counter = 100;
  }

  ngOnInit(): void {}
}
