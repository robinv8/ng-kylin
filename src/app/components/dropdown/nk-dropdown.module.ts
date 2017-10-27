import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NkDropdownComponent} from './nk-dropdown.component';
import {NkDropdownDirective} from './nk-dropdown.directive';

@NgModule({
  declarations: [
    NkDropdownComponent,
    NkDropdownDirective
  ],
  exports: [
    NkDropdownComponent,
    NkDropdownDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NkDropdownModule {

}
