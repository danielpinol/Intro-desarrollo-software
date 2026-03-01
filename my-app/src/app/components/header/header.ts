import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
})
export class Header {
  showContact = false;
  isDarkMode = true;

  toggleContact() {
    this.showContact = !this.showContact;
  }

  toggleDarkMode() {
    const page = document.querySelector('.color_cv');
    page?.classList.toggle('light');
    this.isDarkMode = !this.isDarkMode;
  }
}