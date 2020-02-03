import { Component, ViewChild, HostListener } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  template: `
  <nav class="p-3 mb-2 bg-primary text-white"  align = 'center'>Calendar</nav>
  <button #togglebtn ejs-button cssClass="e-flat" iconCss="e-btn-sb-icon e-play-icon" [isToggle]="true" content="Calendar V"></button>         
          <div *ngIf="showDiv" style="background-color:lightblue"><app-calendar></app-calendar></div>
          <div *ngIf="!showDiv"><app-calendar-hz></app-calendar-hz></div> `
})
export class AppComponent {
  title = 'calendar-app-project';
  showDiv: boolean = true;

  @ViewChild('togglebtn') togglebtn: ButtonComponent;
  @HostListener('click', ['togglebtn'])
  btnClick() {
      if(this.togglebtn.element.classList.contains('e-active')){
          this.togglebtn.content = 'Calendar H';
          this.togglebtn.iconCss = 'e-btn-sb-icon e-pause-icon';
          this.showDiv = false;
      }
      else {
          this.togglebtn.content = 'Calendar V';
          this.togglebtn.iconCss = 'e-btn-sb-icon e-play-icon';
          this.showDiv = true;
      }
  }
}
