import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="p-3 mb-2 bg-warning text-blue"  align = 'center'>Calendar</nav>
            <button *ngIf="showDiv" (click)="switch(false)" >Calendar V</button>            
            <button *ngIf="!showDiv" (click)="switch(true)" >Calenda H</button>
          <div  *ngIf="showDiv"><app-calendar></app-calendar></div>
          <div *ngIf="!showDiv"><app-calendar-hz></app-calendar-hz></div>
  <div class="container"></div>`
})
export class AppComponent {
  title = 'calendar-app-project';

  showDiv: boolean = true;
  switch(param) {
    this.showDiv = param;
  }
}
