import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-feed',
  templateUrl: './recipe-feed.component.html',
  styleUrls: ['./recipe-feed.component.scss']
})
export class RecipeFeedComponent implements OnInit {

  recipes: Recipe[];

  constructor(private service: FeedService) { }

  ngOnInit() {

  }

  getFeed(): void {
    this.service.search('chicken')
      .subscribe(recipes => this.recipes = recipes);
  }

}
