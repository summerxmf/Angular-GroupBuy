import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { AppRoutingRoutes } from './app-routing.module';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { RecommendModule } from './recommend/recommend.module';
import { ChatModule } from './chat/chat.module';
import { MyModule } from './my/my.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [			
    AppComponent,    
   ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    HttpClientModule,
    ShareModule,
    HomeModule,
    RecommendModule,
    CategoryModule,
    ChatModule,
    MyModule,
    ProductModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){}
 }
