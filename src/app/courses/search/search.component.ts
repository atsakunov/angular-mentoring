import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public search = '';

  @Output()
  public searchChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onSearchChange(): void {
    this.searchChange.emit(this.search);
  }
}
