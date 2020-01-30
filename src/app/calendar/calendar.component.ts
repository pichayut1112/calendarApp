import { Component, OnInit } from '@angular/core';
import { TimeScaleModel, EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  providers: [TimelineViewsService],
  template:  `<ejs-schedule width='100%' height='550px' currentView="Day" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
  <e-views>
  <e-view option='Day' dateFormat='dd / MMMM / yyyy' [timeScale]="timeScaleOptions"></e-view>
</e-views>
</ejs-schedule>`,
  //templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit{
  constructor(private svc:CalendarService){}
  ngOnInit(){
    this.svc.getData().subscribe(scheduleData=> this.scheduleData=scheduleData);
  }
;
scheduleData: Object[]
  public selectedDate: Date = new Date();
  public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 2 };
  public eventSettings: EventSettingsModel = { dataSource: this.scheduleData};
}

