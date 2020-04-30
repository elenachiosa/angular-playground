import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private categoryTasks = new Map<number, Task[]>();

  constructor() {
    let tasks: Task[] = [
      {
        id: 1,
        title: 'Wash the dog',
        description: 'The dog has been playing in mud and needs a wash.'
      }
    ];
    this.categoryTasks.set(1, tasks);
  }

  get(categoryId: number): Observable<Task[]> {
    return of(this.categoryTasks.get(categoryId));
  }

  add(categoryId: number, task: Task): void {
    let maxId: number = 0;
    let tasks: Task[] = [];

    if (this.categoryTasks.get(categoryId)) {
      tasks = this.categoryTasks.get(categoryId);
      let ids = tasks.map((element) => element.id);
      maxId = Math.max(...ids);
    }

    task.id = ++maxId;
    tasks.push(task);

    this.categoryTasks.set(categoryId, tasks);
  }
}
