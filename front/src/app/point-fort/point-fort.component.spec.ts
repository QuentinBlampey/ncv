import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointFortComponent } from './point-fort.component';

describe('PointFortComponent', () => {
  let component: PointFortComponent;
  let fixture: ComponentFixture<PointFortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointFortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointFortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
