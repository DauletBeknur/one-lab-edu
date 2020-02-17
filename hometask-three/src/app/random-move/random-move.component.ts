import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-random-move',
  templateUrl: './random-move.component.html',
  styleUrls: ['./random-move.component.css']
})
export class RandomMoveComponent implements OnInit {
  public transform: string;
  @Output() getData: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  
  moveRandomly(){
    setInterval(() => { 
     const height = document.documentElement.clientHeight;
     const width = document.documentElement.clientWidth;
     let owl = document.querySelector("#main-elem");
     let rect  = owl.getBoundingClientRect();
     let owlImg = document.querySelector("#owl-pic");
 
     let randomY = Math.floor((Math.random() * height) + 1);
     let randomX = Math.floor((Math.random() * width) + 1);
     
     this.transform = `translate(${randomX}px, ${randomY}px)`;
 
     if(rect.left > randomX){
       owlImg.setAttribute("src", "assets/img/owl-left.png");
     } else{
       owlImg.setAttribute("src", "assets/img/owl.png");
     }

     console.log(rect.left, rect.top);
     }, 1300);
      
   }

   getCoordinate(){
    let owl = document.querySelector("#main-elem");
    let rect  = owl.getBoundingClientRect();
    this.getData.emit(rect.top);
     
   }

}
