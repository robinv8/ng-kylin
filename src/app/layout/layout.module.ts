import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout.component";
import { LayoutRouting } from "./layout.routing";
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent
  ]
})
export class LayoutModule { }
