import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/Operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date;
  @Input() endDate: Date;
  private _MS_PER_SECOND = 1000;
  countDown$: Observable<string>;
  constructor() { }
  ngOnInit() {    
    this.countDown$= this.getCoundDownObservable(this.startDate, this.endDate);    
  }
  private getCoundDownObservable = (startDate: Date, endDate: Date)=> {
    return interval(1000).pipe(
      map(interval=> this.diffInSec(startDate, endDate) - interval),
      takeWhile(gap => gap>=0),
      // tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec/3600/24),
        hour: Math.floor(sec/3600 % 24),
        minute: Math.floor(sec/60%60),
        second: sec%60
      })),
      map(({hour, minute, second}) => `${hour}:${minute}:${second}`)
    )
  }
  private diffInSec = (startDate: Date, endDate: Date): number =>{
    const diff = endDate.getTime() - startDate.getTime();
    return Math.floor(diff/ this._MS_PER_SECOND );
  }

}
