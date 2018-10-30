import { TestBed, inject } from '@angular/core/testing';

import { ClassementsService } from './classements.service';

describe('ClassementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassementsService]
    });
  });

  it('should be created', inject([ClassementsService], (service: ClassementsService) => {
    expect(service).toBeTruthy();
  }));
});
