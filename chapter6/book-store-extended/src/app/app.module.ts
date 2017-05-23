import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about.component';
import { Safe } from './safe';

import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
