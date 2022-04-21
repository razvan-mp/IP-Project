import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UpcomingComponent} from './upcoming/upcoming.component';
import {HomeComponent} from './home/home.component';
import {Top10Component} from './top10/top10.component';
import {NgImageSliderModule} from "ng-image-slider";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule} from "@angular/router";
import { HistoryPageComponent } from './history-page/history-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RemoveMovieComponent } from './remove-movie/remove-movie.component';
import { WhiteUserComponent } from './white-user/white-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    HomeComponent,
    Top10Component,
    NavigationComponent,
    HistoryPageComponent,
    DashboardComponent,
    RemoveMovieComponent,
    WhiteUserComponent,
    RemoveUserComponent
  ],
  imports: [
    NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    RouterModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
