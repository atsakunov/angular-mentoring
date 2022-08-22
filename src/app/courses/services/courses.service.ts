import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '../../core/interfaces/course.interface';

@Injectable()
export class CoursesService {
  private courses: ICourse[] = [];

  constructor(private http: HttpClient) {}

  public getList(start = 0, count = 5, search = '') {
    return this.http.get<ICourse[]>(
      `http://localhost:3004/courses?start=${start}&count=${count}&textFragment=${search}`
    );
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
