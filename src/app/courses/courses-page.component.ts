import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICourse } from '../core/interfaces/course.interface';
import { CoursesService } from './services/courses.service';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];

  public isCoursesLoading = false;

  private search = '';

  private start = 0;

  private count = 5;

  constructor(private coursesService: CoursesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getCourses();
  }

  public onSearch(search: string): void {
    this.search = search;
    this.count = 5;
    this.start = 0;
    this.getCourses();
  }

  public onDelete(course: ICourse): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        course
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.removeItem(course.id).subscribe(_ => {
          this.loadMore();
        });
      }
    });
  }

  public loadMore(): void {
    this.isCoursesLoading = false;
    this.count += 5;
    this.getCourses();
  }

  private getCourses() {
    this.isCoursesLoading = true;
    this.coursesService.getList(this.start, this.count, this.search).subscribe(res => {
      this.courses = res;
      this.isCoursesLoading = false;
    });
  }
}
