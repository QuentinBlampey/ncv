import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirPartenaireViewComponent } from './devenir-partenaire-view.component';

describe('DevenirPartenaireViewComponent', () => {
  let component: DevenirPartenaireViewComponent;
  let fixture: ComponentFixture<DevenirPartenaireViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevenirPartenaireViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirPartenaireViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
