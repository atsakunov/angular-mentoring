import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SearchComponent } from './search/search.component';
import { CreationDateHighlightDirective } from './directives/creation-date-highlight/creation-date-highlight.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { CoursesFilterPipe } from './pipes/courses-filter/courses-filter.pipe';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { CoursesService } from './services/courses.service';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    SearchComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CreationDateHighlightDirective,
    OrderByPipe,
    CoursesFilterPipe,
    DurationPipe,
    DeleteConfirmComponent,
  ],
  providers: [CoursesFilterPipe, OrderByPipe, CoursesService],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [CoursesPageComponent]
})
export class CoursesModule { }
