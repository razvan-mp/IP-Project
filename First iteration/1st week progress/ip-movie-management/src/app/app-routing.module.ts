import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpcomingComponent} from "./upcoming/upcoming.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'upcoming', component: UpcomingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
