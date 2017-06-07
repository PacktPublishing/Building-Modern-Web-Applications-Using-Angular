import { Component } from '@angular/core';

@Component({
  selector: 'display-data-app',
  template: `
    <h1>{{message}}</h1>
    <input type="text" value="{{message}}"/>
  `
})
export class AppComponent {
  message: string = 'Data Binding in Angular – Interpolation Syntax';
}
