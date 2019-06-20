import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { EstatePartialState } from './estate.reducer';
import { LoadEstate, EstateLoaded, EstateLoadError, EstateActionTypes } from './estate.actions';

@Injectable()
export class EstateEffects {
  @Effect() loadEstate$ = this.dataPersistence.fetch(EstateActionTypes.LoadEstate, {
    run: (action: LoadEstate, state: EstatePartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new EstateLoaded([]);
    },

    onError: (action: LoadEstate, error) => {
      console.error('Error', error);
      return new EstateLoadError(error);
    }
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<EstatePartialState>) {}
}
