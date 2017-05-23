import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  describe('heading', () => {

    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('h4'));
      element = debugElement.nativeElement;
    });

    it('should display "This is About Page"', () => {
      fixture.detectChanges();
      expect(element.textContent).toContain(component.heading);
    });

    it('should display "new heading"', () => {
      fixture.detectChanges();

      const previousHeading = component.heading;
      component.heading = 'new heading';

      expect(element.textContent).toContain(previousHeading);
      expect(element.textContent).not.toContain(component.heading);

      fixture.detectChanges();
      expect(element.textContent).toContain(component.heading);
    });

  });

  describe('content', () => {

    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('.message'));
      element = debugElement.nativeElement;
    });

    it('should be empty', () => {
      fixture.detectChanges();
      expect(element.textContent).toBe(component.content);
    });

    it('should be "new message"', () => {
      component.content = 'new message';
      fixture.detectChanges();
      expect(element.textContent).toBe(component.content);
    });

  });
});
