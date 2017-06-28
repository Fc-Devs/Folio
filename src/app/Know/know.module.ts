import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';

import { KnowComponent } from './know.component';

@NgModule({
  declarations: [
    KnowComponent
  ],
  imports: [
    BrowserModule, 
    NgSemanticModule 
  ],
  providers: [],
  bootstrap: [KnowComponent]
})
export class KnowModule { }
