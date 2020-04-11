import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {UserComponent} from './user/user.component';
import {MoviesComponent} from './movies/movies.component';
import {DetailMovieComponent} from './detail-movie/detail-movie.component';
import {MycounterComponent} from './mycounter/mycounter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/detail', component: DetailMovieComponent },
  { path: 'counter', component: MycounterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
