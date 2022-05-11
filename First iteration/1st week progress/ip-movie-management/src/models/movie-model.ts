export class MovieModel {
  id: number | undefined;
  name: string | undefined;
  recommandation_percent: number | undefined;
  image_url: string | undefined;
  movieAdded: boolean | undefined;
  movieReadMore : boolean | undefined;
  movieLink : string | undefined;
  movieDescription : string | undefined;


  constructor(id: number | undefined, name: string | undefined, recommendationPercent: number | undefined, movieImage: string | undefined, movieAdded: boolean | undefined, movieLink: string | undefined, movieDescription : string | undefined) {
    this.id = id;
    this.name = name;
    this.recommandation_percent = recommendationPercent;
    this.image_url = movieImage;
    this.movieAdded = movieAdded;
    this.movieLink = movieLink;
    this.movieDescription = movieDescription;
  }

    added(movie: MovieModel) {
    movie.movieAdded = !movie.movieAdded;
    return movie.movieAdded;
  }

  readMore() {
    this.movieReadMore = !this.movieReadMore;
    window.open(this.movieLink, "_blank");

    return this.movieReadMore;
  }

}
