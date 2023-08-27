import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {Client} from "../../../core/models/client.model";
// import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AbmService {

  data: Observable<any> | undefined;
  client: Observable<Client> | undefined;
  constructor(private http: HttpClient) { }

  private readonly URL = 'https://interneg.ddns.net/api-challenge'


  this = localStorage.getItem('ATO');

  getAllClients$(recurso: string): Observable<any> {
    let token = localStorage.getItem('ATO');
    let headers = new HttpHeaders().set("Authorization", `${token}`);
    this.data = this.http.get(`${this.URL}/${recurso}`, {headers: headers});
    return this.data;
  }

  createClient$(client: Client): Observable<Client>  {
    let token = localStorage.getItem('ATO');
    let headers = new HttpHeaders().set("Authorization", `${token}`);
    this.client = this.http.post<Client>(`${this.URL}/clientes`, client, {headers: headers});
    this.client.subscribe(data => {
      console.log(data);
    })
    return this.client;
  }

  paginationControl$(recurso: string, cantidad: number, pagina: number): Observable<any> {
    let token = localStorage.getItem('ATO');
    let headers = new HttpHeaders().set("Authorization", `${token}`);
    this.data = this.http.get(`${this.URL}/${recurso}?take=${cantidad}&page=${pagina}`, {headers: headers});
    return this.data;
  }
}
