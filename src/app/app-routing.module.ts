import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyRecipesListComponent } from '../app/my-recipes/my-recipes-list/my-recipes-list.component';
import { RecipeFeedComponent } from '../app/feed/recipe-feed/recipe-feed.component';
import { MyRecipeDetailComponent } from './my-recipes/my-recipe-detail/my-recipe-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecipeFeedComponent },
  { path: 'feed', component: RecipeFeedComponent },
  //{ path: 'myrecipes', loadChildren: './my-recipes/my-recipes.module#MyRecipesModule'},
  { path: 'myrecipes', component: MyRecipesListComponent },
  { path: 'detail/:id', component: MyRecipeDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
