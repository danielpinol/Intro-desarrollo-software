import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private http = inject(HttpClient);

  private footballUrl = 'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=barcelona';

  getTeam(): Observable<unknown> {
    return this.http.get<unknown>(this.footballUrl);
  }
}
