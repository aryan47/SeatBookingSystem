/*
 * Created on Sat Nov 30 2019
 * Created by - Ritesh Kant
 *
 */
import { TestBed } from '@angular/core/testing';

import { SeatServiceService } from './seat-service.service';

describe('SeatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatServiceService = TestBed.get(SeatServiceService);
    expect(service).toBeTruthy();
  });
});
