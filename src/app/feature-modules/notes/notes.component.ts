import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { Task, TaskService, Category, CategoryService } from './shared';
import { CategoryDialogComponent } from './category-overview/category-dialog/category-dialog.component';
import { TaskDialogComponent } from './task-overview/task-dialog/task-dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class TaskManagementComponent implements OnInit, OnDestroy {
  categories: Category[];
  selectedCategories: Category[];
  categoryTasks: Task[];

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
      this.getTasksForCategory(this.selectedCategories[0].id);
    });
  }

  onSelectedCategoryChange(categories: Category[]) {
    this.getTasksForCategory(categories[0].id);
  }

  private getTasksForCategory(categoryId: number) {
    this.getTaskSubscription = this.taskService
      .get(categoryId)
      .subscribe((result) => {
        this.categoryTasks = result;
      });
  }

  private getCategories() {
    this.getCategorySubscription = this.categoryService
      .get()
      .subscribe((result) => {
        this.categories = result;
        this.selectedCategories = [this.categories[0]];
        this.onSelectedCategoryChange(this.selectedCategories);
      });
  }
}
