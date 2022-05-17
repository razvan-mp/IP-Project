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
    let movie1 = new MovieModel(1, "Avengers 4", 86, "https://noonecares.me/wp-content/uploads/2018/12/1-10.jpg", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.");
    let movie2 = new MovieModel(2, "The Electrical Life of Louis Wain", 79, "https://hubmarketlive.blob.core.windows.net/media/65263009-30ca-401f-b0aa-e704895e848c.jpg", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.");
    let movie3 = new MovieModel(3, "The secrets of Dumbledore", 66, "https://media.bluecinema.ch/filer_public_thumbnails/cinepool/assets/movies/1013.400/artworks/5bb45620ce62809b14066e85566e9bec919ab7ac/5e60b9b98b559f135f7ea90ebfea9305/lrg.png__650x935_q70.jpg", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.");
    let movie4 = new MovieModel(3, "Joker", 66, "https://i.pinimg.com/736x/fe/e7/ea/fee7eab62f787cf7bbd3aa3cce3ac833.jpg", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.");

    this.upcomingMovieList.push(movie1, movie2, movie3, movie4);
  }

}
