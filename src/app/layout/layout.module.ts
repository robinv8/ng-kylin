import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "./layout.component";
import { LayoutRouting } from "./layout.routing";

@NgModule({
  imports: [
    CommonModule,
    LayoutRouting
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule { }
