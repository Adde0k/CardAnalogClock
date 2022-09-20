import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material-module';

import { AppComponent } from './app.component';
import { CardAnalogClockComponent } from './card-analog-clock/card-analog-clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        CardAnalogClockComponent,
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
