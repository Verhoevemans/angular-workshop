import { Ingredient } from '../models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class IngredientsService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('potatoes', 3),
    new Ingredient('eggs', 13)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index): Ingredient {
    return this.ingredients.slice(index, index + 1)[0];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  updateIngredient(index, ingredient) {
    if (ingredient) {
      this.ingredients.splice(index, 1, ingredient);
    } else {
      this.ingredients.splice(index, 1);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
