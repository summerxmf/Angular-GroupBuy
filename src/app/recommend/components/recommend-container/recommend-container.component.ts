import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/Operators';
import { HomeService } from 'src/app/home/services';
import { Ad, Product } from 'src/app/share/domain';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.ad$ = this.service.getAdsByTab('men').pipe(
      filter(ads=> ads.length >0),
      map (ads => ads[0])
    )
    this.products$ = this.service.getProductsByTab('men')
  }
}
