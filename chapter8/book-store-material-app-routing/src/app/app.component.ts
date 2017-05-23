import { Component } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';
import { AddBookDialogComponent, BookStoreService } from './books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    md-sidenav {
      width: 300px;
    }
  `]
})
export class AppComponent {
  links = [
    { name: 'Books', path: 'books' },
    { name: 'Registration', path: 'registration' }
  ];

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar, private bookStoreService: BookStoreService) {
  }

  openAddBookDialog() {
    this.dialog.open(AddBookDialogComponent)
      .afterClosed()
      .filter(book => !!book)
      .switchMap(book => this.bookStoreService.addBook(book))
      .subscribe(result => {
        if (result.ok) {
          this.openSnackBar();
        }
      });
  }

  openSnackBar() {
    this.snackBar.open('Book Added', 'CLOSE', {
      duration: 1000
    });
  }
}
