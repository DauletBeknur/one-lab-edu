import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import {select, Store} from '@ngrx/store';
import {Login} from '../store/login.actions';
import {Observable} from 'rxjs';
import { LoginSuccess, LoginError, LoginOut, Credentials } from '../store/login.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  login: string;
  loading$: Observable<{loading: boolean}>;
  

  constructor(public userService: UserService, private store: Store<{ loading: false }>) {}

  signUp() {
    this.userService.SignUp(this.login, this.password);
    this.login = ''; 
    this.password = '';
  }

  signIn() {
    this.userService.SignIn(this.login, this.password);
    this.login = ''; 
    this.password = '';
    this.store.dispatch( Login({login: this.login, password: this.password}));
    
  }

  signOut() {
    this.userService.SignOut();
    this.store.dispatch(LoginOut());
  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(state => state));
    
  }


}
