import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern, Observable, Subscription } from 'rxjs';
import { Channel } from 'src/app/share/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/share/components/image-slider/image-slider.component';
import { HomeService } from '../../services';
import {filter, map, switchMap, tap} from'rxjs/Operators'
import { Ad, Product } from 'src/app/share/domain';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  // selectedTabLink: string = 'special'
  selectedTabLink$: Observable<string>;
  sliders$: Observable<ImageSlider[]>  
  channels: Channel[];
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  
  constructor(
    private routeInfo : ActivatedRoute, 
    private service: HomeService, 
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectedTabLink$ = this.routeInfo.paramMap
    .pipe(
      filter(params=> params.has('tabLink')),
      map(params=> params.get('tabLink'))
    );     
    this.sliders$ = this.service.getSliders()
    
    this.channels = this.service.getChannels();

    // this.ad$ = this.service.getAdsByTab(tab)
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdsByTab(tab)),
      filter(ads=> ads.length >0),
      map (ads => ads[0])
    )

    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))      
    )
    
  }
 
}
