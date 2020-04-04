import { TestBed } from '@angular/core/testing';

import { MyZumoService } from './my-zumo.service';

describe('MyZumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyZumoService = TestBed.get(MyZumoService);
    expect(service).toBeTruthy();
  });
});
