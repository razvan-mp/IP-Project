import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { MovieModel } from 'src/models/movie-model';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage: string|undefined;

  private _loginUrl = "http://localhost:8081/api/login"
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
      localStorage.setItem("accessToken", response.data.access_token);
      this.token = response.data.access_token;
      returnValue =  true;
    })
    .catch( (error) => {
      this.errorMessage = error;
    })
    .then(function () {
    }));
    
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
