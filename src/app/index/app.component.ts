import { Component, HostListener } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
 
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent{
  title = 'accueil';
}
