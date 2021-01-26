import { Component, ViewChild } from '@angular/core';
import { ImageSlider } from './share/components/image-slider/image-slider.component';
import { TopMenu } from './share/components/scrollable-tab/scrollable-tab.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username=""
  title = 'angular-shopping';
  topMenus: TopMenu[] =  [
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
  sliders: ImageSlider[] = [
    {
      imageUrl: 'http://ngassets.twigcodes.com/banner001.png',
      link: '',
      caption: ''
    }, {
      imageUrl: 'http://ngassets.twigcodes.com/banner002.png',
      link: '',
      caption: ''
    },
    {
      imageUrl: 'http://ngassets.twigcodes.com/banner003.png',
      link: '',
      caption: ''
    },
    {
      imageUrl: 'http://ngassets.twigcodes.com/banner004.png',
      link: '',
      caption: ''
    },
    {
      imageUrl: 'http://ngassets.twigcodes.com/banner005.png',
      link: '',
      caption: ''
    }
  ];


  handleTabSelected(e) {
    console.log(e)    
  }
}
