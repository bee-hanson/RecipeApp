import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MyRecipesService } from '../my-recipes.service';
import { MatDialog } from '@angular/material';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-recipes-list',
  templateUrl: './my-recipes-list.component.html',
  styleUrls: ['./my-recipes-list.component.scss']
})
export class MyRecipesListComponent implements OnInit {

  recipes$: Observable<Recipe[]>;
  selectedRecipe: Recipe;
  newRecipe: Recipe;

  constructor(private service: MyRecipesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.recipes$ = this.service.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRecipeComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newRecipe = result;
    });
  }

}
