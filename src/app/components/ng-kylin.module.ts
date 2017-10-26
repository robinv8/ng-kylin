import {NgModule} from '@angular/core';

import {NkButtonModule} from './button/nk-button.module';
import {NkDropdownModule} from './dropdown/nk-dropdown.module';

export {NkButtonModule} from './button/nk-button.module';
export {NkDropdownModule} from './dropdown/nk-dropdown.module';

export {NkButtonComponent} from './button/nk-button.component';
export {NkDropdownComponent} from './dropdown/nk-dropdown.component';

@NgModule({
  exports: [
    NkButtonModule,
    NkDropdownModule
  ]
})

export class NgKylinModule {
}
