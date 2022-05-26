import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { MovieModel } from 'src/models/movie-model';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage: string|undefined;

  private _loginUrl = "http://localhost:8081/api/login"
  private _userGet = "http://localhost:8081/api/user/get"
  private user : User;
  public token : string|undefined;

  constructor(private router: Router) { 
    this.user = new User();
    MovieModel.setAuth(this);
    MovieModel.setRouter(router);
    // this.user.id = 0;
    // this.user.username = "";
    // this.user.password = "";
    // this.user.email = "";
  }

  async loginUser() {
    this.errorMessage = "";

    let returnValue: boolean;
    returnValue = false;

    await(axios.get(this._loginUrl, {
      params: {
        username: this.user.username,
        password: this.user.password
      }
    })
    .then( (response) => {
      this.token = response.data.access_token;
      const helper = new JwtHelperService();
      const decodeToken = helper.decodeToken(this.token);
      localStorage.setItem("accessToken", response.data.access_token);
      returnValue =  true;
      console.log(returnValue);
      console.log(returnValue);
    })
    .catch( (error) => {
      this.errorMessage = error;
    })
    .then(function () {
    }));
    console.log(returnValue);
    console.log(returnValue);
    return returnValue;
  }

  public logout() {
    localStorage.removeItem("accessToken");
    this.token = "";
  }

  setUsername(userUsername : string){
    this.user.username = userUsername;
  }

  setPassword(userPassword : string){
    this.user.password = userPassword;
  }
}
