import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div class="image">
    </div>
  <nav class="p-3 mb-2 bg-warning text-blue">   
          <h1 align = 'center'>Calendar
          </h1>
          <h1  align = 'center'>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button *ngIf="showButton" (click)="switch(false)" type="button" class="btn btn-primary"  routerLink="/calendar">Calendar Vertical</button>
            <button *ngIf="!showButton" (click)="switch(true)" type="button" class="btn btn-primary" routerLink="/calendarhz">Calendar Horizontal</button>
          </div>
         </h1> 
  </nav>  
  <div class="container"><router-outlet></router-outlet></div>`
})
export class AppComponent {
  title = 'calendar-app-project';

  showButton:boolean=true;
  switch(param){
    this.showButton=param;
  }
}
