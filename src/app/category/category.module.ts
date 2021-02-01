import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components/category-container/category-container.component';


@NgModule({
  declarations: [ CategoryContainerComponent],
  imports: [
    ShareModule,
    CategoryRoutingModule
  ],
  exports: [CategoryContainerComponent]
})
export class CategoryModule { }
