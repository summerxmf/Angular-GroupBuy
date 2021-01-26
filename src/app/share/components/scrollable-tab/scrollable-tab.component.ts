import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface TopMenu {
  title: string,
  link: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})

export class ScrollableTabComponent implements OnInit {
  greeting(name: string) {
    console.log("hello " + name);
  }
  selectedIndex: number = 0;
  
  @Input()
  menus: TopMenu[] = []  
  
  @Output()
  tabSelected = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  handleSelection(i:number) {
    this.selectedIndex = i;
    this.tabSelected.emit(i);
    
  }
  

}


