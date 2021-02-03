import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel } from 'src/app/share/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/share/components/image-slider/image-slider.component';
import { TopMenu } from 'src/app/share/components/scrollable-tab/scrollable-tab.component';
import { Ad, Product } from 'src/app/share/domain';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {

  }
  topMenus: TopMenu[] =  [
    {
      id: 1,
      title: 'Hot',
      link: 'hot'
    },
    {
      id: 2,
      title: 'Men',
      link: 'men'
    },
    {
      id: 3,
      title: 'Women',
      link: 'women'
    },
    {
      id: 4,
      title: 'Sports',
      link: 'sports'
    },
    {
      id: 5,
      title: 'Mobile',
      link: 'mobile'
    },
    {
      id: 6,
      title: 'Textile',
      link: 'textile'
    },
    {
      id: 7,
      title: 'Food',
      link: 'food'
    },
    {
      id: 8,
      title: 'Appliance',
      link: 'appliance'
    },
    {
      id: 9,
      title: 'Shoes',
      link: 'shoes'
    },
    {
      id: 10,
      title: 'Cars',
      link: 'cars'
    },
    {
      id: 11,
      title: 'Fruits',
      link: 'fruits'
    },
    {
      id: 12,
      title: 'Computers',
      link: 'computers'
    },
    
    {
      id: 13,
      title: 'Home',
      link: 'home'
    },
    {
      id: 14,
      title: 'Baby',
      link: 'baby'
    },
    {
      id: 15,
      title: 'Cosmetic',
      link: 'cosmetic'
    },
    {
      id: 16,
      title: 'Furnitures',
      link: 'furnitures'
    }
  ];
  // sliders: ImageSlider[];

  channels: Channel[] = [
    {
      id: 0,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
      title: 'Special',
      link: ''
    },
    {
      id: 1,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
      title: 'Clearance',
      link: ''
    },
    {
      id: 2,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
      title: 'Brands',
      link: ''
    },
    {
      id: 3,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
      title: 'Orchard',
      link: ''
    },
    {
      id: 4,
      icon: 'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
      title: '< $10',
      link: ''
    },
    {
      id: 5,
      icon: 'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
      title: 'Free change',
      link: ''
    },
    {
      id: 6,
      icon: 'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
      title: 'Cash out',
      link: ''
    },
    {
      id: 7,
      icon: 'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
      title: 'Lottery',
      link: ''
    },
    {
      id: 8,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
      title: 'Top up',
      link: ''
    },
    {
      id: 9,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
      title: 'Sellers',
      link: ''
    },
    {
      id: 10,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
      title: 'Sign in',
      link: ''
    },
    {
      id: 11,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
      title: 'Savings',
      link: ''
    },
    {
      id: 12,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
      title: 'Appliance',
      link: ''
    },
    {
      id: 13,
      icon: 'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
      title: 'Shopping',
      link: ''
    },
    {
      id: 14,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
      title: 'Bargin',
      link: ''
    },
    {
      id: 15,
      icon: 'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
      title: 'Group',
      link: ''
    }
  ];
  getTabs() {
    return this.topMenus;
  }  
  getChannels() {
    return this.channels;
  }
  getSliders() {    
    return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, 
          {params: {icode: `${environment.icode}`}}          
        );
  }
  getAdsByTab(tab:string) {
    return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, 
      {params: {icode: `${environment.icode}`, categories_like: tab}})
  }

  getProductsByTab(tab:string) {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`, 
      {params: {icode: `${environment.icode}`, categories_like: tab}})
  }
}
