import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'https://smarty.kerzz.com:4004/api/mock/storeInfo';
  private apiKey = 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2';

  constructor(private http: HttpClient) { }

  getStoreInfo(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'apiKey': this.apiKey,
      'Content-Type': 'application/json'
    });

    const body = {
      id: id
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
