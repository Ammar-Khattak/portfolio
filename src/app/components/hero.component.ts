import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="status-badge">
            <span class="pulse-dot"></span>
            <span>Available for Senior & Lead Full-Stack Roles</span>
          </div>

          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">{{ portfolioService.developerName() }}</span>
          </h1>

          <p class="hero-subtitle">
            {{ portfolioService.title() }}
          </p>

          <p class="hero-description">
            With <strong>6+ years of specialized experience</strong>, I engineer high-performance, enterprise-grade distributed systems, fintech payment rails, and mission-critical government portals using <strong>.NET Core, ABP Boilerplate, Angular, and SQL Server</strong>.
          </p>

          <!-- Hero Action Buttons -->
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary">
              <span>Explore Enterprise Projects</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" class="btn btn-secondary">
              <i class="fa-regular fa-paper-plane"></i>
              <span>Get In Touch</span>
            </a>
            <button (click)="portfolioService.openResumeModal()" class="btn btn-outline">
              <i class="fa-solid fa-download"></i>
              <span>Download CV</span>
            </button>
          </div>

          <!-- Quick Contact Links -->
          <div class="hero-quick-links">
            <a [href]="'mailto:' + portfolioService.email()" class="quick-link" title="Send Email">
              <i class="fa-solid fa-envelope"></i>
              <span>{{ portfolioService.email() }}</span>
            </a>
            <span class="divider-dot">&bull;</span>
            <span class="quick-link location-badge">
              <i class="fa-solid fa-location-dot"></i>
              <span>{{ portfolioService.location() }}</span>
            </span>
            <span class="divider-dot">&bull;</span>
            <a [href]="'tel:' + portfolioService.phone()" class="quick-link">
              <i class="fa-solid fa-phone"></i>
              <span>{{ portfolioService.phone() }}</span>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="avatar-card">
            <div class="avatar-glow"></div>
            <div class="avatar-img-wrap">
              <img src="assets/avatar.jpg" [alt]="portfolioService.developerName()" class="avatar-img" width="400" height="400" loading="eager">
            </div>

            <!-- Floating Tech Badges -->
            <div class="floating-badge badge-top-right">
              <i class="fa-brands fa-angular icon-angular"></i>
              <div>
                <strong>Angular 17+</strong>
                <small>Frontend Architect</small>
              </div>
            </div>

            <div class="floating-badge badge-bottom-left">
              <i class="fa-solid fa-cubes icon-dotnet"></i>
              <div>
                <strong>.NET Core & C#</strong>
                <small>High-Throughput APIs</small>
              </div>
            </div>

            <div class="floating-badge badge-bottom-right">
              <i class="fa-solid fa-database icon-sql"></i>
              <div>
                <strong>SQL Server</strong>
                <small>Optimized Procedures</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Highlights / Key Metrics Bar -->
      <div class="metrics-bar">
        <div class="container metrics-grid">
          <div class="metric-item" *ngFor="let m of portfolioService.metrics()">
            <div class="metric-number">{{ m.value }}{{ m.suffix || '' }}</div>
            <div class="metric-label">{{ m.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  readonly portfolioService = inject(PortfolioService);
}
