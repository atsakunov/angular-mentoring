import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from '../../../core/services/date.service';
import { ICourse } from '../../../core/interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  constructor(private dateService: DateService) {
  }

  transform(value: ICourse[]): ICourse[] {
    const newValue = [...value];
    newValue.sort((value1, value2) => {
      if (!this.dateService.isDayBefore(value1.creationDate, value2.creationDate)) {
        return -1;
      }
      if (this.dateService.isDayBefore(value1.creationDate, value2.creationDate)) {
        return 1;
      }

      return 0;
    });

    return newValue;
  }
}
