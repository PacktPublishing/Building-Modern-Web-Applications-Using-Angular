import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'add-book-dialog',
  styleUrls: ['./add-book-dialog.component.scss'],
  templateUrl: './add-book-dialog.component.html'
})
export class AddBookDialogComponent  {
  constructor(private dialogRef: MdDialogRef<AddBookDialogComponent>) {}
}
