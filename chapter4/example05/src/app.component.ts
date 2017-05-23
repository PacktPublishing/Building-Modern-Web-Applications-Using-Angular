import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <div class="container p-4">
      <input #text class="form-control mt-2" />
      <button #btn class="btn primary mt-3">Show Message!</button>
      <p class="mt-1">{{message}}</p>
    </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('btn') btn: ElementRef;
  @ViewChild('text') text: ElementRef;
  message: string;

  ngOnInit() {
    const btnOb$ = Observable.fromEvent(this.btn.nativeElement, 'click')
      .map(event => 'Hello Angular, RxJS!');

    const textOb$ = Observable.fromEvent(this.text.nativeElement, 'change')
      .map((event: Event) => (<HTMLInputElement>event.target).value);

    Observable.merge(btnOb$, textOb$)
      .subscribe(res => this.message = res);
  }
}
