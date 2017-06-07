import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding-app',
  template: `
    <div>
      <h1>{{message}}</h1>
      <input type="text" [(ngModel)]="message" />
    </div>
  `
})
export class AppComponent {
  message: string = 'Angular – Two Way Binding';
}
