import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { Exo1Component } from './components/exo1/exo1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Exo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
