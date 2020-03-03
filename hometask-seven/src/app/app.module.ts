import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './dropdown/filter.pipe';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DropdownComponent } from './dropdown/dropdown.component';


const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'movie-list', component: MovieListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    LoginComponent,
    RegistrationComponent,
    DropdownComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
