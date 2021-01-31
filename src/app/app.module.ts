import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { AppRoutingRoutes } from './app-routing.module';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [			
    AppComponent,    
   ],
  imports: [
    BrowserModule,
    AppRoutingRoutes,
    HttpClientModule,
    ShareModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){}
 }
