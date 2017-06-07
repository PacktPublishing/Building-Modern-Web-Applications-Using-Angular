import { Component } from '@angular/core';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styles: [`    
    .user-registration-form {
      width: 60%
    }
    .gender-radio-group {
      display: inline-flex;
      flex-direction: row;
    }
    
    .gender-radio-button {
      margin: 5px;
    }
  `]
})
export class UserRegistrationComponent {
  countries: Array<object> = [
    {code: 'CA', name: 'Canada'},
    {code: 'SW', name: 'Switzerland'},
    {code: 'IN', name: 'India'},
    {code: 'UK', name: 'United Kingdom'},
    {code: 'US', name: 'Canada'}
  ];

  genders: Array<string> = [
    'Male',
    'Female',
    'Other'
  ];

  submitUserForm(value: Object) {
    console.log(value);
  }
}
