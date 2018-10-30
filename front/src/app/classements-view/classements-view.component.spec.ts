import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementsViewComponent } from './classements-view.component';

describe('ClassementsViewComponent', () => {
  let component: ClassementsViewComponent;
  let fixture: ComponentFixture<ClassementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
