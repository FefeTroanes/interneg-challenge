import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  readonly apiUrl: string = 'https://interneg.ddns.net/api-challenge';

  sendCredentials(username: string, password: string): Observable<Response> {
    let url = `${this.apiUrl}/login`;

    let credentials = {
      username: username,
      password: password
    };

    return this.http.post<Response>(url, credentials);
  }
}
