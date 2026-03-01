import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
})
export class Experience {
  showExperience = true;

  toggleExperience() {
    this.showExperience = !this.showExperience;
  }
}