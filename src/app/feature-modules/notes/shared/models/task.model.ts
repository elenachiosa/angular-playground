import { Reminder } from 'src/app/shared/controls/reminder/models/reminder.model';

export class Task {
  id: number;
  title: string;
  description?: string;
  priority?: number;
  reminder: Reminder
}
