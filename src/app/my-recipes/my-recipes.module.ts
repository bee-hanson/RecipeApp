import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyRecipesListComponent } from './my-recipes-list/my-recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MatGridListModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { MyRecipeDetailComponent } from './my-recipe-detail/my-recipe-detail.component';
import { MyRecipesRoutingModule } from './my-recipes-routing.module';

@NgModule({
  declarations: [MyRecipesListComponent, AddRecipeComponent, RecipeCardComponent, MyRecipeDetailComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule,
    MyRecipesRoutingModule
  ], 
  entryComponents: [
    AddRecipeComponent
  ],
  exports: [
    MyRecipesListComponent
  ]
})
export class MyRecipesModule { }
