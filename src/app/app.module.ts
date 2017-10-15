import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NgKylinModule} from '../../publish/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgKylinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
