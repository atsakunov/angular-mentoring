import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  addGroupForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: ['', Validators.required],
    duration: [0, Validators.required]
  });

  constructor(private coursesService: CoursesService, private router: Router, private fb: FormBuilder) { }

  public addCourseHandler(): void {
    const course = {
      id: new Date().getTime(),
      name: this.addGroupForm.value.name,
      date: this.addGroupForm.value.date,
      duration: this.addGroupForm.value.duration,
      topRated: false,
      description: this.addGroupForm.value.description,
    };

    this.coursesService.createCourse(course).subscribe(_ => {
      this.router.navigate(['courses']);
    });
  }

  nhDoCheck() {
    console.log(this.addGroupForm);
  }

  public closeHandler() {
    this.router.navigate(['courses']);
  }
}
