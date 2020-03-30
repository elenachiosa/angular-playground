import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { MatDialogRef } from "@angular/material/dialog";

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

  constructor(public dialogRef: MatDialogRef<CategoryDialogComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.closeDialog();
    console.log(this.categoryForm.value);
  }
}
