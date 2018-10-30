import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtViewComponent } from './vt-view.component';

describe('VtViewComponent', () => {
  let component: VtViewComponent;
  let fixture: ComponentFixture<VtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
