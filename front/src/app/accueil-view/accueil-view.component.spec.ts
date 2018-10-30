import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilViewComponent } from './accueil-view.component';

describe('AccueilViewComponent', () => {
  let component: AccueilViewComponent;
  let fixture: ComponentFixture<AccueilViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
