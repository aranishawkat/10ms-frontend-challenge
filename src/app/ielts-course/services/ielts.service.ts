import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IeltsService {
  private apiUrl = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course';

  constructor(private http: HttpClient) {
  }

  getIeltsCourse(lang: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': 'application/json'
    });

    const params = new HttpParams()
      .set('lang', lang);

    return this.http.get(this.apiUrl, {headers, params});
  }
}
