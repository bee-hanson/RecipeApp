import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MyRecipesService } from '../my-recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>, private service: MyRecipesService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.service.addRecipe();
    this.dialogRef.close();
  }
  
  onCancelClick(): void {
    this.dialogRef.close();
  }

}
