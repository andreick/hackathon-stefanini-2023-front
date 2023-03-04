import { TestBed } from '@angular/core/testing';

import { StefamonInicialService } from './stefamon-inicial.service';

describe('StefamonInicialService', () => {
  let service: StefamonInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StefamonInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
