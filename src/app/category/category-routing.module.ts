import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryContainerComponent } from './components/category-container/category-container.component';

const routes: Routes = [
  { 
    path: 'category',
    component: CategoryContainerComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule {}
