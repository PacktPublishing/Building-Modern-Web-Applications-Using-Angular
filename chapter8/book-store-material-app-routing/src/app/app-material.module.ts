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
  MdSnackBarModule,
  MdSelectModule,
  MdRadioModule,
  MdCheckboxModule,
  MdSlideToggleModule
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
  MdSnackBarModule,
  MdSelectModule,
  MdRadioModule,
  MdCheckboxModule,
  MdSlideToggleModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class AppMaterialModule { }
