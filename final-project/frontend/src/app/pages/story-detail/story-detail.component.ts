import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../stories/stories.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss'],
  providers: [NgbCarouselConfig]
})
export class StoryDetailComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    public dialogRef: MatDialogRef<StoryDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    config: NgbCarouselConfig
  ) {config.showNavigationArrows = true;
    config.showNavigationIndicators = true; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  

  // reset() {
  //   let sliderImages = document.querySelectorAll(".stories");
  //   for (let i = 0; i < sliderImages.length; i++) {
  //     sliderImages[i].classList.add("nothing");
  //   }
  // }

  // startSlide() {
  //   this.reset();
  // }

  // slideLeft() {
  //   let sliderImages = document.querySelectorAll(".stories");
  //   let current =0;
  //   this.reset();
  //   sliderImages[current - 1].classList.add("block");
  //   current--;
  // }

  // slideRight() {
  //   let sliderImages = document.querySelectorAll(".stories");
  //   let current =0;
  //   this.reset();
  //   sliderImages[current + 1].classList.add("block");
  //   current++;
  // }

  // arrowLeft() {
  //   let sliderImages = document.querySelectorAll(".stories");
  //   let current =0;
  //   if (current === 0) {
  //     current = sliderImages.length;
  //   }
  //   this.slideLeft();
  // };
  
  // // Right arrow click
  // arrowRight() {
  //   let sliderImages = document.querySelectorAll(".stories");
  //   let current =0;
  //   if (current === sliderImages.length - 1) {
  //     current = -1;
  //   }
  //   this.slideRight();
  // };
  
  

}
