import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Config2Service } from './config2.service';

@Injectable({
  providedIn: 'root'
})
export class DaftarKomentarService {
	
  komentarChange = new Subject<string[]>();
  
  constructor(
   private config: Config2Service,
   private http: HttpClient
  ) { }
  
  getDaftarKomentar() {
    this.http.get<any>(this.config.apiDaftarKomentar)
            .pipe(map(results => {
              return results;
            }))
            .subscribe(resData => {
              this.komentarChange.next(resData);
            });
  }
}
