import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosPartenairesViewComponent } from './nos-partenaires-view.component';

describe('NosPartenairesViewComponent', () => {
  let component: NosPartenairesViewComponent;
  let fixture: ComponentFixture<NosPartenairesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosPartenairesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosPartenairesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
