import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

import {
  BooksListComponent,
  BookDetailsComponent,
  NewBookComponent,
  BookStoreService
} from './books';

import { Safe } from './safe';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'books/new', component: NewBookComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksListComponent,
    BookDetailsComponent,
    NewBookComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
