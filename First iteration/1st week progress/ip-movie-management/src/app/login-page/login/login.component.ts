import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentification/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../login-page.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  accessToken: string|undefined;
  refreshToken: string|undefined; 
  errorMessage: string|undefined;
  status: boolean|undefined;

  ngOnInit(): void {
  }

  constructor(private router: Router, public _auth: AuthService) {
    this.username = "";
    this.password = "";
  }

  async onSubmit(){
    localStorage.setItem("username",this.username);
    this._auth.setUsername(this.username);
    this._auth.setPassword(this.password);
    this.status = true;

    if(await(this._auth.loginUser()) == true) {
      await(this._auth.getUserData());
      this.router.navigate(['/home']);
    }
  }
}