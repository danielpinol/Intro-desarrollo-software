import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  skills = ['Programación', 'Microsoft Office', 'Trabajo en equipo', 'Liderazgo', 'Inteligencia Artificial', 'Angular', 'TypeScript', 'CSS'];
  jobs = ['Entrenador de Fútbol', 'Modelo para anuncios publicitarios'];
}