import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('suggestions') suggestions: ElementRef;
  bookTitles: Array<string> = [];
  searchInputTerm: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .debounceTime(400)
      .distinctUntilChanged()
      .map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value)
      .switchMap(title => this.bookStoreService.getBookTitles(title))
      .subscribe(bookTitles => this.bookTitles = bookTitles);

    Observable.fromEvent(this.suggestions.nativeElement, 'click')
      .map((event: KeyboardEvent) => (<HTMLInputElement>event.srcElement).innerText)
      .subscribe(res => {
        this.searchInputTerm = res;
        this.bookTitles = [];
      });
  }

  searchBooks() {
    this.bookTitles = [];
    this.search.emit(this.searchInputTerm);
  }
}
