import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import{MatInputModule}from'@angular/material/input';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatCardModule}from'@angular/material/card';
import{MatSelectModule}from'@angular/material/select';
import{MatRadioModule}from'@angular/material/radio';
import{MatButtonModule}from'@angular/material/button';
import{MatDatepickerModule}from'@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';

const Material=[MatToolbarModule,MatCarouselModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
  MatCardModule,
  MatIconModule,
MatNativeDateModule];

@NgModule({
 
  imports: [Material],
  exports: [Material]
  
})
export class MaterialModule { }
