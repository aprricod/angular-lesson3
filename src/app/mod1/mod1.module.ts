import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from '../mod1.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [Mod1Component, ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [Mod1Component]
})
export class Mod1Module { }
