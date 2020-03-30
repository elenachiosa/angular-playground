import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { CategoryDialogComponent } from "../task-management/category-dialog/category-dialog.component";
import { TaskDialogComponent } from "../task-management/task-dialog/task-dialog.component";
import { CategoryService } from "./shared/services/category.service";
import { Category } from "./shared/models/category.model";

@Component({
  selector: "app-task-management",
  templateUrl: "./task-management.component.html",
  styleUrls: ["./task-management.component.scss"]
})
export class TaskManagementComponent implements OnInit {
  categories: Category[];
  selectedCategory = [{ name: "personal" }];
  compareFunction = (o1: any, o2: any) => o1.name === o2.name;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService.get().subscribe(result => {
      this.categories = result;
    });
    // this.selectedCategory = this.categories[0];
  }

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("CategoryDialog was closed");
    });
  }

  openTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("TaskDialog was closed");
    });
  }
}
