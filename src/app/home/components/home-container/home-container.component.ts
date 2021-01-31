import { ChangeDetectionStrategy, Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopMenu } from 'src/app/share/components/scrollable-tab/scrollable-tab.component';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
  
})
export class HomeContainerComponent implements OnInit {
  topMenus: TopMenu[];
  constructor(
    private router: Router, 
    private service: HomeService,
    @Inject(token) private baseUrl:string) { }

  ngOnInit() {
    console.log(this.baseUrl) 
    this.topMenus = this.service.getTabs();   
  }  

  handleTabSelected(ev) {
    this.router.navigate(['home', ev.link])    
  }

}
