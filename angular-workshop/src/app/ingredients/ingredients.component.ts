import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: IngredientsService) {
  }

  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();
    this.ingredientsService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
