import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
