import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';

    public readonly apiDaftarArtikel: string = this.baseUrl + '/posts';
    public readonly apiViewArtikel: string = this.baseUrl + '/posts/$[id]'; // Endpoint = /posts/:id
  constructor() { }
}
