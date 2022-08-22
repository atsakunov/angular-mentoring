import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ICourse} from "../../core/interfaces/course.interface";
import {debounceTime, distinctUntilChanged, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchValue = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  inputValue = new Subject<string>();

  trigger = this.inputValue.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
    const subscription = this.trigger.subscribe(currentValue => {
      this.search.emit(currentValue);
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public onKeyUp(e: Event): void {
    const target = e.target as HTMLInputElement;
    if (target.value.length > 2) {
      this.inputValue.next(target.value);
    }
  }

  public onSearchChange(): void {
    this.search.emit(this.searchValue);
  }
}
