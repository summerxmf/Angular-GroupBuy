import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';

const routes: Routes = [
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingRoutes {};
