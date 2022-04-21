export class MovieModel {
  id: number | undefined;
  name: string | undefined;
  recommendationPercent: number | undefined;
  movieImage: string | undefined;
  movieAdded: boolean | undefined;
  movieReadMore : boolean | undefined;
  movieLink : string | undefined;


  constructor(id: number | undefined, name: string | undefined, recommendationPercent: number | undefined, movieImage: string | undefined, movieAdded: boolean | undefined, movieLink: string | undefined) {
    this.id = id;
    this.name = name;
    this.recommendationPercent = recommendationPercent;
    this.movieImage = movieImage;
    this.movieAdded = movieAdded;
    this.movieLink = movieLink;
  }

  added() {
    this.movieAdded = !this.movieAdded;
    return this.movieAdded;
  }

  readMore() {
    this.movieReadMore = !this.movieReadMore;
    window.open(this.movieLink, "_blank");

    return this.movieReadMore;
  }

}
