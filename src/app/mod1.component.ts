import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
  export class Mod1Component implements OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  logs:string[] = [];
  name:string = '';
  showChild:boolean = false;

  constructor() {
    this.name = "Natalia";
    setTimeout(() => {this.showChildMethod()}, 5000);
    setTimeout(() => {this.updateName()}, 10000);
    setTimeout(() => {this.hideChild()}, 20000);
    
  }
  

  ngOnDestroy(): void {
    console.log('app-mod1', 'ngOnDestroy', this.logs);
  }
  ngAfterContentInit(): void {
    console.log('app-mod1', 'ngAfterContentInit', this.logs);
  }
  ngAfterContentChecked(): void {
    console.log('app-mod1', 'ngAfterContentChecked', this.logs);
  }
  ngAfterViewInit(): void {
    console.log('app-mod1', 'ngAfterViewInit', this.logs);
  }
  ngAfterViewChecked(): void {
    console.log('app-mod1', 'ngAfterViewChecked', this.logs);
  }
  ngDoCheck(): void {
    console.log('app-mod1', 'ngDoCheck', this.logs);
  }
  ngOnInit(): void {
    console.log('app-mod1', 'ngOnInit', this.logs);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('app-mod1', 'ngOnChanges', this.logs, changes);
  }

  onLog(data:string): void {
    this.logs.push(data);
  }

  updateName(): void {
    this.name = 'Artem';
  }

  hideChild(): void {
    this.showChild = false;
    this.onLog("onDestroy")
  }

  showChildMethod(): void {
    this.showChild = true;
    
  }

   
}
