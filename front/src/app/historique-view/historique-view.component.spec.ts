import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueViewComponent } from './historique-view.component';

describe('HistoriqueViewComponent', () => {
  let component: HistoriqueViewComponent;
  let fixture: ComponentFixture<HistoriqueViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
