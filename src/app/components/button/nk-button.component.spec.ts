import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyButtonComponent } from './nk-button.component';

describe('ButtonComponent', () => {
  let component: KyButtonComponent;
  let fixture: ComponentFixture<KyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
