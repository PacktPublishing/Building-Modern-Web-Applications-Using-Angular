import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h4 class="p-4">
        TIME: {{timer$ | async | date: 'mediumTime'}}
      </h4>
    </div>
  `
})
export class AppComponent {

  timer$ = Observable.interval(1000)
    .map(event => new Date());
}
