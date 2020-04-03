import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  users: User[];
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: [null, Validators.required],
    });
  }

  signIn() {
    this.authService.getUsers().subscribe((users: User[])=>{
      this.users=users;
      this.users.map((user)=>{
        if(user.login===this.form.value.login && user.password===this.form.value.password){
          this.router.navigate(['/home'])
        }
      })
    })
  }

}
