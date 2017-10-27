import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {NgKylinModule} from '../../../index.show';

const HOME_ROUTE = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTE),
    NgKylinModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
