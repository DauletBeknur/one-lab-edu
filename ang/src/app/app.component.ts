import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';

  constructor () {

  }

  ngOnInit(): void {
    
  }

  generateRandomColor() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16)
  }
}
