import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
