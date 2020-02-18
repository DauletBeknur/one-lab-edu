import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hometask-four';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/auth']);
  }
}
