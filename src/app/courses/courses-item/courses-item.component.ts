import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent {
  @Input() course: ICourse;

  @Output() delete = new EventEmitter<ICourse>();

  constructor(private router: Router) { }

  onDelete(): void {
    this.delete.emit(this.course);
  }

  onEdit(): void {
    this.router.navigate(['courses', 'new', this.course.id]);
  }
}
