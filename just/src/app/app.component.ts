import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public transform: string;
  public borderRadius:string;
  title = 'just';
  name: "";
  changeRadius(divElement){
    if (divElement.style.borderRadius = '0px'){
      divElement.style.borderRadius = '100px';
    }
    else{
      divElement.style.borderRadius = '50%';

    }
  }
  moveRandomly(element){
    element.style.marginLeft = '1600px';

  }
}
