import { Component, OnInit } from '@angular/core';
import { TimeScaleModel, EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { CalendarService } from '../calendar.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-calendar',
  template:  `
  <ejs-schedule width='100%' height='550px' currentView="Day" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
  <e-views>
  <e-view option='Day' dateFormat='dd / MMMM / yyyy' [timeScale]="timeScaleOptions"></e-view>
</e-views>
</ejs-schedule>`
})

export class CalendarComponent implements OnInit{
  scheduleData = scheduleData
  constructor(private svc:CalendarService){}
  ngOnInit(){
    this.svc.getData().subscribe(data=> this.data=data);
  };
  data: Object[];
  
  public selectedDate: Date = new Date();
  public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 2 };
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  
}

