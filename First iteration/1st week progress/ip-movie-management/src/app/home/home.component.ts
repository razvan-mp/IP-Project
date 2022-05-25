import {Component} from '@angular/core';
import {MovieModel} from "../../models/movie-model";
import axios, {AxiosRequestConfig} from "axios";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  config: AxiosRequestConfig


  newMovieRoute = "http://127.0.0.1:5000/movies/new"
  movieList: MovieModel[] = []
  getMoviesEndpoint = "http://127.0.0.1:8000/api/get_movies/"
  movieModalOn: boolean = false
  movieInModals: MovieModel[] = []

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

  added(movie: MovieModel) {
    console.log(movie)

    console.log(window.performance.now() / 0.001)

    console.log(movie)

    let movieInfo = '{"user_id":' + 5 + ',' +
      '"movie_id":' + movie.id + ',' +
      '"timestamp":' + window.performance.now() / 0.001 + '}'

    console.log(movieInfo)

    axios.post(this.newMovieRoute, JSON.parse(movieInfo)).then(
      response => {
        console.log(response.data.status)
      }
    )
  }

  showMovieDetails(movie: MovieModel) {
    console.log(movie)
  }

  openModal(movie: MovieModel) {
    this.movieModalOn = true
    this.movieInModals = []
    this.movieInModals.push(movie)
  }

  closeModal() {
    this.movieModalOn = false
  }

  getProductionCompanies(movie: MovieModel) {
    let productionCompanyMiddle = JSON.parse(<string>movie.production_company)
    let productionCompany = ''
    for (let index = 0; index < productionCompanyMiddle.length - 1; index++) {
      productionCompany += productionCompanyMiddle[index]['name']
      productionCompany += ', '
    }

    productionCompany += productionCompanyMiddle[productionCompanyMiddle.length - 1]['name']

    return productionCompany
  }
}
