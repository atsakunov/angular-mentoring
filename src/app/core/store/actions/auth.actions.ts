import { createAction, props } from '@ngrx/store';

export const saveToken = createAction('[Auth Service] save token', props<{token: string}>());
