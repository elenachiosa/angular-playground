import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService, Task } from '../shared';

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
  ) {
    this.initialiseForm();
  }

  ngOnInit(): void {}

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
      description: ['', Validators.maxLength(200)]
    });
  }
}
