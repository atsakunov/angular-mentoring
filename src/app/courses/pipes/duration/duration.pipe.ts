import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 60) {
      return `${value}min`;
    }
    return `${Math.floor(value / 60)}h ${value % 60}min`;
  }
}
