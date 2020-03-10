import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './dropdown/filter.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie-page/:id', component: MoviePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    LoginComponent,
    RegistrationComponent,
    DropdownComponent,
    FilterPipe,
    MoviePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
