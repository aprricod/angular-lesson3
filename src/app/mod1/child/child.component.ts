import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() title = 'Alice';
  @Output() log: EventEmitter<string> = new EventEmitter();

  changesCounter = 0;

  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'title') {
        const name = changes.title.currentValue;
        changesMsgs.push(`name changed to "${name}"`);
      }
    }
    this.log.emit(
      `onChanges (${this.changesCounter++}): ${changesMsgs.join('; ')}`
    );
  }

  ngOnInit() {
    this.log.emit(`onInit`);
  }

  ngDoCheck() {
    this.log.emit(`doCheck`);
  }

  ngAfterContentInit() {
    this.log.emit(`afterContentInit`);
  }

  ngAfterContentChecked() {
    this.log.emit('afterContentChecked');
  }

  ngAfterViewInit() {
    this.log.emit(`afterViewInit`);
  }

  ngAfterViewChecked() {
    this.log.emit(`afterViewChecked`);
  }

  ngOnDestroy() {
    this.log.emit(`onDestroy`);
  }
}
