import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public userService: UserService) {}

  signUp() {
    this.userService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.userService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.userService.SignOut();
  }

  ngOnInit(): void {
  }


}
