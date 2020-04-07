import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { MatDialogRef } from "@angular/material/dialog";
import { CategoryService } from "../shared/services/category.service";

@Component({
  selector: "app-category-dialog",
  templateUrl: "./category-dialog.component.html",
  styleUrls: ["./category-dialog.component.scss"]
})
export class CategoryDialogComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(30)
    ]),
    color: new FormControl("#ffffff", [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.closeDialog();
    this.categoryService.add(this.categoryForm.value);
  }
}
