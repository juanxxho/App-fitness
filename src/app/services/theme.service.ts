import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'fitness_theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const currentTheme = this.isDarkTheme();
    const newTheme = currentTheme ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  isDarkTheme(): boolean {
    return localStorage.getItem(this.THEME_KEY) === 'dark';
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark';
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Default to light theme
      this.setTheme('light');
    }
  }
}
