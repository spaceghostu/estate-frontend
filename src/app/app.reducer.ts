import * as AppActions from './app.actions';

export interface State {
  init: boolean;
}

export const initialState: State = {
    init: false,
}

export function appReducer(
    state = initialState,
    action: AppActions.Union
): State {
    switch (action.type) {
        case AppActions.ActionTypes.AppInit: {
            return {
                init: true,
                ...state,
            };
        }
        default:
            return state;
    }

}