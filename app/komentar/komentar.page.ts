import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DaftarKomentarService } from '../daftar-komentar.service';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.page.html',
  styleUrls: ['./komentar.page.scss'],
})
export class KomentarPage implements OnInit, OnDestroy {
  
  private komentarSubs: Subscription;
  komentarList: string[];

  constructor(
  private komentarSrv: DaftarKomentarService
  ) {}

  ngOnInit() {
	this.komentarSubs = this.komentarSrv.komentarChange.subscribe((komentar) => {
    this.komentarList = komentar;
  });
  
	this.komentarSrv.getDaftarKomentar();
}

  ngOnDestroy() {
    this.komentarSubs.unsubscribe();
  }
  
    viewKomentar(komentarId) {
    console.log(komentarId);
  }

}
