import { Component } from '@angular/core';
import {MovieModel} from "../../models/movie-model";

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent {
  upcomingMovieList: MovieModel[] = [];

  constructor() {

  }

}
