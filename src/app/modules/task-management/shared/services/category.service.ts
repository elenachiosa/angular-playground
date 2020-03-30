import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  categories: Category[] = [
    { name: "personal" },
    { name: "work" },
    { name: "shopping" }
  ];

  constructor() {}

  get() {
    return of(this.categories);
  }
}
