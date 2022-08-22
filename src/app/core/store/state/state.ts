import {ICourse} from "../../interfaces/course.interface";

export interface IAuthStore {
  token: string;
}

export interface ICoursesStore {
  coursesList: ICourse[];
}

export interface IAppStore {
  auth: IAuthStore;
  courses: ICoursesStore;
}
