import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { CalendarHZComponent } from './calendar-hz/calendar-hz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    CalendarHZComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'calendar', component:CalendarComponent},
      {path:'calendarhz', component:CalendarHZComponent}
    ]),
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,TimelineViewsService, TimelineMonthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
