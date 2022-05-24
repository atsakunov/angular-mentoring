import {
  ComponentFixture, fakeAsync, TestBed, tick
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoursesPageComponent } from './courses-page.component';
import { SearchComponent } from './search/search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesPageComponent, SearchComponent, CoursesListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit2 chatMessageFeedback$ true when clicked on like button', fakeAsync(() => {
    const search = de.query(By.css('app-search')).componentInstance;
    const spy = spyOn(component, 'onSearch');
    search.onSearchChange();
    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));
});
