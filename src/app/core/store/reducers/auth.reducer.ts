import { createReducer, on } from '@ngrx/store';
import { saveToken } from '../actions/auth.actions';

export const initialState = {
  token: ''
};

export const authReducer = createReducer(
  initialState,
  on(saveToken, (state, { token }) => ({ token })),
);
