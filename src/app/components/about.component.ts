import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Executive Summary</span>
          <h2 class="section-title">Engineering Scalable, Resilient Solutions</h2>
          <p class="section-description">A deep dive into my career objective, development philosophy, and core domain specializations.</p>
        </div>

        <div class="about-grid">
          <div class="about-card glass-panel">
            <div class="about-card-icon">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
            <h3>Who I Am</h3>
            <p>
              I am a results-driven <strong>Senior Software Engineer</strong> based in Islamabad, Pakistan, with over 6 years of hands-on expertise in architecting, developing, and deploying robust software solutions for challenging, high-concurrency environments.
            </p>
            <p>
              My track record spans developing international maritime compliance portals (such as the <em>Panama Maritime Authority</em> application handling ships traversing the Panama Canal), nationwide digital wallets and financial services (<em>Zong Paymax, Digicel Haiti</em>), and high-volume telecom admin suites (<em>Digicel Jamaica, Jazz LMS</em>).
            </p>
            <div class="about-highlights-list">
              <div class="highlight-point">
                <i class="fa-solid fa-circle-check"></i>
                <span>Deep understanding of clean software architecture, SOLID principles & DDD.</span>
              </div>
              <div class="highlight-point">
                <i class="fa-solid fa-circle-check"></i>
                <span>Mastery over <strong>ABP Boilerplate</strong> framework for rapid enterprise modular development.</span>
              </div>
              <div class="highlight-point">
                <i class="fa-solid fa-circle-check"></i>
                <span>Database tuning specialist: high-speed stored procedures, indexing, and LINQ optimization.</span>
              </div>
            </div>
          </div>

          <div class="about-card glass-panel">
            <div class="about-card-icon">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <h3>Core Engineering Principles</h3>
            <div class="principles-grid">
              <div class="principle-box">
                <div class="principle-header">
                  <i class="fa-solid fa-bolt"></i>
                  <h4>Performance & Scale</h4>
                </div>
                <p>Designing RESTful Web APIs and query execution paths that maintain low latency under heavy concurrent loads.</p>
              </div>

              <div class="principle-box">
                <div class="principle-header">
                  <i class="fa-solid fa-shield-halved"></i>
                  <h4>Security & Compliance</h4>
                </div>
                <p>Applying strict maritime and financial data security standards, token-based auth, and regulatory compliance.</p>
              </div>

              <div class="principle-box">
                <div class="principle-header">
                  <i class="fa-solid fa-cubes-stacked"></i>
                  <h4>Modular Architecture</h4>
                </div>
                <p>Decoupled multi-tier systems utilizing ABP Framework, domain-driven design, and reusable Angular components.</p>
              </div>

              <div class="principle-box">
                <div class="principle-header">
                  <i class="fa-solid fa-users-gear"></i>
                  <h4>Agile Collaboration</h4>
                </div>
                <p>Active participation in sprint ceremonies, rigorous code reviews, mentoring, and cross-functional synergy.</p>
              </div>
            </div>

            <!-- Quick Meta Details -->
            <div class="about-meta-row">
              <div class="meta-pill">
                <span class="label">Location</span>
                <span class="value">{{ portfolioService.location() }}</span>
              </div>
              <div class="meta-pill">
                <span class="label">Education</span>
                <span class="value">BS Software Engineering (IIUI)</span>
              </div>
              <div class="meta-pill">
                <span class="label">Methodology</span>
                <span class="value">Agile / Scrum & CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  readonly portfolioService = inject(PortfolioService);
}
