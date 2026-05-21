import { TestBed } from '@angular/core/testing';

import { cancions } from './cancions';

describe('cancions', () => {
  let service: cancions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cancions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
