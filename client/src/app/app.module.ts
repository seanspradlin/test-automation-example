import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { CompleteButtonComponent } from './complete-button/complete-button.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    DeleteButtonComponent,
    CompleteButtonComponent,
    FilterMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
