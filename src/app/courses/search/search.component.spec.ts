import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchButton: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    searchButton = fixture.debugElement.query(By.css('.search-button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearchChange work correctly', () => {
    const spy = spyOn(component, 'onSearchChange');

    searchButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('searchChange @Output work correctly', () => {
    const spy = spyOn(component.search, 'emit');
    searchButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });
});
