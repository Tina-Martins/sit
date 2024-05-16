import { TestBed } from '@angular/core/testing';

import { AcolhimentosService } from './acolhimentos.service';

describe('AcolhimentosService', () => {
  let service: AcolhimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcolhimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
