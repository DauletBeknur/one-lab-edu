import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  value: string;
  value1: string;
  changeColor() {
    (<HTMLInputElement>document.getElementById("text3")).value = this.value;
    document.body.style.backgroundColor = this.value;
  }
  changeTitle(){
    (<HTMLInputElement>document.getElementById("text4")).value = this.value1;
    document.title=this.value1;


  }
  userData: any=[
    {name:"Beknur", addr:"Astana", profile: "Developer"},
    {name:"Askar", addr:"Almaty", profile: "Developer"},
    {name:"Askhat", addr:"Atyrau", profile: "Developer"},
    {name:"Arman", addr:"Karaganda", profile: "Developer"}
  ];
  getCurrentUser(user): void {
    console.log(user);
  }
  constructor(){
    console.log(this.userData);
  }
  
}
