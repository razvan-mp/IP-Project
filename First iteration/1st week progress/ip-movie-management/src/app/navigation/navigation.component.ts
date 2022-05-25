import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  burgerClicked: boolean = false

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
    console.log()
  }

  clickBurger(e: any) {
    this.burgerClicked = !this.burgerClicked
    const $target: any = document.getElementById("main-navigation")
    if (this.burgerClicked) {
      $target.classList.add('is-active')
      $target.classList.add('resize-nav')
      e.target.classList.add('is-active')
      console.log('added is-active class')
    } else {
      $target.classList.remove('is-active')
      $target.classList.remove('resize-nav')
      e.target.classList.remove('is-active')
      console.log('removed is-active class')
    }
  }

  logout() {
    this._auth.logout();
  }
}
