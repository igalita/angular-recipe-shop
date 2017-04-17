import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'New Orleans Jambalaya',
      'Its comfort food with some kick (how much kick is up to you) and its sure to become a ' +
      'favorite.  So come get your Creole on and laissez les bons temps rouler!',
      'http://www.daringgourmet.com/wp-content/uploads/2014/02/Classic-Jambalaya-2.jpg',
      [
        new Ingredient('Tender chicken', 4),
        new Ingredient('Shrimp', 5),
        new Ingredient('Andouille Sausage', 4),
        new Ingredient('Rice', 10)
      ]
    ),
    new Recipe(
      'Traditional German Schnitzel',
      'Schnitzel is traditionally served with Spatzle and gravy, Pommes (fries), ' +
      'or Schwäbischer Kartoffelsalat (German vinegar-based potato salad – it’s the best!). ' +
      'Additionally, it’s usually served with a leafy green salad.',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
