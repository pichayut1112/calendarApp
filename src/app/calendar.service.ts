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
    let data = [
      {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star',
          StartTime:  new Date(2020, 0, 31, 9, 30),
          EndTime: new Date(2020, 0, 31, 11, 0)
      }];
    return of (data).pipe(
         tap(data=> console.log(data)));
  }

}
