import {NgModule, ModuleWithProviders} from '@angular/core';

import {KyButtonModule} from './button/nk-button.module';


export {KyButtonModule} from './button/nk-button.module';


export {NkButtonComponent} from './button/nk-button.component';


@NgModule({
  exports: [
    KyButtonModule
  ]
})

export class NgKylinModule {
}
