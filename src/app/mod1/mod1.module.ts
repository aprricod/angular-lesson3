import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Mod1Component } from './mod1.component';

@NgModule({
  declarations: [Mod1Component, ChildComponent],
  imports: [CommonModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
