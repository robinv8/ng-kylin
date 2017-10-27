import {
  Component,
  Renderer2,
  AfterContentInit,
  ViewEncapsulation,
  ContentChild,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {NkDropdownDirective} from './nk-dropdown.directive';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'nk-dropdown',
  templateUrl: './nk-dropdown.component.html',
  styleUrls: ['./nk-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NkDropdownComponent implements AfterContentInit {
  @ContentChild(NkDropdownDirective) _nkOrigin;
  isShow = false;
  datas = [
    {label: 'menu1', value: '1'},
    {label: 'menu2', value: '2'},
    {label: 'menu3', value: '3'}
  ];
  @Output() nkVisableChange: EventEmitter<boolean> = new EventEmitter();
  @Input() nkTrigger: 'click' | 'hover' = 'hover';

  constructor(private renderer: Renderer2) {

  }

  visibleChange(visible: boolean) {
    this.isShow = visible;
  }

  _onMouseEnterEvent() {
    this.nkVisableChange.emit(true);
  }

  _onMouseLeaveEvent(e) {
    this.nkVisableChange.emit(false);
  }

  ngAfterContentInit() {
    let mouse$: Observable<boolean>;
    if (this.nkTrigger === 'hover') {
      mouse$ = Observable.create((observe: Observer<boolean>) => {
        const disposeMouseEnter = this.renderer.listen(this._nkOrigin.elementRef.nativeElement, 'mouseenter', () => {
          observe.next(true);
        });
        const disposeMouseLeave = this.renderer.listen(this._nkOrigin.elementRef.nativeElement, 'mouseleave', () => {
          observe.next(false);
        });
        return () => {
          disposeMouseEnter();
          disposeMouseLeave();
        };
      });
    }
    if (this.nkTrigger === 'click') {
      mouse$ = Observable.create((observer: Observer<boolean>) => {
        const dispose = this.renderer.listen(this._nkOrigin.elementRef.nativeElement, 'click', (e) => {
          e.preventDefault();
          observer.next(true);
        });
        return () => dispose();
      });
    }
    mouse$
      .merge(this.nkVisableChange.asObservable())
      .debounceTime(200)
      .subscribe(x => this.visibleChange(x));
  }

  _getValue(value) {
    console.log(value);
  }
}
