import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchValue = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onSearchChange(): void {
    this.search.emit(this.searchValue);
  }
}
