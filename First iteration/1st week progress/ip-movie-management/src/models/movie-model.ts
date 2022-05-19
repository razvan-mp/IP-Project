import { Router } from "@angular/router";
import { AuthService } from "src/app/authentification/auth.service";

export class MovieModel {
  id: number;
  name: string | undefined;
  release_date: string | undefined;
  director: string | undefined;
  imdb_rating: number;
  run_time: number | undefined;
  production_company: string | undefined;
  language: string | undefined;
  image_url: string | undefined;
  overview: string | undefined;
  movieLink: string | undefined;
  movieAdded: boolean | undefined;
  movieReadMore: boolean | undefined;

  static _auth: AuthService;
  static router: Router;
  
  constructor(movie_id: number, name: string | undefined, release_date: string | undefined, director: string | undefined, imdb_rating: number, run_time: number | undefined, production_company: string | undefined, language: string | undefined, image_url: string | undefined, overview: string | undefined) {
    this.id = movie_id;
    this.name = name;
    this.release_date = release_date;
    this.director = director;
    this.imdb_rating = imdb_rating;
    this.run_time = run_time;
    this.production_company = production_company;
    this.language = language;
    this.image_url = image_url;
    this.overview = overview;
    this.movieLink = "";
    this.movieAdded = false;
    this.movieReadMore = false;
  }

  added(movie: MovieModel) {
    if(MovieModel._auth.token) {
      movie.movieAdded = true;
    }
    else {
      MovieModel.router.navigate(['/login-page/login']);
    }
  }

  readMore() {
    this.movieReadMore = !this.movieReadMore;
    window.open(this.movieLink, "_blank");
    return this.movieReadMore;
  }

  
  public static setAuth(auth: AuthService){
    MovieModel._auth = auth;
  }

  public static setRouter(router: Router){
    MovieModel.router = router;
  }
}
