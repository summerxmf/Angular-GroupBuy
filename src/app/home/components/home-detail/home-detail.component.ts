import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern, Observable, Subscription } from 'rxjs';
import { Channel } from 'src/app/share/components/horizontal-grid/horizontal-grid.component';
import { ImageSlider } from 'src/app/share/components/image-slider/image-slider.component';
import { HomeService } from '../../services';
import {filter, map} from'rxjs/Operators'


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  // selectedTabLink: string = 'special'
  selectedTabLink$: Observable<string>;
  sliders$: Observable<ImageSlider[]>;
  channels: Channel[];
  
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

    
    

    this.sliders$ = this.service.getSliders();

    this.channels = this.service.getChannels();
    
  }
 
}
