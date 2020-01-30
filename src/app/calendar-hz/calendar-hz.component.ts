import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from '../calendar/datasource';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-calendar-hz',
  providers: [TimelineViewsService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
  <e-header-rows>
      <e-header-row option='Hour'></e-header-row>
  </e-header-rows>
  <e-views>
      <e-view option='TimelineDay'  dateFormat='dd / MMMM / yyyy' ></e-view>
  </e-views>
</ejs-schedule>`,
  styleUrls: ['./calendar-hz.component.css']
})
export class CalendarHZComponent {
  public selectedDate: Date = new Date();
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };

}
