import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { ReminderComponent } from './reminder/reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  declarations: [ReminderComponent, SectionTitleComponent],
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [ReminderComponent, SectionTitleComponent]
})
export class ComponentsModule {}
