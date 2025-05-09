import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private cat = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = 'live_1lp4Cwyl6E0JLGXiTC9WljWWLNTxeciJ3npivsMwqktSBwSydHX8w9nCIEWj7d7v';


  constructor(private http: HttpClient) { }

  getCatBreeds(): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get(this.cat, { headers}).pipe(
      // catchError((error) => {
      //   alert('ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง');
      //   console.error('API Error:', error);
      //   return throwError(() => error);
      // })
    );
  }
}

