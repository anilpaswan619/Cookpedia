import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredients : Ingredient[] = [
      new Ingredient('Corn Floor', 2),
      new Ingredient('Noodles', 5),
    ];

    constructor(){

    }
    ngOnInit() {
      
    }
    onIngredientAdded(ingredient: Ingredient){
      this.ingredients.push(ingredient);

    }
}
