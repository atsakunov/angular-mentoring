import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CoursesItemComponent } from './courses-item.component';

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let deleteButton: DebugElement;
  let editButton: DebugElement;
  const mockCourse = {
    id: 1,
    title: 'Course 1',
    creationDate: '2020-01-01',
    duration: 20,
    description: 'description'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    editButton = fixture.debugElement.query(By.css('.edit-button'));
    component = fixture.componentInstance;
    component.course = { ...mockCourse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('correct course displaying', () => {
    const description = fixture.nativeElement.querySelector('.course-description');

    expect(description.textContent).toContain('description');
  });

  it('onDelete method work correctly', () => {
    const spy = spyOn(component, 'onDelete');

    deleteButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('deleteHandler @Output work correctly', () => {
    const spy = spyOn(component.delete, 'emit');
    deleteButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it('onEdit method work correctly', () => {
    const spy = spyOn(component, 'onEdit');

    editButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('editHandler @Output work correctly', () => {
    const spy = spyOn(component.edit, 'emit');
    editButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
