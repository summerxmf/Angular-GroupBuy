import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { ShareModule } from '../share/share.module';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';




@NgModule({
  declarations: [
    RecommendContainerComponent
  ],
  imports: [
    ShareModule,
    RecommendRoutingModule
  ],
  exports: [
    RecommendContainerComponent
  ]
})
export class RecommendModule { }
