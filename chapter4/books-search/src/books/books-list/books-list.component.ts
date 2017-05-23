import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'books-list',
  styles: [`
    .book-item {
      margin-bottom: 1rem;
    }

    .cover-image-container {
      width: 100%;
    }

    .cover-image-container img {
      width: 100%;
      vertical-align: 0;
      border: 0;
    }
  `],
  template: `
    <div class="row mt-1">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-3 book-item" *ngFor="let book of books">
            <div class="cover-image-container">
              <img [src]="book.coverImage" alt="cover image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BooksListComponent {
  @Input() books: Book[] = [];
}

