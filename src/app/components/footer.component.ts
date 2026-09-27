import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="container footer-content">
        <div class="footer-left">
          <a href="#hero" class="brand-logo footer-logo">
            <span class="logo-accent">&lt;</span>Ammar<span class="logo-accent">/&gt;</span>
          </a>
          <p class="footer-desc">
            Crafting resilient, scalable enterprise architectures with .NET Core & Angular.
          </p>
        </div>

        <div class="footer-center">
          <ul class="footer-nav">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-right">
          <div class="footer-badge">
            <i class="fa-solid fa-shield-heart"></i>
            <span>Built with Angular 17+ & TypeScript</span>
          </div>
          <p class="copyright">
            &copy; {{ currentYear }} {{ portfolioService.developerName() }}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly portfolioService = inject(PortfolioService);
  readonly currentYear = new Date().getFullYear();
}
