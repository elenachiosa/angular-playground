import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  get(categoryId: number): Observable<Task[]> {
    return of([
      {
        id: 1,
        categoryId: categoryId,
        title: `${categoryId} - Task`
      }
    ]);
  }
}
