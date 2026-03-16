import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './components/header/header';
import { DownloadButton } from './components/download-button/download-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Header, DownloadButton],
  templateUrl: './app.html',
})
export class App implements OnInit {
  barMessage = '';
  isDarkMode = true;

  ngOnInit() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    let saludo;
    if (hour >= 1 && hour < 12) saludo = 'BUEN_DÍA';
    else if (hour >= 12 && hour < 18) saludo = 'BUENAS_TARDES';
    else saludo = 'BUENAS_NOCHES';

    this.barMessage = `▓▒░ ▸ ${saludo} // FELIZ_${days[day].toUpperCase()} ▸ ░▒▓`;
  }

  toggleDarkMode() {
    const page = document.querySelector('.color_cv');
    page?.classList.toggle('light');
    this.isDarkMode = !this.isDarkMode;
  }
}
