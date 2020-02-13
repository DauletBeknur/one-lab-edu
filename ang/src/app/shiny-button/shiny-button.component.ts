import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shiny-button',
  templateUrl: './shiny-button.component.html',
  styleUrls: ['./shiny-button.component.css']
})
export class ShinyButtonComponent implements OnInit {

  @ViewChild('example') myExampleCanvas: ElementRef;

  public color: string;

  constructor() {
    this.color = this.generateRandomColor();
   }

  ngOnInit(): void {
  }

  generateRandomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  }

  public borderRadius: string;

  changeShape() {
    if (this.borderRadius === "50%")
        this.borderRadius = "0.5rem";
    else this.borderRadius = "50%";
  }

  changeColor() {
    this.color = this.generateRandomColor();
  }

  anthill() {
    const example = this.myExampleCanvas.nativeElement;
    const ctx = example.getContext('2d');
    const D = 200;
    const d = 5;

    const array = Array.apply(null, new Array(D)).map(Number.prototype.valueOf, 0);
    for (let i = 0; i < D; i++) {
        array[i] = Array.apply(null, new Array(D)).map(Number.prototype.valueOf, 0);
    }

    const direction = [0, 1, 2, 3, 0];
    const x = [D / 4, D * 3 / 4, D * 3 / 4, D / 4, D / 2];
    const y = [D / 4, D * 3 / 4, D / 4, D * 3 / 4, D / 2];
    const colours = ["#FF000F", "#0000FF", "#00FF00", "#00FFFF", "#FFFF00"];

    function ant(index) {
        if ((++array[x[index]][y[index]]) === 1) {
            direction[index]--;
            ctx.fillStyle = colours[index];
            ctx.fillRect(x[index] * d, y[index] * d, d, d);
        } else {
            direction[index]++;
            array[x[index]][y[index]] = 0;
            ctx.clearRect(x[index] * d, y[index] * d, d, d);
        }

        if (direction[index] === -1) {
            direction[index] = 3;
        }

        if (direction[index] === 4) {
            direction[index] = 0;
        }

        if (direction[index] === 0) {
            x[index]++;
        } else if (direction[index] === 1) {
            y[index]++;
        } else if (direction[index] === 2) {
            x[index]--;
        } else if (direction[index] === 3) {
            y[index]--;
        }

        if (x[index] === -1) {
            direction[index] = 3;
            x[index] = 0;
        } else if (y[index] === -1) {
            direction[index] = 0;
            y[index] = 0;
        } else if (x[index] === D) {
            x[index] = D - 1;
            direction[index] = 1;
        } else if (y[index] === D) {
            y[index] = D - 1;
            direction[index] = 2;
        }
    };

    setInterval(function() {
        ant(0)
    }, 0);

    ctx.fillRect(0, 0, 10, 10);
    ctx.fillRect(990, 990, 10, 10);
    ctx.fillRect(0, 990, 10, 10);
    ctx.fillRect(990, 0, 10, 10);
  }

}
