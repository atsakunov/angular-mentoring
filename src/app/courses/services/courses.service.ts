import { Injectable } from '@angular/core';
import { courses } from './courses.mock';
import { ICourse } from '../../core/interfaces/course.interface';

@Injectable()
export class CoursesService {
  private courses: ICourse[] = [];

  constructor() {
    console.log('serv');
    this.courses = courses;
  }

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse(course: ICourse) {
    this.courses = [...this.courses, course];
    return this.courses;
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
    this.courses = this.courses.filter(item => item.id !== id);
    return this.courses;
  }
}
