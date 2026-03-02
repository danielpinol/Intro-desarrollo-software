import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = 'https://api.github.com/users/danielpinol/repos';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}