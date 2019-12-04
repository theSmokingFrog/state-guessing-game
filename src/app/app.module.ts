import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TimestampPipe } from './pipes/timestamp.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimestampPipe
  ],
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {}
