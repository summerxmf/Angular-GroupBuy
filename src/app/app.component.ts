import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/Operators';
import { TabItem } from './share/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  title = 'angular-shopping'; 
  selectIndex$: Observable<number>;
  constructor(private router: Router) {
  }
  ngOnInit(): void {    
   this.selectIndex$ = this.router.events
   .pipe(
     filter(ev => ev instanceof NavigationEnd),
     tap(e => console.log('22', e)),
     map((ev: NavigationEnd) => {
       const arr = ev.url.split('/');
       return arr.length>1 ? arr[1]: 'home'
     }),
     tap(e => console.log('23', e)),
     map(path => this.getSelectedIndex(path))
   )

  }
  getSelectedIndex(tab: string): number {
    return tab==='recommend' ? 1 : tab === 'category'? 2 : tab==='chat'? 3 : tab === 'my'? 4 : 0;
  }

  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link])

  }

}
