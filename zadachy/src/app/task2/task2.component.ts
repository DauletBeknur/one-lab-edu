import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
  form: FormGroup;
  title = 'angulartitle';

  constructor(private fb: FormBuilder, private titleService: Title) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ])
    });
  }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
 }

  submit(e) {
    e.preventDefault();
    this.setDocTitle(this.form.value.name);
  }

}
