import {
  ChangeDetectionStrategy,
  Component, EventEmitter, Input, OnChanges, Output
} from '@angular/core';
import { ICourse } from 'src/app/core/interfaces/course.interface';
import { CoursesFilterPipe } from '../pipes/courses-filter/courses-filter.pipe';
import { OrderByPipe } from '../pipes/order-by/order-by.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnChanges {
  @Input() courses: ICourse[] = [];

  @Input() search = '';

  @Output() delete = new EventEmitter<ICourse>();

  @Output() edit = new EventEmitter<ICourse>();

  @Output() loadMore = new EventEmitter<ICourse>();

  public filteredCourses: ICourse[] = [];

  constructor(private filterPipe: CoursesFilterPipe, private orderByPipe: OrderByPipe) { }

  ngOnChanges() {
    const filtered = this.filterPipe.transform(this.courses, this.search);
    const ordered = this.orderByPipe.transform(filtered);
    this.filteredCourses = ordered;
  }

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
