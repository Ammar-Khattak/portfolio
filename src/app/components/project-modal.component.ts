import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.hidden]="!portfolioService.activeModalProject()" (click)="onBackdropClick($event)" role="dialog" aria-modal="true">
      <div class="modal-container glass-panel" *ngIf="portfolioService.activeModalProject() as project">
        <button class="modal-close-btn" (click)="portfolioService.closeProjectModal()" aria-label="Close modal">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="modal-content">
          <div class="modal-project-header">
            <span class="section-tag">{{ project.client }}</span>
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; margin: 10px 0 6px; color: var(--text-primary);">
              {{ project.title }}
            </h2>
            <div style="font-size: 0.95rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 20px;">
              Role: {{ project.role }}
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
              Executive Summary
            </h4>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">
              {{ project.overview }}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">
              Architecture & Technical Contributions
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 8px; padding-left: 20px; list-style: disc; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
              <li *ngFor="let item of project.architecture">{{ item }}</li>
            </ul>
          </div>

          <div style="margin-bottom: 24px; background: rgba(56, 189, 248, 0.08); border-left: 4px solid var(--accent-cyan); padding: 14px 18px; border-radius: var(--radius-sm);">
            <strong style="color: var(--text-primary); font-size: 0.92rem; display: block; margin-bottom: 4px;">Business Impact & Outcomes:</strong>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">{{ project.impact }}</p>
          </div>

          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Technologies Employed</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <span class="tech-pill" *ngFor="let tech of project.techStack">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectModalComponent {
  readonly portfolioService = inject(PortfolioService);

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.portfolioService.closeProjectModal();
    }
  }
}
