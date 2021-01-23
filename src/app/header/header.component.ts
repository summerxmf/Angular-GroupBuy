import { Component, OnInit } from '@angular/core';

interface TopMenu {
  title: string,
  link: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menus: TopMenu[] = [
    {
      title: 'Special',
      link: 'Special'
    },
    {
      title: 'Men',
      link: 'Men'
    },
    {
      title: 'Women',
      link: 'Women'
    },
    {
      title: 'Sports',
      link: 'Sports'
    },
    {
      title: 'Mobile',
      link: 'Mobile'
    },
    {
      title: 'Textile',
      link: 'Textile'
    },
    {
      title: 'Food',
      link: 'Food'
    },
    {
      title: 'Appliance',
      link: 'Appliance'
    },
    {
      title: 'Shoes',
      link: 'Shoes'
    },
    {
      title: 'Cars',
      link: 'Cars'
    },
    {
      title: 'Fruits',
      link: 'Fruits'
    },
    {
      title: 'Computers',
      link: 'Computers'
    },
    
    {
      title: 'Home',
      link: 'Home'
    },
    {
      title: 'Baby',
      link: 'Baby'
    },
    {
      title: 'Cosmetic',
      link: 'Cosmetic'
    },
    {
      title: 'Furnitures',
      link: 'Furnitures'
    }
  ];
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }
  handleSelection(i) {
    this.selectedIndex = i;
  }

}


