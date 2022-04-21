import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpcomingComponent} from "./upcoming/upcoming.component";
import {HomeComponent} from "./home/home.component";
import {Top10Component} from "./top10/top10.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WhiteUserComponent} from "./white-user/white-user.component";
import {RemoveMovieComponent} from "./remove-movie/remove-movie.component";
import {RemoveUserComponent} from "./remove-user/remove-user.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'top10', component: Top10Component},
  {path: 'history-page', component: HistoryPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'white-user', component: WhiteUserComponent},
  {path: 'remove-movie', component: RemoveMovieComponent},
  {path: 'remove-user', component: RemoveUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
