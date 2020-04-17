import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Page1Component } from './components/page1/page1.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterPipe,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
