import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hello-world-app',
  template: '<h1>Say Hello to Angular</h1>'
})
class HelloWorldAppComponent {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldAppComponent],
  bootstrap: [HelloWorldAppComponent]
})
class HelloWorldAppModule {
}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
