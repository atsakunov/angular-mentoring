import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoursesListComponent } from './courses-list.component';
import { CoursesItemComponent } from '../courses-item/courses-item.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent, CoursesItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadMore method work correctly', () => {
    const spy = spyOn(component, 'loadMoreHandler');
    const loadMoreButton = de.query(By.css('.load-more-button'));
    loadMoreButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('loadMoreHandler @Output work correctly', () => {
    const spy = spyOn(component.loadMore, 'emit');
    const loadMoreButton = de.query(By.css('.load-more-button'));
    loadMoreButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
