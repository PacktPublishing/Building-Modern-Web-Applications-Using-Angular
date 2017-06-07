import { Component } from '@angular/core';

@Component({
  selector: 'books-container',
  template: `
    <md-tab-group>
      <md-tab label="Master Detail">
        <div fxFlex class="master-detail-container">
          <bl-master-detail fxFlex></bl-master-detail>
        </div>
      </md-tab>
      <md-tab label="List">
        <div fxFlex class="books-list-container">
          <bl-list fxFlex></bl-list>
        </div>
      </md-tab>
    </md-tab-group>
  `,
  styles: [`
    .master-detail-container {
      height: calc(100vh - 113px);
      overflow: hidden;
      padding: 1rem;
    }

    .books-list-container {
      height: 100%;
      padding: 1rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `]
})
export class BooksContainerComponent {
}
