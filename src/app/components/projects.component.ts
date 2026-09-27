import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { ProjectCategory } from '../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Portfolio of Work</span>
          <h2 class="section-title">Enterprise & High-Impact Projects</h2>
          <p class="section-description">Proven delivery across international maritime regulations, digital wallets, and nationwide telecom infrastructures.</p>
        </div>

        <!-- Project Filter Buttons -->
        <div class="projects-filter-bar">
          <button class="project-filter-btn" [class.active]="portfolioService.selectedProjectCategory() === 'all'" (click)="filterProjects('all')">All Projects (5)</button>
          <button class="project-filter-btn" [class.active]="portfolioService.selectedProjectCategory() === 'maritime'" (click)="filterProjects('maritime')">Maritime & Gov</button>
          <button class="project-filter-btn" [class.active]="portfolioService.selectedProjectCategory() === 'fintech'" (click)="filterProjects('fintech')">Fintech & Payments</button>
          <button class="project-filter-btn" [class.active]="portfolioService.selectedProjectCategory() === 'telecom'" (click)="filterProjects('telecom')">Telecom & Enterprise</button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <article class="project-card glass-panel" *ngFor="let p of portfolioService.filteredProjects()">
            <div class="project-badge" [ngClass]="p.badgeClass">
              <i class="fa-solid fa-ship" *ngIf="p.category === 'maritime'"></i>
              <i class="fa-solid fa-wallet" *ngIf="p.category === 'fintech'"></i>
              <i class="fa-solid fa-tower-cell" *ngIf="p.category === 'telecom'"></i>
              <span>{{ p.badgeLabel }}</span>
            </div>

            <div class="project-body">
              <span class="project-org">{{ p.client }}</span>
              <h3 class="project-title">{{ p.title }}</h3>
              <p class="project-summary">{{ p.summary }}</p>

              <div class="project-features">
                <div class="feature-item" *ngFor="let f of p.features">
                  <i class="fa-solid fa-check"></i>
                  <span>{{ f }}</span>
                </div>
              </div>

              <div class="project-tech-stack">
                <span class="tech-pill" *ngFor="let t of p.techStack">{{ t }}</span>
              </div>
            </div>

            <div class="project-footer">
              <button class="btn btn-sm btn-outline" (click)="portfolioService.openProjectModal(p.id)">
                <i class="fa-solid fa-circle-info"></i>
                <span>System Architecture Details</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly portfolioService = inject(PortfolioService);

  filterProjects(category: ProjectCategory): void {
    this.portfolioService.setProjectCategory(category);
  }
}
