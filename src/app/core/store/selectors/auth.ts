import { createSelector } from '@ngrx/store';
import { IAppStore, IAuthStore } from '../state/state';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const auth = (state: IAppStore) => state.auth;

export const getToken = createSelector(
  auth,
  (state: IAuthStore) => state.token
);

export const getIsAuth = createSelector(
  auth,
  (state: IAuthStore) => Boolean(state.token)
);
