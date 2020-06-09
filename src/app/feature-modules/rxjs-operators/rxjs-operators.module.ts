import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxjsOperatorsComponent } from './rxjs-operators.component';


@NgModule({
  declarations: [RxjsOperatorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RxjsOperatorsModule { }
