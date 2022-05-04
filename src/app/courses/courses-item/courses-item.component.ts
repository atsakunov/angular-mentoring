import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent {
  @Input() course: ICourse;

  @Output() deleteHandler = new EventEmitter<ICourse>();

  @Output() editHandler = new EventEmitter<ICourse>();

  constructor() { }

  onDelete(): void {
    this.deleteHandler.emit(this.course);
  }

  onEdit(): void {
    this.editHandler.emit(this.course);
  }
}
