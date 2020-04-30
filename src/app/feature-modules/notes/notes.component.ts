import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task, TaskService, Category, CategoryService } from './shared';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  categories: Category[];
  selectedCategories: Category[];
  categoryTasks: Task[];

  private getCategorySubscription: Subscription;
  private getTaskSubscription: Subscription;

  constructor(
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

  onCategorySelected(categories: Category[]) {
    this.selectedCategories = categories;
    this.getTasksForCategory(categories[0].id);
  }

  onTaskModalClosed(){
      this.getTasksForCategory(this.selectedCategories[0].id);
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
        this.onCategorySelected(this.selectedCategories);
      });
  }
}
