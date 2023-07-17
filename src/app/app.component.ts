import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  isContainerRoute(): boolean {
    const currentRoute = this.router.routerState.snapshot.url;
    return currentRoute.startsWith('/recipe')|| currentRoute.startsWith('/shopping-list');
  }
}
