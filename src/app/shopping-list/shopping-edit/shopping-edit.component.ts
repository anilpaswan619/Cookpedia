import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent { 

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {

    const newIng = this.nameInputRef.nativeElement.value;
    const newAmount = this.amountInputRef.nativeElement.value;

    const newItem = new Ingredient(newIng, newAmount);
    this.ingredientAdded.emit(newItem);

  }

}
