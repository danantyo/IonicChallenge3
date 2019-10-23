import { TestBed } from '@angular/core/testing';

import { DaftarKomentarService } from './daftar-komentar.service';

describe('DaftarKomentarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaftarKomentarService = TestBed.get(DaftarKomentarService);
    expect(service).toBeTruthy();
  });
});
