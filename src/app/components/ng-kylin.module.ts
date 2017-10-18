import {NgModule} from '@angular/core';

import {NkButtonModule} from './button/nk-button.module';


export {NkButtonModule} from './button/nk-button.module';


export {NkButtonComponent} from './button/nk-button.component';


@NgModule({
  exports: [
    NkButtonModule
  ]
})

export class NgKylinModule {
}
