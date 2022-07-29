import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  public id: number;

  public title = '';

  public description = '';

  public date = '';

  public duration = 0;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    const course = this.coursesService.getItemById(this.id);
    if (course) {
      this.title = course.name;
      this.description = course.description;
      this.date = course.date;
      this.duration = course.duration;
    }
  }

  public addCourseHandler(): void {
    // const course = {
    //   id: 100,
    //   title: this.title,
    //   creationDate: this.date,
    //   duration: this.duration,
    //   topRated: false,
    //   description: this.description
    // };
    // this.coursesService.createCourse(course);
    // this.router.navigate(['courses']);
  }

  public closeHandler() {
    this.router.navigate(['courses']);
  }
}
