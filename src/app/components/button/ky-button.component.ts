import {Component, Renderer2, ElementRef, AfterContentInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[ky-button]',
  templateUrl: './ky-button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ky-button.component.scss']
})
export class KyButtonComponent implements AfterContentInit {

  _el: HTMLElement;
  nativeElement: HTMLElement;
  _prefixCls = 'ky-btn';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
    this._renderer.addClass(this._el, this._prefixCls);
  }

  ngAfterContentInit() {
    console.log('测试成功~');
  }

  _setClass(): void {
  }
}
