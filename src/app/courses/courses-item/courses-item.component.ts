import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent {
  @Input() course: ICourse;

  @Output() delete = new EventEmitter<ICourse>();

  @Output() edit = new EventEmitter<ICourse>();

  constructor() { }

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onEdit(): void {
    this.edit.emit(this.course);
  }
}
