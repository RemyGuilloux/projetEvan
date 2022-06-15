import { TestBed } from '@angular/core/testing';

import { ProjetEvanService } from './projet-evan.service';

describe('ProjetEvanService', () => {
  let service: ProjetEvanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetEvanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
