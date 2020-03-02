import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {
  myclass="red";
  mynumber=0;

  changeColor(){
    if (this.myclass == "blue"){
      this.myclass="red";
    }
    else {
      this.myclass="blue";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
