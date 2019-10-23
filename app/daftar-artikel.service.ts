import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DaftarArtikelService {

  artikelChange = new Subject<string[]>();

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }


  getDaftarArtikel() {
    this.http.get<any>(this.config.apiDaftarArtikel)
            .pipe(map(results => {
              return results;
            }))
            .subscribe(resData => {
              this.artikelChange.next(resData);
            });
  }
}