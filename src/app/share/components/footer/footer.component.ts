import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TabItem } from '../../domain';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  tabItems: TabItem[] = [
    {
      title: 'Home',
      icon: '/assets/tabs/home.png',
      link: 'home',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: 'Recommend',
      icon: '/assets/tabs/recommend.png',
      link: 'recommend',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: 'Category',
      icon: '/assets/tabs/category.png',
      link: 'category',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: 'Chat',
      icon: '/assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: 'My',
      icon: '/assets/tabs/my.png',
      link: 'my',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
  ];
  @Input() selectedIndex;
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  toggleSelected(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[idx])
  }

}
