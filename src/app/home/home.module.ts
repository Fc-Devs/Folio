import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MouseWheelDirective } from '../directive/mousewheel.directive';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from '@angular/material';
import {HomeComponent} from './home.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MaterialModule,  
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
