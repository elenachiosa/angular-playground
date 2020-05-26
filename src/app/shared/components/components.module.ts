import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { ReminderComponent } from './reminder/reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ReminderComponent, SectionTitleComponent, ListComponent],
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [ReminderComponent, SectionTitleComponent, ListComponent]
})
export class ComponentsModule {}
