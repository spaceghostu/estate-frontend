import { EstateAction, EstateActionTypes } from './estate.actions';

export const ESTATE_FEATURE_KEY = 'estate';

/**
 * Interface for the 'Estate' data used in
 *  - EstateState, and
 *  - estateReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {
  name: string;
  id: number;
  number: string;
  will?: { date: string };
}

export interface EstateState {
  list: Entity[];
  selectedId?: string | number;
  loaded: boolean;
  error?: any;
}

export interface EstatePartialState {
  readonly [ESTATE_FEATURE_KEY]: EstateState;
}

export const initialState: EstateState = {
  list: [],
  loaded: false
};

export function estateReducer(state: EstateState = initialState, action: EstateAction): EstateState {
  switch (action.type) {
    case EstateActionTypes.EstateLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
