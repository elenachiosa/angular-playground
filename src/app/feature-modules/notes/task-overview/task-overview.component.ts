import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Task, Category } from '../shared';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {
  @Input() selectedCategories: Category[];
  @Input() categoryTasks: Task[];
  @Output() taskModalClosed = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onAddTaskClicked(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: {
        categoryId: this.selectedCategories[0].id
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.taskModalClosed.emit();
    });
  }
}
