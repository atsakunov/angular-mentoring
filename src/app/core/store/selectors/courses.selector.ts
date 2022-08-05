import { createSelector } from '@ngrx/store';
import {IAppStore, IAuthStore, ICoursesStore} from '../state/state';
import {ICourse} from "../../interfaces/course.interface";

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const courses = (state: IAppStore) => state.courses;

export const getCoursesList = createSelector(
  courses,
  (state: ICoursesStore) => state.coursesList
);
