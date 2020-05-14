import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TaskService, Task } from '../../shared';
import { Reminder } from 'shared/components/reminder/models';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.taskService.add(this.data.categoryId, this.taskForm.value as Task);
    this.closeDialog();
  }

  private initialiseForm(): void {
    this.taskForm = this.formBuilder.group({
      title: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(30)]
      ],
      description: ['', Validators.maxLength(200)],
      reminder: [new Reminder('02/02/2020', '15:00')]
    });
  }
}
