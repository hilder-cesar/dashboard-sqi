import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private baseUrl: string = environment.baseUrl;

  constructor (
    private httpClient: HttpClient,
    private alert: AlertService
  ) { }

  get(route: string, showLoading = true): Observable<any> {
    if (showLoading) { this.alert.initRequest(); }
    return this.httpClient.get(`${this.baseUrl}/api/v1/${route}`);
  }

  post(route: string, value: any, showLoading = true): Observable<any> {
    if (showLoading) { this.alert.initRequest(); }
    return this.httpClient.post(`${this.baseUrl}/api/v1/${route}`, value);
  }

  patch(route: string, value: any, showLoading = true): Observable<any> {
    if (showLoading) { this.alert.initRequest(); }
    return this.httpClient.patch(`${this.baseUrl}/api/v1/${route}`, value);
  }

  delete(route: string, showLoading = true): Observable<any> {
    if (showLoading) { this.alert.initRequest(); }
    return this.httpClient.delete(`${this.baseUrl}/api/v1/${route}`);
  }

}
