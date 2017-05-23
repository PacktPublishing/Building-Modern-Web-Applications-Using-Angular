import { Component } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent {
  onSubmit (formValue: object) {
    console.log(formValue);
  }
}
