import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NkButtonComponent} from './nk-button.component';

@NgModule({
  declarations: [
    NkButtonComponent
  ],
  exports: [
    NkButtonComponent
  ],
  imports: [CommonModule]
})

export class NkButtonModule {
}
