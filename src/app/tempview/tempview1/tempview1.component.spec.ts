import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tempview1Component } from './tempview1.component';

describe('Tempview1Component', () => {
  let component: Tempview1Component;
  let fixture: ComponentFixture<Tempview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tempview1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tempview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
