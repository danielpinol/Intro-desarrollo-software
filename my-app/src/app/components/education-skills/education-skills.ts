import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education-skills',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './education-skills.html',
  encapsulation: ViewEncapsulation.None
})
export class EducationSkills {
  searchQuery = '';

  skills = [
    'Programación',
    'Microsoft Office',
    'Trabajo en equipo',
    'Liderazgo',
    'Inteligencia Artificial'
  ];

  get filteredSkills() {
    return this.skills.filter(skill =>
      skill.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}