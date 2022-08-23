import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  public id: number;

  public name = '';

  public description = '';

  public date = '';

  public duration = 0;

  updateGroupForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: ['', Validators.required],
    duration: [0, Validators.required]
  });

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.coursesService.getItemById(this.id).subscribe(item => {
      this.updateGroupForm.patchValue({
        name: item.name,
        description: item.description,
        date: item.date,
        duration: item.duration,
      });
    });
  }

  public addCourseHandler(): void {
    const course = {
      name: this.updateGroupForm.value.name,
      date: this.updateGroupForm.value.date,
      duration: this.updateGroupForm.value.duration,
      topRated: false,
      description: this.updateGroupForm.value.description,
    };

    this.coursesService.updateCourse(course, this.id).subscribe(_ => {
      this.router.navigate(['courses']);
    });
  }

  public closeHandler() {
    this.router.navigate(['courses']);
  }
}
