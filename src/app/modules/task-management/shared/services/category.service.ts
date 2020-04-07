import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private categories: Category[] = [
    { id: "1", name: "personal" },
    { id: "2", name: "work" },
    { id: "3", name: "shopping" }
  ];

  constructor() {}

  get(): Observable<Category[]> {
    return of(this.categories);
  }

  add(category: Category):void {
    this.categories.push(category);
  }
}
