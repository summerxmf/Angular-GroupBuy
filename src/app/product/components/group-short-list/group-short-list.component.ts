import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GroupOrder } from '../../domain';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupShortListComponent implements OnInit {
  @Input()
  groupOrders: GroupOrder[] = [];
  @Input() row = 2;
  constructor() { }

  ngOnInit() {
    // mock data
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'Smith',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'Molly',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2021, 2, 20, 10, 10, 10),
        remainingNumber: 1
      }
    ];
  }

}
