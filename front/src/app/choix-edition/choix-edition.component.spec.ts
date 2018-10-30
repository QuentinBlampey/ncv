import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixEditionComponent } from './choix-edition.component';

describe('ChoixEditionComponent', () => {
  let component: ChoixEditionComponent;
  let fixture: ComponentFixture<ChoixEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
