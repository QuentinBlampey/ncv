import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvgViewComponent } from './cvg-view.component';

describe('CvgViewComponent', () => {
  let component: CvgViewComponent;
  let fixture: ComponentFixture<CvgViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvgViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
