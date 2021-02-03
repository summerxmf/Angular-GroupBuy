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
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TagDirective } from './derectives/tag.directive';
import { AvatarDirective } from './derectives/avatar.directive';
import { ProductTileComponent } from './components/product-tile/product-tile.component';


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
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    TagDirective,
    AvatarDirective
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
    VerticalGridComponent,
    FooterComponent,
    ProductCardComponent,
    ProductTileComponent,
    TagDirective,
    AvatarDirective
  ]
})
export class ShareModule { }
