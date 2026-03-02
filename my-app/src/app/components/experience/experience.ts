import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './experience.html',
})
export class Experience {
  showExperience = true;

  toggleExperience() {
    this.showExperience = !this.showExperience;
  }
}