import { Reminder } from 'shared/components/reminder/models';
import { BaseItem } from 'shared/models/base-item.model';

export class Task extends BaseItem{
  id: number;
  title: string;
  description?: string;
  priority?: number;
  reminder?: Reminder;
  subList?: Task[];
}
