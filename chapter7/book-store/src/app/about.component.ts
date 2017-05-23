import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  template: `
    <div>
      <h4>{{heading}}</h4>
      <p class="message">{{content}}</p>
    </div>
  `,
})
export class AboutComponent {
  heading = 'This is About Page';
  content = '';
}
