import { Component, OnInit } from '@angular/core';
import { BookStoreService } from './book-store.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  booksList: Book[] = [];
  book: Book;

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.getBooksData();
  }

  getBooksData() {
    this.bookStoreService.getBooksList()
      .subscribe(books => this.booksList = books);
  }

  getBookInfo(id: number) {
    this.bookStoreService.getBook(id)
      .subscribe(book => this.book = book);
  }
}
