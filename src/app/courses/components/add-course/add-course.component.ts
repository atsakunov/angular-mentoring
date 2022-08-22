import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  public title = '';

  public description = '';

  public date = '';

  public duration = 0;

  constructor(private coursesService: CoursesService, private router: Router) { }

  public addCourseHandler(): void {
    const course = {
      id: new Date().getTime(),
      name: this.title,
      date: this.date,
      duration: this.duration,
      topRated: false,
      description: this.description
    };
    this.coursesService.createCourse(course).subscribe(_ => {
      this.router.navigate(['courses']);
    });
  }

  public closeHandler() {
    this.router.navigate(['courses']);
  }
}
