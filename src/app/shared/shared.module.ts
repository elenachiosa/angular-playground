import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { ReminderComponent } from './controls/reminder/reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReminderComponent],
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [ReminderComponent]
})
export class SharedModule {}
