import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from "@angular/fire/storage";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './shared/routing/app-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmaiComponent } from './components/verify-emai/verify-emai.component';
import { SharedComponent } from './shared/shared.component';
import { ServicesComponent } from './shared/services/services.component';


import { AuthService } from "./shared/services/auth.service";
import { FilmComponent } from './components/film/film.component';


 
 
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmaiComponent,
    SharedComponent,
    ServicesComponent,
    FilmComponent,
    MyCounterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })



  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
