import { Component, OnInit, Input } from '@angular/core';

import { Task, Category } from '../../shared';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() selectedCategories: Category[];

  constructor() { }

  ngOnInit(): void {
  }

}
