import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { MovieModel } from 'src/models/movie-model';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { userSendData } from '../model/userSendData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage: string|undefined;

  private _loginUrl = "http://localhost:8081/api/login"
  private _userGet = "http://localhost:8081/api/user/get"
  public user : User;
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

  async getUserData() {
    this.errorMessage = "";

    let returnValue: boolean;
    returnValue = false;

    let aToken = localStorage.getItem("accessToken");
    if(aToken == null) {
      aToken = "";
    }

    await(axios.get(this._userGet, {
      headers: {
        "Bearer": aToken,
      },
      params: {
        username: this.user.username
      }
    })
    .then( (response) => {
      this.token = response.data.access_token;
      this.user.email = response.data.email;
      this.user.id = response.data.id;
      this.user.name = response.data.name;
      this.user.admin = false;
      response.data.authorities.forEach((element: string) => {
        if(element.localeCompare("ROLE_ADMIN") == 0) {
          this.user.admin = true;
        }
      });
    })
    .catch( (error) => {
      this.errorMessage = error;
    })
    .then(function () {
    }));
  }

  async updateUser(userData: userSendData) {
    let response = "";
    let errorMessage = false;
    let aToken = localStorage.getItem("accessToken");
    if(aToken == null) {
      aToken = "";
    }

    const json = JSON.stringify(userData);
    axios.post("http://localhost:8081/api/registration", json, {
      headers: {
        'Bearer': aToken,
        'Content-Type': 'application/json'
      }
    })
    .then( (response) => {
      let responseStr = response.data;
      if(responseStr?.indexOf("succes")!=-1) {
        location.reload();
      }
      else {
        errorMessage = true;
      }
    })
    .catch( (error) => {
      errorMessage = true;
    })
    .then(function () {
      // always executed
    });
    return errorMessage;
  }
}
