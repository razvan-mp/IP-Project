import { Component, OnInit } from '@angular/core';
import axios, {AxiosRequestConfig} from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../login-page.component.scss']
})
export class RegisterComponent implements OnInit {
  id: string|undefined;
  name: string|undefined;
  username: string|undefined;
  password: string|undefined;
  email: string|undefined;
  repeatPassword: string|undefined;
  errorMessage: string|undefined;
  accessToken: string|undefined;
  refreshToken: string|undefined;
  response: string|undefined;
  list: []|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  
    this.errorMessage="";

    this.sendData();    
    console.log(this.response);
  }

  private sendData() {
    this.response = "";
    if(this.password == this.repeatPassword)
    {
      const user = {
        name: null,
        username: this.username,
        email: this.email,
        password: this.password
      }

      const json = JSON.stringify(user);
      console.log(json);
      axios.post("http://localhost:8081/api/registration", json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
      .then( (response) => {
        this.response = response.data.token;
        console.log(response);
      })
      .catch( (error) => {
        //this.errorMessage=error;
      })
      .then(function () {
        // always executed
      });
    }
    else
      this.errorMessage = "true";
  }
}
