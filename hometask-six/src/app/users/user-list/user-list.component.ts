import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.userService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }

  signOut() {
    this.userService.SignOut();
    this.router.navigate(['/home']);
  }

  active(){
    this.users.status === "active";
  }

}
