import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import React from 'react'
import ReactDOM from 'react-dom'

import 'qia-widgets'

import { AppComponent } from './app.component'

// @ts-ignore
window.React = React
// @ts-ignore
window.ReactDOM = ReactDOM

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
