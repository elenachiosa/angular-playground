import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { CategoryDialogComponent } from "./category-dialog/category-dialog.component";
import { TaskDialogComponent } from "./task-dialog/task-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("CategoryDialog was closed");
    });
  }

  openTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("TaskDialog was closed");
    });
  }
}
