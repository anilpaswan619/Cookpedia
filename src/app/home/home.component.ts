import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loadedFeature = 'recipes';

  onNavigate(featureSelected:string){
     this.loadedFeature = featureSelected;
  }
}
