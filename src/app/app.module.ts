import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SwimModule } from './swim/swim.module';
import { HomeModule } from './home/home.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, SwimModule, HomeModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
