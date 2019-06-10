import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { MyRecipesService } from '../my-recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-recipe-detail',
  templateUrl: './my-recipe-detail.component.html',
  styleUrls: ['./my-recipe-detail.component.scss']
})
export class MyRecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private service: MyRecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscription = this.service.getRecipesChanged$.subscribe(data => this.onRecipesLoaded(data));
    this.service.getRecipesSubject();
  }

  ngOnDestroy() {
    if (this.recipeSubscription) {
      this.recipeSubscription.unsubscribe();
    }
  }

  onRecipesLoaded(data: Recipe[]): void {
    this.recipes = data;
    this.getRecipe();
  }

  getRecipe() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedRecipe = this.recipes.find(r => r.id === +id);
  }
}
