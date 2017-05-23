import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BookDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
