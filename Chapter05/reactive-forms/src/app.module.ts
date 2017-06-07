import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationReactiveFormComponent } from './registration-reactive-form/registration-reactive-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, RegistrationReactiveFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }