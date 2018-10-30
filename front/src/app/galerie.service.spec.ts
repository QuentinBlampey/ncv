import { TestBed, inject } from '@angular/core/testing';

import { GalerieService } from './galerie.service';

describe('GalerieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalerieService]
    });
  });

  it('should be created', inject([GalerieService], (service: GalerieService) => {
    expect(service).toBeTruthy();
  }));
});
