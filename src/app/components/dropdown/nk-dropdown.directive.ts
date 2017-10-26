import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[nk-dropdown]'
})
export class NkDropdownDirective {
  @HostBinding('class.nk-dropdown-trigger') _dropDownTrigger = true;
  constructor(public elementRef: ElementRef) {
  }

}
