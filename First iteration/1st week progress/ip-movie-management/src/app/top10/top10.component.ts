import { Component, OnInit } from '@angular/core';
import {MovieModel} from "../../models/movie-model";


@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements OnInit {
  ngOnInit(): void {}
  upcomingMovieList: MovieModel[] = [];

    constructor() {

    }

}
