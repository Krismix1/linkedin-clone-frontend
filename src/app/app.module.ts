import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { BodyComponent } from './body/body.component';
//import { Routes, RouterModule } from '@angular/router';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, BodyComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
})
export class AppModule {}
