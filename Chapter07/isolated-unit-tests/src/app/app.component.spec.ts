import  { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('name is initialized with Angular', () => {
    expect(component.name).toBe('Angular');
  });

  it('name to be Angular UI', () => {
    expect(component.name).toBe('Angular');

    component.name = 'Angular UI';
    expect(component.name).toBe('Angular UI');
  });

});
