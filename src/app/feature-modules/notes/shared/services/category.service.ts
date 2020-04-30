import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'personal', color: 'rgb(123, 168, 251)' },
    { id: 2, name: 'work', color: 'rgb(253, 121, 190)' },
    { id: 3, name: 'shopping', color: 'rgb(255, 224, 119)' }
  ];

  constructor() {}

  get(): Observable<Category[]> {
    return of(this.categories);
  }

  add(category: Category): void {
    let ids = this.categories.map(element => element.id);
    let maxId = Math.max(...ids);
    category.id = ++maxId;
    
    this.categories.push(category);
  }
}
