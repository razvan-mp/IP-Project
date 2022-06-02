import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';
import { userSendData } from 'src/app/model/userSendData';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css','../account.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  errorMessage: boolean|undefined;

  ngOnInit() : void {
  }

  constructor(private router: Router, public _auth: AuthService) {
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
      if(this.errorMessage == false) {
        this._auth.user.email = user.email;
        this._auth.user.name = user.name;
        this._auth.user.username = user.username;
        this._auth.user.password = user.password;
      } 
  }

}
