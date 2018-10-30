import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcvViewComponent } from './ncv-view.component';

describe('NcvViewComponent', () => {
  let component: NcvViewComponent;
  let fixture: ComponentFixture<NcvViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcvViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcvViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
