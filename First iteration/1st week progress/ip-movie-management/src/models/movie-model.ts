export class MovieModel {
  id: number | undefined;
  name: string | undefined;
  recommendationPercent: number | undefined;
  movieImage: string | undefined;
  movieAdded: boolean | undefined;
  movieReadMore : boolean | undefined;


  constructor(id: number | undefined, name: string | undefined, recommendationPercent: number | undefined, movieImage: string | undefined, movieAdded: boolean | undefined) {
    this.id = id;
    this.name = name;
    this.recommendationPercent = recommendationPercent;
    this.movieImage = movieImage;
    this.movieAdded = movieAdded;
  }

  added() {
    this.movieAdded = !this.movieAdded;
    return this.movieAdded;
  }

  readMore(url: string) {
    this.movieReadMore = !this.movieReadMore;
    window.open(url, "_blank");

    return this.movieReadMore;
  }

}
