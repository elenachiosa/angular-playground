import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Task, TaskService, Category, CategoryService } from './shared';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit, OnDestroy {
  categories: Category[];
  selectedCategories: Category[];
  selectedTasks: Task[];

  private getCategorySubscription: Subscription;
  private getTaskSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.getCategorySubscription.unsubscribe();
    this.getTaskSubscription.unsubscribe();
  }

  compareFunction = (o1: any, o2: any) => o1.name === o2.name;

  onAddCategoryClicked(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px'
    });
  }

  onAddTaskClicked(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: {
        categoryId: this.selectedCategories[0].id
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.taskService
        .get(this.selectedCategories[0].id)
        .subscribe((tasks) => (this.selectedTasks = tasks));
    });
  }

  onSelectedCategoryChange(categories: Category[]) {
    this.getTaskSubscription = this.taskService
      .get(categories[0].id)
      .subscribe((result) => {
        this.selectedTasks = result;
      });
  }

  getCategories() {
    this.getCategorySubscription = this.categoryService
      .get()
      .subscribe((result) => {
        this.categories = result;
        this.selectedCategories = [this.categories[0]];
        this.onSelectedCategoryChange(this.selectedCategories);
      });
  }
}
