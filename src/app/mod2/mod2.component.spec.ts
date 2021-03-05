import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Component } from './mod2.component';

describe('Mod2Component', () => {
  let component: Mod2Component;
  let fixture: ComponentFixture<Mod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
