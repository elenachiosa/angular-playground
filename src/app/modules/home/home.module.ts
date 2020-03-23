import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CategoryDialogComponent } from "./category-dialog/category-dialog.component";
import { TaskDialogComponent } from "./task-dialog/task-dialog.component";

@NgModule({
  declarations: [HomeComponent, CategoryDialogComponent, TaskDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ]
})
export class HomeModule {}
