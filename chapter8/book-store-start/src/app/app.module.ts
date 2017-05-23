import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Safe } from './safe';

import { BookStoreService } from './books';

@NgModule({
  declarations: [
    AppComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
