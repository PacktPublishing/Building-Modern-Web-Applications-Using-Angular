import { Component } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent {
  EMAIL_REGEX = "[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*";
  PASSWORD_STRENGTH_REGEX = "(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}";

  onSubmit(formValue: object) {
    console.log(formValue);
  }
}
