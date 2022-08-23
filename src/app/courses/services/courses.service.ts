import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICourse } from '../../core/interfaces/course.interface';
import { IAppStore } from '../../core/store/state/state';
import { saveCourses } from '../../core/store/actions/courses,actions';
import { getCoursesList } from '../../core/store/selectors/courses.selector';

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

  public updateCourse(course: ICourse, id: number) {
    return this.http.patch<ICourse[]>(
      `http://localhost:3004/courses/${id}`, course
    );
  }

  public getItemById(id: number) {
    return this.http.get<ICourse>(
      `http://localhost:3004/courses/${id}`
    );
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
