import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredients : Ingredient[] = [
      new Ingredient('Soup','Spices', 2, 200),
      new Ingredient('Noodles','Vegetables', 5, 400),
    ];

    constructor(){

    }
    ngOnInit() {
      
    }
    onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);

    }
}
