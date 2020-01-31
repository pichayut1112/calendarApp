import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { CalendarHZComponent } from './calendar-hz/calendar-hz.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AngularFireModule} from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarHZComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ButtonModule,
    RouterModule.forRoot([
      {path:'calendar', component:CalendarComponent},
      {path:'calendarhz', component:CalendarHZComponent}
    ]),
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,TimelineViewsService, TimelineMonthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
