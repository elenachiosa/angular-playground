import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService, Category } from '../shared';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) {
    this.initialiseForm();
  }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.closeDialog();
    this.categoryService.add(this.categoryForm.value as Category);
  }

  private initialiseForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(30)]
      ],
      color: ['#ffffff', [Validators.required]]
    });
  }
}
