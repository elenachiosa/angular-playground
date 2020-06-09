import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      name: new FormControl('val')
    });

    this.myFormGroup.get('name').valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter(name => name !== ''),
      take(2)
    ).subscribe((value) => {
      console.log(value);
    });
  }
}
