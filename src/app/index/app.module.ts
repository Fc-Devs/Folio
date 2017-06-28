import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MouseWheelDirective } from '../directive/mousewheel.directive';
import { AppComponent } from '../index/app.component';
import { HomeComponent } from '../Home/home.component';
import { KnowComponent } from '../Know/know.component';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from '@angular/material';

const appRoutes:Routes = [
  {path : '', component:HomeComponent},
  {path : '1', component:HomeComponent},
  {path : '2', component:KnowComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,HomeComponent,KnowComponent,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }