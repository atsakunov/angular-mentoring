import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  constructor() { }

  public isDayBeforeToday(date: string) {
    return dayjs().isAfter(date);
  }

  public isDaySameOrBeforeToday(date: string) {
    return dayjs().isAfter(date);
  }

  public subtractDaysFromToday(daysCount: number) {
    return dayjs().subtract(daysCount, 'day').toISOString();
  }

  public isDaySameOrBefore(date1: string, date2: string) {
    return dayjs(date1).isBefore(date2) || dayjs(date1).isSame(date2);
  }

  public isDayBefore(date1: string, date2: string) {
    return dayjs(date1).isBefore(date2) || dayjs(date1).isSame(date2);
  }
}
