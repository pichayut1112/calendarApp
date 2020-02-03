import { Component, OnInit } from '@angular/core';
import { TimeScaleModel, EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
// import { scheduleData } from '../datasource';
import { CalendarService } from '../calendar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  template:  `<div>{{scheduleData}}</div>
  <ejs-schedule width='100%' height='550px' currentView="Day" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
  <e-views>
  <e-view option='Day' dateFormat='dd / MMMM / yyyy' [timeScale]="timeScaleOptions"></e-view>
</e-views>
</ejs-schedule>`
})

export class CalendarComponent implements OnInit{
  scheduleData
  constructor(private svc:CalendarService,private http:HttpClient){}
  // ngOnInit(){
  //   this.svc.getData().subscribe(data=> this.data=data);
  // };
  ngOnInit() {
    this.http.get('src/app/datasource.ts').subscribe(data => {
      this.scheduleData = data;
    });    
  }
  data: Object[];
  
  public selectedDate: Date = new Date();
  public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 2 };
  public eventSettings: EventSettingsModel = { dataSource: this.scheduleData };
  
}

