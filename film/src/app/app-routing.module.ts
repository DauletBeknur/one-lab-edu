import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page1Component } from './components/page1/page1.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'page1', component: Page1Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
