import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  loginval: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem('login', 'user');
    localStorage.setItem('password', '12345');
    if (this.loginval && this.password) {
        if (this.loginval===localStorage.getItem('login') && this.password === localStorage.getItem('password')) {
            this.router.navigate(['/home']);
        }else{
          alert("Please enter the correct data")
        }
    }else{
      alert("Please fill in all the fields")
    }
  }

}
