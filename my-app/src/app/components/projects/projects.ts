import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { GithubService } from '../../services/github';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getRepos().subscribe(data => {
      this.repos = data;
    });
  }
}