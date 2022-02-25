/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ItemsServiceService } from './items.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
