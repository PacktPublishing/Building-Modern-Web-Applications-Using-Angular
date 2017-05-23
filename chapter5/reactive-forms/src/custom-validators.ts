import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static passwordStrength(control: AbstractControl) {

    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }

    return control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/) ? null : { 'weakPassword': true };
  }

  static passwordMatcher(control: AbstractControl) {

    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (CustomValidators.isEmptyValue(password) || CustomValidators.isEmptyValue(confirmPassword)) {
      return null;
    }

    return password === confirmPassword ? null : { 'mismatch': true };
  }

  static isEmptyValue(value: any) {
    return value === null || typeof value === 'string' && value.length === 0;
  }
}
