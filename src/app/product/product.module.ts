import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductVariantDialogComponent } from './components/product-variant-dialog/product-variant-dialog.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductAmountComponent } from './components/product-amount/product-amount.component';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOrderComponent,
    PaymentComponent
  ],
  imports: [
    ShareModule,
    ProductRoutingModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
