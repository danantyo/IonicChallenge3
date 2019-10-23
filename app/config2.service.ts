import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config2Service {
private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com';
   
   public readonly apiDaftarKomentar: string = this.baseUrl + '/comments';
   public readonly apiViewKomentar: string = this.baseUrl + '/comments'; // Endpoint = /comments/:id
  constructor() { }
}
