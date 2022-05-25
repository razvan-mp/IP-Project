import {MovieModel} from "../../models/movie-model";
import {Component, OnInit, ViewChild} from '@angular/core';
import {IgxCarouselComponent} from 'igniteui-angular';
import axios from "axios";

@Component({
  selector: 'app-carousel',
  styleUrls: ['./top10.component.scss'],
  templateUrl: './top10.component.html'
})

export class Top10Component implements OnInit {
  @ViewChild('carousel', {static: true}) public carousel: IgxCarouselComponent | undefined;

  getTop10Endpoint = "http://127.0.0.1:5000/movies/1"
  getMovieByIdEndpoint = "http://127.0.0.1:8000/api/get_movie_by_id"

  private _movieIds: number[] = [];
  public slides: MovieModel[] = [];
  public animations = ['slide', 'fade', 'none'];

  public ngOnInit() {
    this.addSlides();
  }

  public addSlides() {
    axios.get(this.getTop10Endpoint).then(response => {
        this._movieIds = response.data;
        console.log(this._movieIds)
        this.populateSlides();
      }
    ).catch()

  }

  private populateSlides() {
    for (let index = 0; index < 10; index++) {
      let httpReq = this.getMovieByIdEndpoint + "/" + this._movieIds[index]
      console.log(httpReq)
      axios.get(httpReq).then(response => {
        this.slides.push(response.data)
      }).catch()
    }
    console.log(this.slides)
  }

  get movieIds(): number[] {
    return this._movieIds;
  }
}
