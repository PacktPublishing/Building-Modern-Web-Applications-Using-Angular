import { Component } from '@angular/core';

@Component({
  selector: 'display-data-app',
  template: `
	  <div>
	    <h1 [textContent]="message"></h1>
	    <input type="text" [value]="message"/>
	  </div>
  `
})
export class AppComponent {
  message: string = 'Angular – Property Binding Syntax';
}
