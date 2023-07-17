import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent { 

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('ingredientInput') ingredientInputRef!: ElementRef;
  @ViewChild('quantityInput') quantityInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const newIng = this.ingredientInputRef.nativeElement.value;
    const newQuantity = this.quantityInputRef.nativeElement.value;
    const newName = this.nameInputRef.nativeElement.value;
    const newAmount = this.amountInputRef.nativeElement.value;

    const newItem = new Ingredient(newName, newIng, newQuantity, newAmount );
    this.ingredientAdded.emit(newItem);

    if (!this.validateInputs()) {
      return;
    }
  }
  private validateInputs(): boolean {
    const nameInput = this.nameInputRef.nativeElement;
    const ingredientInput = this.ingredientInputRef.nativeElement;
    const quantityInput = this.quantityInputRef.nativeElement;
    const amountInput = this.amountInputRef.nativeElement;

    const isValid = nameInput.value && ingredientInput.value && quantityInput.value && amountInput.value;
    
    if (!isValid) {
      nameInput.classList.add('is-invalid');
      ingredientInput.classList.add('is-invalid');
      quantityInput.classList.add('is-invalid');
      amountInput.classList.add('is-invalid');
    } else {
      nameInput.classList.remove('is-invalid');
      ingredientInput.classList.remove('is-invalid');
      quantityInput.classList.remove('is-invalid');
      amountInput.classList.remove('is-invalid');
    }
    
    return isValid;
  }
}
