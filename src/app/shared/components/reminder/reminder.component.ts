import { Component, OnInit, forwardRef, StaticProvider } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export const REMINDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ReminderComponent),
  multi: true
};

export const REMINDER_VALIDATOR: StaticProvider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ReminderComponent),
  multi: true
};

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
  providers: [REMINDER_VALUE_ACCESSOR, REMINDER_VALIDATOR]
})
export class ReminderComponent
  implements OnInit, ControlValueAccessor, Validator {
  reminderForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reminderForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required])
    });
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.reminderForm.valid
      ? null
      : { invalidForm: { valid: false, message: 'Invalid reminder' } };
  }

  registerOnValidatorChange?(fn: () => void): void {}

  writeValue(obj: any): void {
    this.reminderForm.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.reminderForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
