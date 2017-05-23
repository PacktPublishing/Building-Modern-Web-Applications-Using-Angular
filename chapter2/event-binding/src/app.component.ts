import { Component } from '@angular/core';

@Component({
  selector: 'event-binding-app',
  template: `
    <div>
      <h1>{{message}}</h1>
      <input type="text" (keypress)="showMessage($event)"/>
    </div>
  `
})
export class AppComponent {
  message: string = 'Angular – Event Binding';

  showMessage(onKeyPressEvent: KeyboardEvent) {
    this.message = (<HTMLInputElement>onKeyPressEvent.target).value;
  }
}
