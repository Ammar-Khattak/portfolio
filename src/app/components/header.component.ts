import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled()">
      <div class="container header-container">
        <a href="#hero" class="brand-logo" aria-label="Home">
          <span class="logo-accent">&lt;</span>Ammar<span class="logo-accent">/&gt;</span>
          <span class="logo-tag">.NET &bull; Angular</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-menu" [class.open]="isMobileMenuOpen()" id="nav-menu" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#hero" (click)="closeMobileMenu()" class="nav-link">Home</a></li>
            <li><a href="#about" (click)="closeMobileMenu()" class="nav-link">About</a></li>
            <li><a href="#skills" (click)="closeMobileMenu()" class="nav-link">Skills</a></li>
            <li><a href="#projects" (click)="closeMobileMenu()" class="nav-link">Projects</a></li>
            <li><a href="#experience" (click)="closeMobileMenu()" class="nav-link">Experience</a></li>
            <li><a href="#contact" (click)="closeMobileMenu()" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- Actions -->
        <div class="header-actions">
          <!-- Theme Toggle -->
          <button (click)="themeService.toggleTheme()" class="icon-btn" aria-label="Toggle theme" title="Toggle Dark/Light Mode">
            <i class="fa-solid fa-moon" *ngIf="themeService.currentTheme() === 'light'"></i>
            <i class="fa-solid fa-sun" *ngIf="themeService.currentTheme() === 'dark'"></i>
          </button>

          <!-- Quick Resume Modal Button -->
          <button (click)="portfolioService.openResumeModal()" class="btn btn-outline btn-sm">
            <i class="fa-regular fa-file-lines"></i>
            <span>Resume</span>
          </button>

          <!-- Mobile Toggle -->
          <button (click)="toggleMobileMenu()" class="icon-btn mobile-only" aria-label="Toggle mobile menu">
            <i class="fa-solid fa-bars" *ngIf="!isMobileMenuOpen()"></i>
            <i class="fa-solid fa-xmark" *ngIf="isMobileMenuOpen()"></i>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  readonly portfolioService = inject(PortfolioService);

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
