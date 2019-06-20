import { Action } from '@ngrx/store';
import { Entity } from './estate.reducer';

export enum EstateActionTypes {
  LoadEstate = '[Estate] Load Estate',
  EstateLoaded = '[Estate] Estate Loaded',
  EstateLoadError = '[Estate] Estate Load Error'
}

export class LoadEstate implements Action {
  readonly type = EstateActionTypes.LoadEstate;
}

export class EstateLoadError implements Action {
  readonly type = EstateActionTypes.EstateLoadError;
  constructor(public payload: any) {}
}

export class EstateLoaded implements Action {
  readonly type = EstateActionTypes.EstateLoaded;
  constructor(public payload: Entity[]) {}
}

export type EstateAction = LoadEstate | EstateLoaded | EstateLoadError;

export const fromEstateActions = {
  LoadEstate,
  EstateLoaded,
  EstateLoadError
};
