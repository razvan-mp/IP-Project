import { Component } from '@angular/core';
import {MovieModel} from "../../models/movie-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  movieList: MovieModel[] = [];
  constructor() {

    let movie1 = new MovieModel(1, "Creep", 86, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT8EttRFwg-W2nIDhvW6BA0K438M6FkKSi2J6FMonpAFJaCJOGejSOXhBnomtg0wtJVsakW_LXC11GmC3-jWg2Bp_xU.jpg?r=622", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    let movie2 = new MovieModel(2, "Monty Python", 79, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSwXVlHLCZnGRn3D1WV2IHsNjtZr6LIZiZb-WndkpQd6rBsZlR5DOnyoFD2gKvWNcNWRJT2lFhPRAh5NE_GoGkYMUMo.jpg?r=712", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    let movie3 = new MovieModel(3, "Life of Brian", 66, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWsc1AGsSgPWtb13xwyBmF3x4IlOqwYH_OmzBbVOhzDUGfV-pWGyXwXQBPMnpV6zpwa2FF78JH5QbHr9pdsvbXyfcpg.jpg?r=f9f", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    let movie4 = new MovieModel(4, "Buster's mal heart", 98, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY6eUU00gY1mSuNoYYEq7vwLrIiYzwkSO5gRWxed9uzvre7S-7lGyMxdt-1DfUWICw5whMsszluPf7kSXZTVr778gHI.jpg?r=67c", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    let movie5 = new MovieModel(5, "Minimalism", 74, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVcgST27NnZdbyij4zPGMHq6ln0QHw4xcmO9vv8AC6GwdE5f4X7OmDtsf2m9UzhFvGy9eHsaWVnp6qCXSG7H2ZsH2uM.jpg?r=644", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    let movie6 = new MovieModel(6, "Coded bias", 91, "https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb9ffEkWEkmhCnLCI2o_zl3Gwz7ccU_2cl4w67WIupSofId1utuYXwFUcIMt7xi-dsttV_Vfgl76mUdL1u4uAYaUZlY.jpg?r=0ca", false, "https://www.studiocanal.com/title/the-electrical-life-of-louis-wain-2020/", "");
    this.movieList.push(movie1, movie2, movie3, movie4, movie5, movie6);
  }

}
