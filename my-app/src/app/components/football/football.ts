import { Component, OnInit } from '@angular/core';
import { NgIf, SlicePipe } from '@angular/common';
import { FootballService } from '../../services/football';

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [NgIf, SlicePipe],
  templateUrl: './football.html',
})
export class Football implements OnInit {
  team: any = null;

  constructor(private footballService: FootballService) {}

  ngOnInit() {
    this.footballService.getTeam().subscribe(data => {
      this.team = data.teams[0];
    });
  }
}