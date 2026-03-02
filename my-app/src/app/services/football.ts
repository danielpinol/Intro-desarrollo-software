import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private url = 'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=barcelona';

  constructor(private http: HttpClient) {}

  getTeam(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}