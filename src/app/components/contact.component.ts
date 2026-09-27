import { Component, inject, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Let's Connect</span>
          <h2 class="section-title">Get In Touch & Collaborate</h2>
          <p class="section-description">Interested in discussing a project, team leadership, or senior full-stack opportunities? Reach out anytime.</p>
        </div>

        <div class="contact-grid">
          <!-- Contact Cards -->
          <div class="contact-info">
            <div class="contact-card glass-panel">
              <div class="contact-icon email-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email Address</h4>
                <p>{{ portfolioService.email() }}</p>
                <button class="copy-btn" (click)="copyEmail()" title="Copy to clipboard">
                  <i class="fa-regular fa-copy"></i>
                  <span>{{ copyBtnText() }}</span>
                </button>
              </div>
            </div>

            <div class="contact-card glass-panel">
              <div class="contact-icon phone-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="contact-details">
                <h4>Phone Number</h4>
                <p>{{ portfolioService.phone() }}</p>
                <a [href]="'tel:' + portfolioService.phone()" class="contact-action-link">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            <div class="contact-card glass-panel">
              <div class="contact-icon location-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="contact-details">
                <h4>Location</h4>
                <p>{{ portfolioService.location() }}</p>
                <span class="location-status"><i class="fa-solid fa-earth-asia"></i> Open to Remote & Hybrid Roles</span>
              </div>
            </div>

            <div class="contact-card glass-panel">
              <div class="contact-icon linkedin-icon">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div class="contact-details">
                <h4>Professional Network</h4>
                <p>LinkedIn Profile</p>
                <a [href]="portfolioService.linkedInUrl()" target="_blank" rel="noopener noreferrer" class="contact-action-link">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Visit Profile</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form (Ready for Netlify / Formspree) -->
          <div class="contact-form-wrap glass-panel">
            <h3>Send a Direct Message</h3>
            <p class="form-lead">Feel free to leave a note or inquire about my availability.</p>

            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" name="portfolio-contact" method="POST" data-netlify="true">
              <div class="form-group">
                <label for="contact-name">Your Full Name <span class="required">*</span></label>
                <div class="input-wrapper">
                  <i class="fa-regular fa-user"></i>
                  <input type="text" id="contact-name" name="name" [(ngModel)]="formData.name" placeholder="e.g. John Doe" required>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-email">Email Address <span class="required">*</span></label>
                <div class="input-wrapper">
                  <i class="fa-regular fa-envelope"></i>
                  <input type="email" id="contact-email" name="email" [(ngModel)]="formData.email" placeholder="e.g. john@company.com" required>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject">Subject</label>
                <div class="input-wrapper">
                  <i class="fa-regular fa-bookmark"></i>
                  <input type="text" id="contact-subject" name="subject" [(ngModel)]="formData.subject" placeholder="e.g. Senior .NET / Angular Opportunity">
                </div>
              </div>

              <div class="form-group">
                <label for="contact-message">Your Message <span class="required">*</span></label>
                <div class="input-wrapper textarea-wrapper">
                  <i class="fa-regular fa-comment-dots"></i>
                  <textarea id="contact-message" name="message" rows="4" [(ngModel)]="formData.message" placeholder="Hello Ammar, I would love to connect regarding..." required></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block" [disabled]="isSubmitting()">
                <i class="fa-regular fa-paper-plane" *ngIf="!isSubmitting()"></i>
                <i class="fa-solid fa-spinner fa-spin" *ngIf="isSubmitting()"></i>
                <span>{{ isSubmitting() ? 'Sending...' : 'Send Message' }}</span>
              </button>

              <div *ngIf="statusMessage()" class="form-status-msg" [class.success]="isSuccess()" [class.error]="!isSuccess()">
                {{ statusMessage() }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly portfolioService = inject(PortfolioService);
  readonly toastTrigger = output<string>();

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  readonly isSubmitting = signal<boolean>(false);
  readonly statusMessage = signal<string | null>(null);
  readonly isSuccess = signal<boolean>(true);
  readonly copyBtnText = signal<string>('Copy Email');

  copyEmail(): void {
    const email = this.portfolioService.email();
    navigator.clipboard.writeText(email).then(() => {
      this.copyBtnText.set('Copied!');
      this.toastTrigger.emit(`Email copied to clipboard: ${email}`);
      setTimeout(() => this.copyBtnText.set('Copy Email'), 2500);
    }).catch(() => {
      this.toastTrigger.emit(email);
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.isSubmitting.set(true);
    this.statusMessage.set(null);

    // Simulate sending / Handle Netlify
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
      this.statusMessage.set(`Thank you, ${this.formData.name}! Your message has been prepared. You can also reach Muhammad directly at ${this.portfolioService.email()}.`);
      this.toastTrigger.emit('Message sent successfully!');
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1000);
  }
}
