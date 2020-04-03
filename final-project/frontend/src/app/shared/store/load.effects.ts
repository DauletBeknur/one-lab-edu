import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GetofficeService } from '../getoffice.service';


Injectable()
export class Loadeffects {
 
  loadOffices$ = createEffect(() =>{
   return this.actions$.pipe(
      ofType('[Office Page] Load Office'),
      mergeMap(() => this.getofficeService.getOfficess()
        .pipe(
          map(offices => ({ type: '[Office Page] Office Loaded Success', payload: offices })),
          catchError(() => of({ type: '[Office Page] Offices Loaded Error' }))
        )
      )
    )
        });
 
  constructor(
    private actions$: Actions,
    private getofficeService: GetofficeService
  ) {}
}