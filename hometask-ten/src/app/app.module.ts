import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import {LoginEffects} from './store/login.effects'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
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
    MatButtonModule,
    StoreModule.forRoot({login: loginReducer}),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
