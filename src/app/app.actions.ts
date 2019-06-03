import { Action } from '@ngrx/store';

export enum ActionTypes {
  AppInit = '[App] Init',
  ToggleSidebar = '[App] Toggle Sidebar'
}

export class AppInit implements Action {
  readonly type = ActionTypes.AppInit;

  constructor() {}
}

export class ToggleSidebar implements Action {
  readonly type = ActionTypes.ToggleSidebar;

  constructor() {}
}

export type Union = AppInit | ToggleSidebar;
