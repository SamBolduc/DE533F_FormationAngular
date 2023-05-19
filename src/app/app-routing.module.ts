import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/components/todo/todo.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { Exo4Component } from './components/exo4/exo4.component';
import { Exo5Component } from './components/exo5/exo5.component';
import { CvInfosComponent } from './cv/cv-infos/cv-infos.component';
import { Nf404Component } from './components/nf404/nf404/nf404.component';
import { LoginComponent } from './components/login/login/login.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'exo1', component: Exo1Component},
  {path: 'exo2', component: Exo2Component},
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: CvInfosComponent},
  {path: 'exo4', component: Exo4Component},
  {path: 'exo5', component: Exo5Component},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: Nf404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
