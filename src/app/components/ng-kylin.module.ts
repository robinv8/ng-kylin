import {NgModule, ModuleWithProviders} from '@angular/core';

import {KyButtonModule} from './button/ky-button.module';


export {KyButtonModule} from './button/ky-button.module';


export {KyButtonComponent} from './button/ky-button.component';


@NgModule({
  exports: [
    KyButtonModule
  ]
})

export class NgKylinModule {
}
