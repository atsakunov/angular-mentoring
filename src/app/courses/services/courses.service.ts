import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../core/interfaces/course.interface';
import {saveToken} from "../../core/store/actions/auth.actions";
import {Store} from "@ngrx/store";
import {IAppStore} from "../../core/store/state/state";
import {saveCourses} from "../../core/store/actions/courses,actions";
import {getCoursesList} from "../../core/store/selectors/courses.selector";
import {Observable} from "rxjs";

@Injectable()
export class CoursesService {
  private courses: ICourse[] = [];

  constructor(private http: HttpClient, private store: Store<IAppStore>) {}

  public requestList(start = 0, count = 5, search = '') {
    return this.http.get<ICourse[]>(
      `http://localhost:3004/courses?start=${start}&count=${count}&textFragment=${search}`
    ).subscribe(res => this.store.dispatch(saveCourses({ coursesList: res })));
  }

  public getList(): Observable<ICourse[]> {
    return this.store.select(getCoursesList);
  }

  public createCourse(course: ICourse) {
    return this.http.post<ICourse[]>(
      'http://localhost:3004/courses', course
    );
  }

  public getItemById(id: number) {
    return this.courses.find(item => item.id === id);
  }

  public updateItem(id: number, course: ICourse) {
    const newCourses = [...this.courses];
    const courseForUpdateId = newCourses.findIndex(item => item.id === id);
    newCourses[courseForUpdateId] = course;
    this.courses = newCourses;
  }

  public removeItem(id: number) {
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }
}
