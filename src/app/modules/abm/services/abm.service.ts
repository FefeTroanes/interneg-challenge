import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AbmService {

  constructor(private http: HttpClient) { }

  private readonly URL = 'https://interneg.ddns.net/api-challenge'


  this = localStorage.getItem('ATO');

  getAllClients$(recurso: string): Observable<any> {
    console.log(`Recurso: ${recurso}`)

    let token = localStorage.getItem('ATO');
    let headers = new HttpHeaders().set("Authorization", `${token}`);
    return this.http.get(`${this.URL}/${recurso}`, {headers: headers});
  }
}