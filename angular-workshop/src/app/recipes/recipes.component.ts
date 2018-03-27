import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [
    {
      name: 'Pizza', ingredients: [
        new Ingredient('tomatoes', 2),
        new Ingredient('cheese', 9)
      ]
    }, {
      name: 'French Fries', ingredients: [
        new Ingredient('potatoes', 5),
        new Ingredient('salt')
      ]
    }
  ];

  constructor(private ingredientsService: IngredientsService, private router: Router) {}

  ngOnInit() {}

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      this.ingredientsService.addIngredient(ingredient);
    });
    this.router.navigate(['ingredients']);
  }
}
