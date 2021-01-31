import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface TopMenu {
  id: number,
  title: string,
  link: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScrollableTabComponent implements OnInit {  
  selectedIndex: number = 0;
  
  @Input()
  menus: TopMenu[] = []  
  
  @Output()
  tabSelected = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  
  handleSelection(item: TopMenu, i: number) { 
    this.selectedIndex = i;   
    this.tabSelected.emit(item);    
  }
  

}


