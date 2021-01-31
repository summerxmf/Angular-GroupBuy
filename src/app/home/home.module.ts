import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeService, token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeAuxComponent,
    HomeGrandComponent
  ],
  providers: [
    HomeService,
    {provide: token, useValue: 'http://localhost.dev'}
  ],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  exports: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeAuxComponent,
    // HomeGrandComponent
  ],
  
})
export class HomeModule { }
