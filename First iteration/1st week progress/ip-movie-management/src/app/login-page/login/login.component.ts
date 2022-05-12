import { Component, OnInit } from '@angular/core';
import axios, {AxiosRequestConfig} from "axios";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../login-page.component.scss']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;
  endpoint: "http://localhost:8081/api/login" | undefined;
  ngOnInit(): void {
  }

  onSubmit(){

    const newLoginComponent = {
      username: this.username,
      password: this.password
    }
    console.log(this.username);
    console.log(this.password);
    this.sendData();
  }

  private sendData() {

    axios.get("http://localhost:8081/api/login", {
      params: {
        username: this.username,
        password: this.password
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
}
