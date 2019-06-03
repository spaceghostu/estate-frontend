import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectApp = createFeatureSelector<AppState>('app');

export const $sidebarOpen = createSelector(
    selectApp,
    (state: AppState) => state.sidebarOpen,
);
