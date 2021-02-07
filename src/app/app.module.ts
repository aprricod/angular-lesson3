import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import { TempviewModule } from './tempview/tempview.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    Mod2Module,
    TempviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
