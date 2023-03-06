import { TestBed } from '@angular/core/testing';

import { JogadorLoginService } from './jogador-login.service';

describe('JogadorLoginService', () => {
  let service: JogadorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
