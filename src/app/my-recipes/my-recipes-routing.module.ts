import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipesListComponent } from './my-recipes-list/my-recipes-list.component';


const routes: Routes = [
  {
    path: '',
    component: MyRecipesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipesRoutingModule { }