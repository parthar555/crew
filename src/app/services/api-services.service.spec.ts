import { TestBed } from '@angular/core/testing';
import { ApiServices } from './api-services.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiServices', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let services: ApiServices;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    services = new ApiServices(httpClientSpy)
  });

  it('should get all crew list from api', () => {
    httpClientSpy.get.and.returnValue(of([]));
    services.getCrewList().subscribe({
      next: (data) => {
        expect(data).toEqual([])
      }
    })
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
