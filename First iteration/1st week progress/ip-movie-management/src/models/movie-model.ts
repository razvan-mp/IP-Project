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
    movie.movieAdded = true;
    console.log(movie)
  }

  readMore() {
    this.movieReadMore = !this.movieReadMore;
    window.open(this.movieLink, "_blank");
    return this.movieReadMore;
  }
}
