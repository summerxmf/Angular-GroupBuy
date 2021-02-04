import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MyService } from '../../services';
import { Observable } from 'rxjs';
import { Profile } from '../../domain';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyContainerComponent implements OnInit {
  profile$: Observable<Profile>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MyService
  ) {}
  orderItems = [
    {
      title: 'Pay',
      icon: '/assets/icons/to_pay.png'
    },
    {
      title: 'Share',
      icon: '/assets/icons/to_share.png'
    },
    {
      title: 'Waiting',
      icon: '/assets/icons/to_ship.png'
    },
    {
      title: 'Delivery',
      icon: '/assets/icons/to_deliver.png'
    },
    {
      title: 'Comments',
      icon: '/assets/icons/to_review.png'
    }
  ];
  toolsItems = [
    {
      title: 'Vouches',
      icon: '/assets/icons/coupon.png'
    },
    {
      title: 'Collections',
      icon: '/assets/icons/fav_product.png'
    },
    {
      title: 'Stores',
      icon: '/assets/icons/fav_store.png'
    },
    {
      title: 'Histroy',
      icon: '/assets/icons/history.png'
    },
    {
      title: 'Return',
      icon: '/assets/icons/refund.png'
    }
  ];

  ngOnInit() {
    this.profile$ = this.service.getProfile();
  }

  showProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }
}
