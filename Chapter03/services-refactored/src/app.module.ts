import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* /index is not required, we are mentioning this only because of SystemJS configuration */
import { BooksListComponent, BookDetailsComponent } from './books/index';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
