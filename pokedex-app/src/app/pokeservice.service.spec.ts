import { TestBed } from '@angular/core/testing';

import { PokeserviceService } from './pokeservice.service';

describe('PokeserviceService', () => {
  let service: PokeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
