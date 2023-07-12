import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.scss']
})

export class HeaderComponent {

    collapsed = true;
    isNavButtonClicked: boolean = false;

  @Output() featureSelector = new EventEmitter<string>();

  

    onSelect(featureSelected : string){
        this.featureSelector.emit(featureSelected);
    }

    toggleNavButton() {
        this.isNavButtonClicked = !this.isNavButtonClicked;
      }
}