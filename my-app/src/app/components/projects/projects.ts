import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { GithubService, GithubRepo } from '../../services/github';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects implements OnInit {
  private githubService = inject(GithubService);

  repos = signal<GithubRepo[]>([]);
  myFirstRepo = signal<GithubRepo | null>(null);

  ngOnInit() {
    this.githubService.getRepos().subscribe(data => {
      this.repos.set(data);
    });

    this.githubService.getMyFirstRepo().subscribe(data => {
      this.myFirstRepo.set(data);
    });
  }
}
