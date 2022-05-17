import {MovieModel} from "../../models/movie-model";
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCarouselComponent } from 'igniteui-angular';
import axios from "axios";

@Component({
  selector: 'app-carousel',
  styleUrls: ['./top10.component.scss'],
  templateUrl: './top10.component.html'
})

export class Top10Component implements OnInit {
  @ViewChild('carousel', { static: true }) public carousel: IgxCarouselComponent | undefined;

  getTop10Endpoint = "http://127.0.0.1:8000/api/get_top10/"

  public slides: MovieModel[] = [];
  public animations = ['slide', 'fade', 'none'];

  public ngOnInit() {
    this.addSlides();
  }

  public addSlides() {
    axios.get(this.getTop10Endpoint).then(response => {
        this.slides = response.data
      }
    ).catch()

    console.log(this.slides)
  }
}
