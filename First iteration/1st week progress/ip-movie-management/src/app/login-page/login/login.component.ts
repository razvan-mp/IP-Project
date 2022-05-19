import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios, {AxiosRequestConfig} from "axios";
import { AuthService } from 'src/app/authentification/auth.service';
import { MovieModel } from 'src/models/movie-model';


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
    console.log(this.username);
    this._auth.setUsername(this.username);
    this._auth.setPassword(this.password);
    this.status = await(this._auth.loginUser());

    console.log(this.status);
    if(this.status == true) {
      this.router.navigate(['/home']);
    }
  }
}