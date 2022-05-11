import {MovieModel} from "../../models/movie-model";
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCarouselComponent } from 'igniteui-angular';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./top10.component.scss'],
  templateUrl: './top10.component.html'
})

export class Top10Component implements OnInit {
  @ViewChild('carousel', { static: true }) public carousel: IgxCarouselComponent | undefined;

  public slides: any[] = [];
  public animations = ['slide', 'fade', 'none'];

  public ngOnInit() {
    this.addSlides();
  }

  public addSlides() {
    this.slides.push(
      {

        heading: 'Titanic',
        image: 'https://cache.moviestillsdb.com/i/500x/uwofcs46/titanic-lg.jpg',
        link:  'https://www.imdb.com/title/tt0120338/'
      },
      {
        heading: 'The Godfather',
        image:'https://johnrieber.files.wordpress.com/2020/09/the-godfather-part-3-re-edited-version-2020.jpeg',
        link: 'https://www.imdb.com/title/tt0068646/'
      },
      {
        heading: 'The Dark Knight',
        image: 'https://static.wikia.nocookie.net/1154b4c6-d018-4bc7-9d3a-33fd1d76acaf/scale-to-width-down/800',
        link: 'https://www.imdb.com/title/tt0468569/'
      },
      {
        heading: '12 Angry Men',
        image: 'https://pbs.twimg.com/media/FKrN4CxXIAM_WfW.jpg',
        link: 'https://www.imdb.com/title/tt0050083/'
      },
      {
        heading: 'Child\'s Play',
        image: 'https://i1.wp.com/welovemoviesmorethanyou.com/wp-content/uploads/2019/06/Childs_Play_UK_Poster.jpg?resize=800%2C500',
        link: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_0'
      },
      {
        heading: 'Pulp Fiction',
        image: 'https://4.bp.blogspot.com/-DP_qitYM-7M/XgMdfLRqBwI/AAAAAAAAIhA/zwCMYlA5aJoLnCgbG8WQYfKxNOy82tZ3ACK4BGAYYCw/w1200-h630-p-k-no-nu/pulp%2Bfiction.png',
        link: 'https://www.imdb.com/title/tt0110912/'
      },
      {
        heading: 'Forrest Gump',
        image: 'https://1.bp.blogspot.com/-tTE8xYvzW30/YF3QYOLue_I/AAAAAAAACV8/zIhc_mVsFs8b2-hURw-UUg0OsBIjhqwCgCLcBGAsYHQ/w1200-h630-p-k-no-nu/wes-anderson-style-forrest-gump-opening-title-sequence.jpeg\n',
        link: ' https://www.imdb.com/title/tt0109830/?ref_=fn_al_tt_1'
      },
      {
        heading: 'The Silence of the Lambs',
        image: 'https://cdn.eventfinda.co.nz/uploads/events/transformed/1414496-622576-14.jpg',
        link: 'https://www.imdb.com/title/tt0102926/?ref_=fn_al_tt_1'
      },
      {
        heading: 'Star Wars: The Last Jedi',
        image: 'https://www.nation.sc/images/2018/Jan/13/star-wars-the-last-jedi-poster-700x1037-1.jpg',
        link: 'https://www.imdb.com/title/tt0076759/?ref_=fn_al_tt_1'
      },
      {
        heading: 'Joker',
        image: 'https://w0.peakpx.com/wallpaper/219/957/HD-wallpaper-joker-2019-poster-promotional-materials-main-character-joaquin-phoenix.jpg',
        link: 'https://www.imdb.com/title/tt7286456/?ref_=fn_al_tt_1'
      }

    );
  }
}
