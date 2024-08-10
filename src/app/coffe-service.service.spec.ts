import { TestBed } from '@angular/core/testing';

import { CoffeServiceService } from './coffe-service.service';

describe('CoffeServiceService', () => {
  let service: CoffeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
