import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  name = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

}
