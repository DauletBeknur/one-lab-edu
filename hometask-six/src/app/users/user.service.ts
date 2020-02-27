import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: Observable<firebase.User>;
  private dbPath = '/users';
 
  usersRef: AngularFireList<User> = null;

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.userData = angularFireAuth.authState;
    this.usersRef = db.list(this.dbPath);
   }

   SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }  

  createUser(user: User): void {
    this.usersRef.push(user);
  }

  getUsersList(): AngularFireList<User> {
    return this.usersRef;
  }

}
