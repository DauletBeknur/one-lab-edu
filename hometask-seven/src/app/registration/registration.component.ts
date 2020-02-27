import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { User } from '../users/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  submitted = false;
  email: string;
  password: string;
 
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
 
  save() {
    this.userService.createUser(this.user);
    this.user = new User();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    this.signUp();
  }

  signUp() {
    this.userService.SignUp(this.email, this.password);
    this.router.navigate(['/home']);
  }

}
