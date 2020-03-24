import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: [null, Validators.required],
    });
  }

  submit(e) {
    e.preventDefault();
    console.log(this.form);
  }

}
