import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanges = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 5)
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.sumDuplicateIngredients();
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.sumDuplicateIngredients();
    this.ingredientsChanges.emit(this.ingredients.slice());
  }

  private sumDuplicateIngredients() {
    const newIngredients = [];
    this.ingredients.forEach(function (a) {
      if (!this[a.name]) {
        this[a.name] = { name: a.name, amount: a.amount };
        newIngredients.push(this[a.name]);
      } else {
        this[a.name].amount += a.amount;
      }
    }, Object.create(null));
    this.ingredients = newIngredients;
  }
}
