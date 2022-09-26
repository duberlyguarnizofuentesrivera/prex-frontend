import {TestBed} from '@angular/core/testing';

import {ReceiverServiceService} from './receiver-service.service';

describe('ReceiverServiceService', () => {
  let service: ReceiverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
