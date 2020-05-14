import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { CategoryDialogComponent } from './category-overview/category-dialog/category-dialog.component';
import { TaskDialogComponent } from './task-overview/task-dialog/task-dialog.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';
import { TaskComponent } from './task-overview/task/task.component';
import { ComponentsModule } from 'shared/components/components.module';

@NgModule({
  declarations: [
    NotesComponent,
    CategoryDialogComponent,
    TaskDialogComponent,
    CategoryOverviewComponent,
    TaskOverviewComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    ComponentsModule
  ]
})
export class NotesModule {}
