import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';
import { SkillCategory } from '../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Technical Competencies</span>
          <h2 class="section-title">Skills & Technology Stack</h2>
          <p class="section-description">A structured breakdown of my full-stack capabilities, frameworks, and engineering tools.</p>
        </div>

        <!-- Skills Filter Tabs -->
        <div class="skills-filter-nav">
          <button class="skill-tab" [class.active]="portfolioService.selectedSkillCategory() === 'all'" (click)="filterSkills('all')">All Skills</button>
          <button class="skill-tab" [class.active]="portfolioService.selectedSkillCategory() === 'backend'" (click)="filterSkills('backend')">Backend & .NET</button>
          <button class="skill-tab" [class.active]="portfolioService.selectedSkillCategory() === 'frontend'" (click)="filterSkills('frontend')">Frontend & Angular</button>
          <button class="skill-tab" [class.active]="portfolioService.selectedSkillCategory() === 'database'" (click)="filterSkills('database')">Databases & Architecture</button>
          <button class="skill-tab" [class.active]="portfolioService.selectedSkillCategory() === 'devops'" (click)="filterSkills('devops')">DevOps & Methodologies</button>
        </div>

        <div class="skills-grid">
          <div class="skill-card glass-panel" *ngFor="let s of portfolioService.filteredSkills()">
            <div class="skill-header">
              <div class="skill-icon" [ngClass]="s.bgClass">
                <i [class]="s.icon"></i>
              </div>
              <div>
                <h4>{{ s.title }}</h4>
                <span class="skill-level">{{ s.level }}</span>
              </div>
            </div>
            <p class="skill-desc">{{ s.description }}</p>
            <div class="skill-tags">
              <span *ngFor="let t of s.tags">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly portfolioService = inject(PortfolioService);

  filterSkills(category: SkillCategory): void {
    this.portfolioService.setSkillCategory(category);
  }
}
