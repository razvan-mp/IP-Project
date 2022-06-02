import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async update() {
    let user = new userSendData();
    user.name = this._auth.user.name;
    user.password = this._auth.user.password;

    user.email = this._auth.user.email;
    let emailText = document.getElementById("emailInput")?.textContent;
    if(emailText != null) {
      if(emailText.localeCompare("Your email") != 0) {
        user.email = emailText;
      }
    }

    user.username = this._auth.user.username;
    let usernameText = document.getElementById("usernameInput")?.textContent;
    if(usernameText != null) {
      if(usernameText.localeCompare("Your username") != 0) {
        user.username = usernameText;
      }
    }
    this.errorMessage = await(this._auth.updateUser(user));
  }
}
