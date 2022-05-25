import { Component, OnInit } from '@angular/core';
import {MovieModel} from "./../../../src/models/movie-model";
import axios, {AxiosRequestConfig} from "axios";

//./../ip-movie-management/src/models/movie-model

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  movieList: MovieModel[] = []
  config: AxiosRequestConfig

  getHistoryEndpoint = "http://127.0.0.1:8000/api/get_history/"

  constructor() {
    this.config = {
      headers: {
        authorization: ""
      }
    }
    this.getHistory()
  }

  ngOnInit(): void {
    console.log()
  }

  private getHistory() {
    axios.get(this.getHistoryEndpoint).then(response => {
        this.movieList = response.data
      }
    ).catch()
  }
}
