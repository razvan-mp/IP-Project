import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  addMovieEndpoint = "http://127.0.0.1:8000/api/add_movie/"

  constructor() { }

  ngOnInit(): void {
  }

  submitMovieForm(event: Event, movieForm: HTMLFormElement) {
    event.preventDefault()
    let formData = new FormData(movieForm)
    let movieObject = Object.fromEntries(formData as any) as any
    axios.post(this.addMovieEndpoint, movieObject).then(
      response => {
        console.log(response.data.status)
      }
    )
  }
}
