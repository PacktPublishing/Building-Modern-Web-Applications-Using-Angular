import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdTabsModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdTabsModule,
  MdProgressSpinnerModule,
  MdCardModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class AppMaterialModule { }
