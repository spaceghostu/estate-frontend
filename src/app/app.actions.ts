import { Action } from '@ngrx/store';

export enum ActionTypes {
    AppInit = '[App] Init',
  }
export class AppInit implements Action {
  readonly type = ActionTypes.AppInit;

  constructor() {}
}

export type Union = AppInit;
