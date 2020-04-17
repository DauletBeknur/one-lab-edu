import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { genreType } from "./dashboard.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:string;
  title = 'film';
  searchText: string;
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];
 
 
}

