import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ESTATE_FEATURE_KEY, EstateState } from './estate.reducer';

// Lookup the 'Estate' feature state managed by NgRx
const getEstateState = createFeatureSelector<EstateState>(ESTATE_FEATURE_KEY);

const getLoaded = createSelector(
  getEstateState,
  (state: EstateState) => state.loaded
);
const getError = createSelector(
  getEstateState,
  (state: EstateState) => state.error
);

const getAllEstate = createSelector(
  getEstateState,
  getLoaded,
  (state: EstateState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getEstateState,
  (state: EstateState) => state.selectedId
);
const getSelectedEstate = createSelector(
  getAllEstate,
  getSelectedId,
  (estate, id) => {
    const result = estate.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const estateQuery = {
  getLoaded,
  getError,
  getAllEstate,
  getSelectedEstate
};
