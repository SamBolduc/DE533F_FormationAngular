import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { Exo4Component } from './components/exo4/exo4.component';
import { Exo5Component } from './components/exo5/exo5.component';
import { RainbowDirective } from './directives/exo5/rainbow.directive';
import { EmptyDefaultPipe } from './pipes/empty-default.pipe';
import { TodoComponent } from './todo/components/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EmbaucheComponent } from './cv/embauche/embauche/embauche.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CvInfosComponent } from './cv/cv-infos/cv-infos.component';
import { Nf404Component } from './components/nf404/nf404/nf404.component';
import { LoginComponent } from './components/login/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Exo1Component,
    Exo2Component,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailCvComponent,
    Exo4Component,
    Exo5Component,
    RainbowDirective,
    EmptyDefaultPipe,
    TodoComponent,
    EmbaucheComponent,
    NavBarComponent,
    CvInfosComponent,
    Nf404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
