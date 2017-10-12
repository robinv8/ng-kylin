import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KyButtonComponent} from './ky-button.component';

@NgModule({
  declarations: [
    KyButtonComponent
  ],
  exports: [
    KyButtonComponent
  ],
  imports: [CommonModule]
})

export class KyButtonModule {
}
