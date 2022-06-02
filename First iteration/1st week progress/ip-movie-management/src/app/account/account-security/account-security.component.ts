import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';
import { userSendData } from 'src/app/model/userSendData';

@Component({
  selector: 'app-account-security',
  templateUrl: './account-security.component.html',
  styleUrls: ['./account-security.component.css','../account.component.scss']
})
export class AccountSecurityComponent implements OnInit {
  errorMessage: boolean|undefined;

  constructor(private router: Router, public _auth: AuthService) { }

  ngOnInit(): void {
  }

  async update() {
    let user = new userSendData();
    user.name = this._auth.user.name;
    user.email = this._auth.user.email;
    user.username = this._auth.user.username;

    user.password = this._auth.user.password;
    let passwordTextOld = document.getElementById("passwordInputOld")?.textContent;
    let passwordText = document.getElementById("passwordInput")?.textContent;
    if(passwordTextOld != null && passwordText != null) {
      if(passwordTextOld.localeCompare("Old Password") != 0
      && passwordText.localeCompare("New Password") != 0) {
        let passwordTextCurrent = this._auth.user.password;
        if(passwordTextCurrent == null) {
          passwordTextCurrent = "none";
        }
        if(passwordTextOld.localeCompare(passwordTextCurrent) == 0) {
          user.username = passwordText;
        }
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
