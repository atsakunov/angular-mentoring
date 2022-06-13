import {
  Directive, ElementRef, Input, OnInit
} from '@angular/core';
import { DateService } from '../../../core/services/date.service';

@Directive({
  selector: '[appCreationDateHighlight]'
})
export class CreationDateHighlightDirective implements OnInit {
  @Input('appCreationDateHighlight') date: string;

  constructor(private eleRef: ElementRef, private dateService: DateService) {}

  ngOnInit() {
    this.eleRef.nativeElement.style.color = this.getDateColor();
  }

  private getDateColor() {
    const subtractDay = this.dateService.subtractDaysFromToday(14);
    if (
      this.dateService.isDayBeforeToday(this.date)
      && this.dateService.isDaySameOrBefore(subtractDay, this.date)) {
      return 'green';
    }
    if (!this.dateService.isDayBeforeToday(this.date)) {
      return 'blue';
    }
    return 'black';
  }
}
