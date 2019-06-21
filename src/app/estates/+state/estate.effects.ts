import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { EstateLoaded, EstateLoadError, EstateActionTypes } from './estate.actions';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EstateEffects {
  @Effect() loadEstates$ = this.actions$.pipe(
    ofType(EstateActionTypes.LoadEstate),
    switchMap(() =>
      this.http.get('http://localhost:3000/api/v1/Estate').pipe(
        map((response: any) => new EstateLoaded(response)),
        catchError(error => of(new EstateLoadError(error)))
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
