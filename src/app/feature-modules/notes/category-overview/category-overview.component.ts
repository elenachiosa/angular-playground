import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { Category } from '../shared';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent {
  @Input() selectedCategories: Category[];
  @Input() categories: Category[];
  @Output() categorySelected = new EventEmitter<Category[]>();

  constructor(private dialog: MatDialog) {}

  compareFunction = (o1: any, o2: any) => o1.name === o2.name;

  onAddCategoryClicked(): void {
    this.dialog.open(CategoryDialogComponent, {
      width: '500px'
    });
  }

  onSelectedCategoryChange(categories: Category[]) {
    this.categorySelected.emit(categories);
  }
}
