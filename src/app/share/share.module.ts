import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './components/scrollable-tab/scrollable-tab.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemImageDirective } from './derectives/grid-item-image.directive';
import { GridItemDirective } from './derectives/grid-item.directive';
import { GridItemTitleDirective } from './derectives/grid-item-title.directive';
import { FooterComponent } from './components/footer/footer.component';
import { CountDownComponent } from './components/count-down/count-down.component';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    GridItemDirective,
    GridItemTitleDirective,
    GridItemImageDirective,
    FooterComponent    
  ]
})
export class ShareModule { }
