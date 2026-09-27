import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { ExperienceComponent } from './components/experience.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { ProjectModalComponent } from './components/project-modal.component';
import { ResumeModalComponent } from './components/resume-modal.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ProjectModalComponent,
    ResumeModalComponent
  ],
  template: `
    <!-- Ambient Floating Glow Orbs -->
    <div class="ambient-glow glow-1" aria-hidden="true"></div>
    <div class="ambient-glow glow-2" aria-hidden="true"></div>
    <div class="ambient-glow glow-3" aria-hidden="true"></div>

    <!-- Toast Notification -->
    <div id="toast" class="toast" [class.hidden]="!toastMessage()" role="status" aria-live="polite">
      <i class="fa-solid fa-circle-check"></i>
      <span>{{ toastMessage() }}</span>
    </div>

    <!-- Application Header -->
    <app-header></app-header>

    <!-- Main Content -->
    <main id="main-content">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact (toastTrigger)="onToast($event)"></app-contact>
    </main>

    <!-- Footer -->
    <app-footer></app-footer>

    <!-- Modals -->
    <app-project-modal></app-project-modal>
    <app-resume-modal></app-resume-modal>

    <!-- Floating Back to Top -->
    <button class="back-to-top" [class.hidden]="!showBackToTop()" (click)="scrollToTop()" aria-label="Back to top">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  `
})
export class AppComponent {
  readonly portfolioService = inject(PortfolioService);

  readonly toastMessage = signal<string | null>(null);
  readonly showBackToTop = signal<boolean>(false);
  private toastTimer?: any;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 300);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.portfolioService.closeProjectModal();
    this.portfolioService.closeResumeModal();
  }

  onToast(message: string): void {
    this.toastMessage.set(message);
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastMessage.set(null);
    }, 3200);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
