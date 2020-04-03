import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { HomeComponent } from './pages/home/home.component';
import { OfficeComponent } from './pages/office/office.component';


const routes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  {path: 'landing', component: LandingComponent},
  {
    path: 'login', 
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupModule)
  },
  { path: 'home', component: HomeComponent},
  { path: 'office/:id', component: OfficeComponent},
  { path: 'stories', component: StoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
