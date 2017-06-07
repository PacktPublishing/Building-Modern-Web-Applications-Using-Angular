import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookSearchComponent, BooksListComponent } from './books/index';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BooksListComponent,
    BookSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
