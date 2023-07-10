import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [ 
    new Recipe('Veggy Soup', 'By Jeniffer Lay', '/assets/images/salad.jpg '), 
    new Recipe('Juicy Noodles', 'By Smith John', '/assets/images/noodles.jpg'),
    new Recipe('Creamy Pancake', 'By Luise De', '/assets/images/creamy.jpg'),
    new Recipe('Fried Beans', 'By Garry Don', '/assets/images/beans.jpg'),
    new Recipe('Cheesy Chips', 'By Charie Laos', '/assets/images/chips.jpg'),
    new Recipe('Coated Onion', 'By Anil P', '/assets/images/momos.jpg'),
   ];



  constructor(){
  }

  ngOnInit() {
  
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }
}
