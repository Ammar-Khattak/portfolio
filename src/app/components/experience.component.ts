import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Career Milestones</span>
          <h2 class="section-title">Work Experience & Education</h2>
          <p class="section-description">A progression of senior leadership, enterprise deliveries, and engineering excellence.</p>
        </div>

        <div class="timeline">
          <div class="timeline-item" *ngFor="let item of portfolioService.timeline()" [class.education-marker]="item.isEducation">
            <div class="timeline-marker">
              <i [class]="item.icon"></i>
            </div>
            <div class="timeline-content glass-panel">
              <div class="timeline-date-badge">{{ item.period }}</div>
              <h3 class="timeline-role">{{ item.role }}</h3>
              <h4 class="timeline-company">{{ item.company }}</h4>
              <p class="timeline-summary">{{ item.summary }}</p>

              <ul class="timeline-bullets" *ngIf="item.bullets">
                <li *ngFor="let b of item.bullets">{{ b }}</li>
              </ul>

              <div class="timeline-tech">
                <span *ngFor="let t of item.tech">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly portfolioService = inject(PortfolioService);
}
