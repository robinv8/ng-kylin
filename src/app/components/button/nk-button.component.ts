import {Component, Renderer2, ElementRef, AfterContentInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: '[nk-button]',
  templateUrl: './nk-button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nk-button.component.scss']
})
export class NkButtonComponent implements AfterContentInit {
  _el: HTMLElement;
  nativeElement: HTMLElement;
  _prefixCls = 'ky-btn';
  _type: string;
  _size: string;
  _classList: Array<string> = [];

  @Input()
  get nkType() {
    return this._type;
  }

  set nkType(value) {
    this._type = value;
    this._setClass();
  }

  @Input()
  get nkSize() {
    return this._size;
  }

  set nkSize(value: string) {
    this._size = value;
    this._setClass();
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
    this._renderer.addClass(this._el, this._prefixCls);
  }

  ngAfterContentInit() {
    console.log('测试成功~');
  }

  _setClass(): void {
    this._classList = [
      this.nkType && `${this._prefixCls}-${this.nkType}`,
      this.nkSize && `${this._prefixCls}-${this.nkSize}`
    ].filter(item => {
      return item;
    });

    this._classList.forEach(_className => {
      this._renderer.addClass(this._el, _className);
    });
  }
}
