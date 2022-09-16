import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardAnalogClockComponent } from './card-analog-clock/card-analog-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAnalogClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
