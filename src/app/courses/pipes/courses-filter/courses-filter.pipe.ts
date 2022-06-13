import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../../core/interfaces/course.interface';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {
  transform(value: ICourse[], search: string): ICourse[] {
    if (!search) return value;
    return value.filter(item => item.title.includes(search));
  }
}
