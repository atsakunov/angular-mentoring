import { Component, OnInit } from '@angular/core';
import { ICourse } from '../core/interfaces/course.interface';
import { courses } from './courses.mock';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public search = '';

  constructor() {}

  ngOnInit() {
    this.courses = courses;
  }

  public onSearch(search: string): void {
    this.search = search;
  }

  public onDelete(course: ICourse): void {
    console.log('Delete', course);
  }

  public onEdit(course: ICourse): void {
    console.log('Edit', course);
  }

  public loadMore(): void {
    console.log('Load more');
  }
}
