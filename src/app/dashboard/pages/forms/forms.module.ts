import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatSelectModule ],
  exports: [FormsComponent],
})
export class FormsModule { }
