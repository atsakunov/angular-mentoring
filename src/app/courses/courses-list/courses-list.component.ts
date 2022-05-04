import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: ICourse[] = [];

  @Output() deleteHandler = new EventEmitter<ICourse>();

  @Output() editHandler = new EventEmitter<ICourse>();

  @Output() loadMoreHandler = new EventEmitter<ICourse>();

  constructor() { }

  public onDelete(course: ICourse): void {
    this.deleteHandler.emit(course);
  }

  public onEdit(course: ICourse): void {
    this.editHandler.emit(course);
  }

  public loadMore(): void {
    this.loadMoreHandler.emit();
  }
}
