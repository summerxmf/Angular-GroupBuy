import { ChangeDetectionStrategy, Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/Operators';
import { TopMenu } from 'src/app/share/components/scrollable-tab/scrollable-tab.component';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
  
})
export class HomeContainerComponent implements OnInit {
  topMenus: TopMenu[];
  selectedTabIndex: number;
  constructor(
    private router: Router, 
    private routeInfo: ActivatedRoute,
    private service: HomeService) { }

  ngOnInit() {    
    this.topMenus = this.service.getTabs(); 
    this.routeInfo.firstChild.paramMap
    .subscribe(
      p=> this.selectedTabIndex = this.getSelectIndex(p.get('tabLink'))
    )
  }
  private getSelectIndex = (link) => {
    return this.topMenus.findIndex(tab=> tab.link === link);
  }

  handleTabSelected([tab, i]) {
    console.log('ddddd...',tab)
    this.router.navigate(['home', tab.link]) 
    this.selectedTabIndex = i; 
  }

}
