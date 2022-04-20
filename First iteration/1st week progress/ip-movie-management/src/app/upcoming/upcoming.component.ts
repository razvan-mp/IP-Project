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
    let movie1 = new MovieModel(1, "The Batman", 0, "https://ychef.files.bbci.co.uk/976x549/p0brnp0b.jpg", false);
    let movie2 = new MovieModel(2, "Inception", 0, "https://hbomax-images.warnermediacdn.com/images/GYDbfcQGssU-dEAEAAAAI/tileburnedin?size=1280x720&partner=hbomaxcom&v=ef0fcab17a9eaa6196b1dd20a93284c6&language=ro-ro&host=art-gallery.api.hbo.com&w=Infinity", false);
    let movie3 = new MovieModel(3, "Vikings", 0, "https://variety.com/wp-content/uploads/2014/02/vikings-tv-review.jpg?w=681&h=383&crop=1", false);
    let movie4 = new MovieModel(4, "The Queen's Gambit", 0, "https://www.andreearaicu.ro/wp-content/uploads/2021/01/the-queens-gambit-feature.jpg", false);
    let movie5 = new MovieModel(5, "Shrek Forever After", 0, "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWeRaV8fK4jTdQ8VUKFmTozbYGTxDowza_sv_vlN7xvuljC7XUlOjMuWeSovPx4JtoCSou7CvaraxJEQe78sSrZoyqIP.jpg?r=26a", false);
    let movie6 = new MovieModel(6, "Hotel Transylvania", 0, "https://m.media-amazon.com/images/M/MV5BNDRkYjgyOTMtZjgyMy00ZGRmLWJhZTktZGU0NTVlNzQ4YmEyXkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg", false);

    movie1.setComingSoonDate("This Thursday");
    movie2.setComingSoonDate("This Sunday");
    movie3.setComingSoonDate("29.04.2022");
    movie4.setComingSoonDate("03.05.2022");
    movie5.setComingSoonDate("16.05.2022");
    movie6.setComingSoonDate("29.06.2022");

    this.upcomingMovieList.push(movie1, movie2, movie3, movie4, movie5, movie6);
  }

}
