import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeAuxComponent } from './components/home-aux/home-aux.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
// import { HomeGrandComponent } from './components/home-grand/home-grand.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        // children: [
        //   {
        //     path:'grand',
        //     component: HomeGrandComponent
        //   },
        //   {
        //     path:'aux',
        //     component: HomeAuxComponent,
        //     outlet: 'second'
        //   }
          
        // ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
