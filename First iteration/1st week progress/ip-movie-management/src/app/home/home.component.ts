import { Component } from '@angular/core';
import {MovieModel} from "../../models/movie-model";
import axios, {AxiosRequestConfig} from "axios";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{
  config: AxiosRequestConfig

  movieList: MovieModel[] = [];
  getMoviesEndpoint = "http://127.0.0.1:8000/api/get_movies/";

  constructor() {
    this.config = {
      headers: {
        authorization: ""
      }
    }
    this.getAllMovies()
    console.log(this.movieList)
  }

  private getAllMovies() {
    axios.get(this.getMoviesEndpoint).then(response => {
        this.movieList = response.data
      }
    ).catch()
  }

  random() {
    return Math.floor(Math.random() * 10)
  }
}
