import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { CurrencyPipe } from './pipes/currency.pipe';



@NgModule({
  declarations: [ListingComponent, CurrencyPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
