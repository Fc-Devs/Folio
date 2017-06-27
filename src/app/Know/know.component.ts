import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.css']
})




export class KnowComponent{
  title = 'app';
@HostListener("window:scroll", [])
 onWindowScroll() {
  window.scrollTo(0,window.scrollX+1);
  console.log("Scroll");
  }
}
