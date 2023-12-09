import { TestBed } from '@angular/core/testing';

import { GetCoachServiceService } from './get-coach-service.service';

describe('GetCoachServiceService', () => {
  let service: GetCoachServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCoachServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
