import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpcomingComponent} from "./upcoming/upcoming.component";
import {HomeComponent} from "./home/home.component";
import {Top10Component} from "./top10/top10.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'top10',component:Top10Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
