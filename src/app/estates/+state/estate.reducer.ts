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
export interface Entity {}

export interface EstateState {
  list: Entity[]; // list of Estate; analogous to a sql normalized table
  selectedId?: string | number; // which Estate record has been selected
  loaded: boolean; // has the Estate list been loaded
  error?: any; // last none error (if any)
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
