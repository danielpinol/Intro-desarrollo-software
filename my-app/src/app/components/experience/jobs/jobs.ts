import { Component } from '@angular/core';
import { NgFor, UpperCasePipe } from '@angular/common';
import { DataService } from '../../../services/data';
import { CapitalizePipe } from '../../../pipes/capitalize-pipe';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor, UpperCasePipe, CapitalizePipe],
  templateUrl: './jobs.html',
})
export class Jobs {
  jobs: string[];

  constructor(private dataService: DataService) {
    this.jobs = dataService.jobs;
  }
}