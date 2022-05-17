import { Component, OnInit } from '@angular/core';
import axios, {AxiosRequestConfig} from "axios";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../login-page.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  accessToken: string;
  refreshToken: string; 
  errorMessage: string;
  endpoint: "http://localhost:8081/api/login";
  ngOnInit(): void {
  }

  onSubmit(){
    
    const newLoginComponent = {
      username: this.username,
      password: this.password
    }

    this.errorMessage="";
    this.sendData();    
  
  }

  private sendData() {

    axios.get("http://localhost:8081/api/login", {
      params: {
        username: this.username,
        password: this.password
      }
    })
    .then( (response) => {
      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      this.errorMessage = "";
    })
    .catch( (error) => {
      this.errorMessage=error;
    })
    .then(function () {
      // always executed
    });  
  }
}