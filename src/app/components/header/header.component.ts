import { Component } from '@angular/core';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss']
})
export class HeaderComponent {

  public menuActive = false;

  constructor() {
  }

  public toggleMobileMenu() {
    this.menuActive = !this.menuActive;
  }
}
