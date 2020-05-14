import { Reminder } from 'shared/components/reminder/models';

export class Task {
  id: number;
  title: string;
  description?: string;
  priority?: number;
  reminder: Reminder;
}
