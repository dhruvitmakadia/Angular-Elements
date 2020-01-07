import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './directive/uppercase.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';



@NgModule({
  declarations: [UppercaseDirective, FormatDatePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
