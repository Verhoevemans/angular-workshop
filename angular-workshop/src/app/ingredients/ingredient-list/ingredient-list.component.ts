import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients: Ingredient[];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('my ingredients are: ', this.ingredients);
  }

  editIngredient(index) {
    this.router.navigate(['edit', index], {relativeTo: this.route})
  }
}
