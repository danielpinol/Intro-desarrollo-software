import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);

  private reposUrl = 'https://api.github.com/users/danielpinol/repos';
  private myFirstRepoUrl = 'https://api.github.com/repos/dannypinol/MyFirstRepo';

  getRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(this.reposUrl);
  }

  getMyFirstRepo(): Observable<GithubRepo> {
    return this.http.get<GithubRepo>(this.myFirstRepoUrl);
  }
}
