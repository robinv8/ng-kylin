import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {RouterModule} from '@angular/router';
// import {NgKylinModule} from '../../../../index.show';

const BUTTON_ROUTE = [
  {path: '', component: ButtonComponent}
];

@NgModule({
  imports: [
    CommonModule,
    // NgKylinModule,
    RouterModule.forChild(BUTTON_ROUTE)
  ],
  declarations: [
    ButtonComponent,
  ]
})
export class ButtonModule {
}
