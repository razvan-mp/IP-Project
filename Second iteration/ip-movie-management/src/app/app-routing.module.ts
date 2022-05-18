import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpcomingComponent} from "./upcoming/upcoming.component";
import {HomeComponent} from "./home/home.component";
import {Top10Component} from "./top10/top10.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WhiteUserComponent} from "./white-user/white-user.component";
import {RemoveMovieComponent} from "./remove-movie/remove-movie.component";
import { RemoveUserComponent } from "./remove-user/remove-user.component";
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login-page/login/login.component';
import { RegisterComponent } from './login-page/register/register.component';
import { AboutComponent } from './login-page/about/about.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { AccountSecurityComponent } from './account/account-security/account-security.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: 'top10', component: Top10Component},
  {path: 'history', component: HistoryPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'white-user', component: WhiteUserComponent},
  {path: 'remove-movie', component: RemoveMovieComponent},
  {path: 'remove-user', component: RemoveUserComponent},
  {path: 'account-settings',component:AccountComponent},
  {path:'account', children:[
    {path:'account-settings',component:AccountSettingsComponent},
    {path:'account-security',component:AccountSecurityComponent}
  ]}
  ,
  {path: 'login-page',component:LoginPageComponent},
  {path:'login-page', children:[
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'register',component:RegisterComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
