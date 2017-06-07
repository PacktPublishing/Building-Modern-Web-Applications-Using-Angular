import { Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class Safe {
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
