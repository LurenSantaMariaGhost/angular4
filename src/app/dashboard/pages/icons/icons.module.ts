import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [CommonModule,MatCardModule, MatIconModule],
  exports: [IconsComponent],
})
export class IconsModule { }
