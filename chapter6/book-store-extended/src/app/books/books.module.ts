import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';

import { BookStoreService } from './book-store.service';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    BooksRoutingModule
  ],
  providers: [BookStoreService]
})
export class BooksModule {
}
