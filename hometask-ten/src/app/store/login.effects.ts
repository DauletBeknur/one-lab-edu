import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Login, LoginSuccess, LoginError, LoginOut, Credentials } from '../store/login.actions';

import { User } from '../users/user';
import { UserService } from '../users/user.service';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => {
     this.actions$.pipe(
    ofType(Login),
    exhaustMap((action) =>
      this.UserService.SignIn(action.login, action.password).pipe(
        map(() => LoginSuccess()),
        catchError(() => of(LoginError()))
      )
    )
  )}
);
  
    

  constructor(
    private actions$: Actions,
    private UserService: UserService
  ) {}
}