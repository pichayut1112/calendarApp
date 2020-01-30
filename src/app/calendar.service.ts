import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  constructor(private db:AngularFirestore){}
  getData():Observable<Object[]>{
    let scheduleData = [
      {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star',
          StartTime:  new Date(2020, 0, 30, 9, 30),
          EndTime: new Date(2020, 0, 30, 11, 0),
          CategoryColor: '#1aaa55'
      }, {
          Id: 2,
          Subject: 'Thule Air Crash Report',
          StartTime: new Date(2020, 0, 30, 12, 0),
          EndTime: new Date(2020, 0, 30, 14, 0),
          CategoryColor: '#357cd2'
      }];
    return of (scheduleData).pipe(
         tap(scheduleData=> console.log(scheduleData)));
  }

}
