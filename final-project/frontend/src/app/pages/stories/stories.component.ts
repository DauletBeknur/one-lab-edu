import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StoryDetailComponent } from '../story-detail/story-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



export interface DialogData {
  color : string;
  name: string;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  providers: [NgbCarouselConfig]
})
export class StoriesComponent implements OnInit {
  name: string;
  color: string;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public dialog: MatDialog, config: NgbCarouselConfig) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(StoryDetailComponent); 
    
    //   width: '450px',
    //   data: { name: this.name, color: this.color }
    // });

  //   dialogRef.afterClosed().subscribe(res => {
  //     this.color = res;
  //   });
  }

  ngOnInit(): void {
  }

}
