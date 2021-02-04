import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject, combineLatest, merge } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog/services/dialog.service';
import { ProductVariant } from '../../domain';
import { Payment } from '../payment/payment.component';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {
  item$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];
  unitPrice$: Observable<number>;
  amount$: Observable<number>;
  mergedCount$: Observable<number>;

  unitPrice: number;
  amount: number;
  totalPrice: number;
  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.payments = this.payments = [
      {
        id: 1,
        name: 'Paypal',
        icon: 'assets/icons/wechat_pay.png',
        
      },
      {
        id: 2,
        name: 'AfterPay',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: 'Credit Card',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.dialogService.getDate().pipe(
      tap((val: { variant: ProductVariant; count: number }) => {
        this.unitPrice = val.variant.price;
        this.amount = val.count;
        this.totalPrice = this.unitPrice * this.amount;
        console.log(val);
      }),
      share()
    );
  }

  handleAmountChange(count: number) {
    this.count$.next(count);
    this.totalPrice = this.unitPrice * count;
  }

  handlePay() {}
}
