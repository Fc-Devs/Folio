import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MouseWheelDirective } from '../directive/mousewheel.directive';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from '@angular/material';

const appRoutes:Routes = [{path : '', component:HomeComponent}];

@NgModule({
  declarations: [
    HomeComponent,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
