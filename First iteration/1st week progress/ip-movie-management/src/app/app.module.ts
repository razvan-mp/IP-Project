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
import { HistoryComponent } from './history/history.component';

//import {NgImageSliderModule} from "ng-image-slider";

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    HomeComponent,
    Top10Component,
    NavigationComponent,
    HistoryComponent
  ],
  imports: [
    // NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
