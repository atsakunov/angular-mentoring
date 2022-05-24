import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: ICourse[] = [];

  @Output() delete = new EventEmitter<ICourse>();

  @Output() edit = new EventEmitter<ICourse>();

  @Output() loadMore = new EventEmitter<ICourse>();

  constructor() { }

  public onDelete(course: ICourse): void {
    this.delete.emit(course);
  }

  public onEdit(course: ICourse): void {
    this.edit.emit(course);
  }

  public loadMoreHandler(): void {
    this.loadMore.emit();
  }

  public trackByFn(_: number, item: ICourse): number {
    return item.id;
  }
}
