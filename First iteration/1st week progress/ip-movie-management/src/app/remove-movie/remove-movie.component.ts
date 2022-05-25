import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.scss']
})
export class RemoveMovieComponent implements OnInit {

  removeMovieEndpoint = "http://127.0.0.1:8000/api/delete_movie/"

  ngOnInit(): void {
    console.log()
  }

  deleteMovie(event: SubmitEvent, movieForm: HTMLFormElement) {
    event.preventDefault()
    let formData = new FormData(movieForm)
    let movieObject = Object.fromEntries(formData as any) as any
    let body = {
      data: {
        name: movieObject["name"]
      }
    }
    axios.delete(this.removeMovieEndpoint, body).then(
      response => {
        console.log(response.data.status)
      }
    )
  }
}
