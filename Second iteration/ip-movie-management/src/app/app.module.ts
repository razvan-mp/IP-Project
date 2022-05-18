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
import { AccountComponent } from './account/account.component';
import { ContainerProfileComponent } from './container-profile/container-profile.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login-page/login/login.component';
import { AccountSecurityComponent } from './account/account-security/account-security.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { AboutComponent } from './login-page/about/about.component';
import { RegisterComponent } from './login-page/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    RemoveUserComponent,
    AccountSettingsComponent,
    AccountComponent,
    ContainerProfileComponent,
    NavComponent,
    AccountSecurityComponent,
    LoginComponent,
    LoginPageComponent,
    NavLoginComponent,
    AboutComponent,
    RegisterComponent,
    
  ],
  imports: [
    NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule//,
    //NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
