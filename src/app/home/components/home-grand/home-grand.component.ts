import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ElementRef, InjectionToken, Injector, Input, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/Operators';


import { token } from '../../services';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef:ElementRef;
  // private _time: number;
  // @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  // public get time() {
  //   console.log('脏值检测');
  //   return this._time;
  // }
  constructor(private ngZone: NgZone,  private rd: Renderer2) {    
  }  
  ngOnInit() { 
    fromEvent<any>(this.inputRef.nativeElement, 'input')
    .pipe(debounceTime(1000))
    .subscribe(e => {
      console.log(e.target.value)
    })
    console.log('hello')

    
    // const injecter = Injector.create({
    //   providers: [
    //     {
    //       provide: token,
    //       useValue: 'http://localhost'
    //     }
    //   ]
    // })
    // console.log(injecter.get(token))
    from([1,2,3,4].filter(e => e%2===0))    
    .subscribe(
      e=> console.log(e),
      err=>console.log(err),
      () => console.log('结束')
    )
  }
  // ngAfterViewInit(): void {
  //   this.ngZone.runOutsideAngular(()=>{
  //     setInterval(()=>{
  //       // this._time = Date.now();
  //       // this.timeRef.nativeElement.innerText = Date.now();
  //       this.rd.setProperty(this.timeRef.nativeElement, 'innerText',Date.now() )  
          
  //     }, 200)
  //   })
  // }
  handleClick(){}
}
