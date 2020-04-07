import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './task-management.component';
import { CategoryDialogComponent } from './category-dialog';
import { TaskDialogComponent } from './task-dialog';

@NgModule({
  declarations: [
    TaskManagementComponent,
    CategoryDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskManagementRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatInputModule
  ]
})
export class TaskManagementModule {}
