/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsServiceService } from './items.service';

describe('Service: ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsServiceService],
    });
  });

  it('should ...', inject(
    [ItemsServiceService],
    (service: ItemsServiceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
