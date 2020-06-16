import { TestBed } from '@angular/core/testing';

import { ChangeLiveService } from './change-live.service';

describe('ChangeLiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeLiveService = TestBed.get(ChangeLiveService);
    expect(service).toBeTruthy();
  });
});
