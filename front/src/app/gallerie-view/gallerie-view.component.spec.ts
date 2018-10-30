import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerieViewComponent } from './gallerie-view.component';

describe('GallerieViewComponent', () => {
  let component: GallerieViewComponent;
  let fixture: ComponentFixture<GallerieViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerieViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
