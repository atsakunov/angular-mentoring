import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { SearchComponent } from './search/search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    SearchComponent,
    CoursesListComponent,
    CoursesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesModule { }
