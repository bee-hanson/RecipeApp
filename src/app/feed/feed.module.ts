import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFeedComponent } from './recipe-feed/recipe-feed.component';
import { MatGridListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RecipeFeedComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    HttpClientModule
  ], 
  exports: [
    RecipeFeedComponent
  ]
})
export class FeedModule { }
