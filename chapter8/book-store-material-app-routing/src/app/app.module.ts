import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { Safe } from './safe';

import { AppMaterialModule } from './app-material.module';

import {
  BookStoreService,
  MasterDetailComponent,
  ListComponent,
  AddBookDialogComponent,
  BooksContainerComponent
} from './books';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksContainerComponent },
  {path: 'registration', component: UserRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Safe,
    MasterDetailComponent,
    ListComponent,
    AddBookDialogComponent,
    BooksContainerComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookStoreService],
  entryComponents: [AddBookDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
