import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BaseItem } from 'shared/models/base-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T extends BaseItem> implements OnInit  {

  @Input() list: T[];
  @Input() myTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
