import { Component, EventEmitter, Output } from '@angular/core';
import { ICourse } from '../../../core/interfaces/course.interface';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  @Output()
  public closeAdd: EventEmitter<string> = new EventEmitter();

  @Output()
  public saveCourse: EventEmitter<ICourse> = new EventEmitter();

  public title = '';

  public description = '';

  public date = '';

  public duration = 0;

  constructor() { }

  public addCourseHandler() {
    this.saveCourse.emit({
      id: 100,
      title: this.title,
      creationDate: this.date,
      duration: this.duration,
      topRated: false,
      description: this.description
    });
    this.closeAdd.emit();
  }

  public closeHandler() {
    this.closeAdd.emit();
  }
}
