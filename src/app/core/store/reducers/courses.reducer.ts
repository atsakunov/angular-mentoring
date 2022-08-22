import { createReducer, on } from '@ngrx/store';
import { saveToken } from '../actions/auth.actions';
import {saveCourses} from "../actions/courses,actions";
import {ICoursesStore} from "../state/state";

export const initialState: ICoursesStore = {
  coursesList: []
};

export const coursesReducer = createReducer(
  initialState,
  on(saveCourses, (state, { coursesList }) => ({ coursesList })),
);
