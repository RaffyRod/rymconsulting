import { TestBed } from '@angular/core/testing';

import { DatapaginaService } from './datapagina.service';

describe('DatapaginaService', () => {
  let service: DatapaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
