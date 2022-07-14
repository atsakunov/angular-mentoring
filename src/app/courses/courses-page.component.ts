import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICourse } from '../core/interfaces/course.interface';
import { CoursesService } from './services/courses.service';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [CoursesService]
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public isCourseAdding = false;

  public search = '';

  constructor(private coursesService: CoursesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.courses = this.coursesService.getList();
  }

  public onSearch(search: string): void {
    this.search = search;
  }

  public onDelete(course: ICourse): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        course
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courses = this.coursesService.removeItem(course.id);
      }
    });
  }

  public onEdit(course: ICourse): void {
    console.log('Edit', course);
  }

  public loadMore(): void {
    console.log('Load more');
  }

  public addCourseHandler(): void {
    this.isCourseAdding = true;
  }

  public saveCourseHandler(course: ICourse): void {
    this.coursesService.createCourse(course);
    this.courses = this.coursesService.getList();
    this.isCourseAdding = false;
  }

  public closeAddCourseHandler(): void {
    this.isCourseAdding = false;
  }
}
