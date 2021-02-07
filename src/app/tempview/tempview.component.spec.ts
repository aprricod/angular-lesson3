import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempviewComponent } from './tempview.component';

describe('TempviewComponent', () => {
  let component: TempviewComponent;
  let fixture: ComponentFixture<TempviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
