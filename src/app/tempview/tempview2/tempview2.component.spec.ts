import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempview2Component } from './tempview2.component';

describe('Tempview2Component', () => {
  let component: Tempview2Component;
  let fixture: ComponentFixture<Tempview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tempview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
