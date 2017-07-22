import { TestBed, inject } from '@angular/core/testing';

import { ImagesServiceService } from './images-service.service';

describe('ImagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesServiceService]
    });
  });

  it('should be created', inject([ImagesServiceService], (service: ImagesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
