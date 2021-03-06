import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercaseDirective } from './core/directive/uppercase.directive';
import { FormatDatePipe } from './core/pipes/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseDirective,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
