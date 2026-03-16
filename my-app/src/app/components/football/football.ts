import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { FootballService } from '../../services/football';

interface Team {
  strTeam: string;
  intFormedYear: string;
  strLeague: string;
  strDescriptionEN: string;
}

@Component({
  selector: 'app-football',
  imports: [SlicePipe],
  templateUrl: './football.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Football implements OnInit {
  private footballService = inject(FootballService);

  team = signal<Team | null>(null);

  ngOnInit() {
    this.footballService.getTeam().subscribe(data => {
      const d = data as { teams: Team[] };
      this.team.set(d.teams[0]);
    });
  }
}
