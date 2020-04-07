import { Component, OnInit, OnDestroy } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { CategoryDialogComponent } from "../task-management/category-dialog/category-dialog.component";
import { TaskDialogComponent } from "../task-management/task-dialog/task-dialog.component";
import { CategoryService } from "./shared/services/category.service";
import { Category } from "./shared/models/category.model";
import { TaskService } from "./shared/services/task.service";
import { Task } from "./shared/models/task.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-task-management",
  templateUrl: "./task-management.component.html",
  styleUrls: ["./task-management.component.scss"]
})
export class TaskManagementComponent implements OnInit, OnDestroy {
  categories: Category[];
  selectedCategories: Category[];
  selectedTasks: Task[];
  private getCategorySubscription: Subscription;
  private getTaskSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getCategorySubscription = this.categoryService
      .get()
      .subscribe(result => {
        this.categories = result;
        this.selectedCategories = [this.categories[0]];
        this.onSelectedCategoryChange(this.selectedCategories);
      });
  }

  ngOnDestroy(): void {
    this.getCategorySubscription.unsubscribe();
    this.getTaskSubscription.unsubscribe();
  }

  compareFunction = (o1: any, o2: any) => o1.name === o2.name;

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: "500px"
    });
  }

  openTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: "500px"
    });
  }

  onSelectedCategoryChange(categories: Category[]) {
    this.getTaskSubscription = this.taskService
      .get(categories[0].id)
      .subscribe(result => {
        this.selectedTasks = result;
      });
  }
}
