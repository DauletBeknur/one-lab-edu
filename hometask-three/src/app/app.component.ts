import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hometask-three';
  receiveddata: number;
  getValue(event){
    console.log(event);
  }
}