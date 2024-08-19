import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private apiUrl = 'https://smarty.kerzz.com:4004/api/mock/getFeed';
  private apiKey = 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2';

  constructor(private http: HttpClient) { }

  getFeed(lat: number, lng: number, skip: number = 0, limit: number = 200): Observable<any> {
    const headers = new HttpHeaders({
      'apiKey': this.apiKey,
      'Content-Type': 'application/json'
    });

    const body = {
      latitude: lat,
      longitude: lng,
      skip: skip,
      limit: limit
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        console.log('API Yanıtı22:', response); // API yanıtını kontrol edin
        return response;
      })
    );
  }



  getFeedData(): Observable<any> {
    const headers = new HttpHeaders({
      'apiKey': this.apiKey,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, {}, { headers });
  }
}
