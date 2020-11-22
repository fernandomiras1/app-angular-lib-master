import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NGZButtonModule } from '@my-zumo/core/components/button';
import { NGZHeaderModule } from '@my-zumo/core/components/header';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NGZButtonModule,
    NGZHeaderModule
  ],
  exports: [ 
    NGZButtonModule,
    NGZHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
