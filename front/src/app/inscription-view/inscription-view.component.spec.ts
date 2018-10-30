import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionViewComponent } from './inscription-view.component';

describe('InscriptionViewComponent', () => {
  let component: InscriptionViewComponent;
  let fixture: ComponentFixture<InscriptionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
