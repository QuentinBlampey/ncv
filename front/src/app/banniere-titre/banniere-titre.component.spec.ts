import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereTitreComponent } from './banniere-titre.component';

describe('BanniereTitreComponent', () => {
  let component: BanniereTitreComponent;
  let fixture: ComponentFixture<BanniereTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanniereTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanniereTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
