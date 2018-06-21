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
  MatProgressSpinnerModule
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
    MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
