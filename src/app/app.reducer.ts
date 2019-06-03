import * as AppActions from './app.actions';

export interface AppState {
  init: boolean;
  sidebarOpen: boolean;
}

export const initialState: AppState = {
  init: false,
  sidebarOpen: true
};

export function appReducer(
  state = initialState,
  action: AppActions.Union
): AppState {
  switch (action.type) {
    case AppActions.ActionTypes.AppInit: {
      return {
        init: true,
        ...state
      };
    }
    case AppActions.ActionTypes.ToggleSidebar: {
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      }
    }
    default:
      return state;
  }
}
