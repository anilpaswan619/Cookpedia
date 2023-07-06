import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('Steamy Momos', 'Wanna try the new fresh momos recipe', '/assets/images/momos.jpg'), 
  new Recipe('FreshNoodles', 'Wanna try the new fresh noodles recipe', '/assets/images/noodles.jpg') ];



  constructor(){

   

  }


  ngOnInit() {
  
  }
}
