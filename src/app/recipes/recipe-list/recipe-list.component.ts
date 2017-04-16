import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Apple Strudel',
               'This is simple a test',
               'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Baking-Dish-Salad-Healthy-Eating-Recipe-832811.jpg'
              ),
    new Recipe('A Test Recipe',
      'This is the recipe description',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Baking-Dish-Salad-Healthy-Eating-Recipe-832811.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
