import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  categoryTasks = new Map<number, Task[]>();

  constructor() {}

  get(categoryId: number): Observable<Task[]> {
    return of(this.categoryTasks.get(categoryId));
  }

  add(categoryId: number, task: Task) {
    let tasks = this.categoryTasks.get(categoryId);
    tasks.push(task);
    this.categoryTasks.set(categoryId, tasks);
  }
}
