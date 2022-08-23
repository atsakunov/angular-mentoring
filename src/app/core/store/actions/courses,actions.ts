import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../interfaces/course.interface';

export const saveCourses = createAction('[Coursese Service] save courses', props<{coursesList: ICourse[]}>());
