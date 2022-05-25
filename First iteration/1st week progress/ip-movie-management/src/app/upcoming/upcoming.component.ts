import { Component } from '@angular/core';
import {MovieModel} from "../../models/movie-model";
import axios from "axios";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent {
  upcomingMovieList: MovieModel[] = [];

  getUpcomingEndpoint = "http://127.0.0.1:8000/api/get_upcoming/"

  constructor() {
    this.getUpcoming()
  }

  private getUpcoming() {
    axios.get(this.getUpcomingEndpoint).then(response => {
        this.upcomingMovieList = response.data
      }
    ).catch()
  }


}
