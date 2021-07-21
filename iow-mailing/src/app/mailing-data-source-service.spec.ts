import { TestBed } from '@angular/core/testing';

import { MailingDataSourceService } from './mailing-data-source.service';

describe('MailingDataSourceServiceService', () => {
  let service: MailingDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailingDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
