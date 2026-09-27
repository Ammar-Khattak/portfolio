import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.hidden]="!portfolioService.isResumeModalOpen()" (click)="onBackdropClick($event)" role="dialog" aria-modal="true">
      <div class="modal-container resume-modal-container glass-panel">
        <div class="resume-modal-header">
          <h3>Resume Preview — {{ portfolioService.developerName() }}</h3>
          <div class="resume-actions">
            <button (click)="printResume()" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-print"></i>
              <span>Print / Save as PDF</span>
            </button>
            <button class="modal-close-btn" (click)="portfolioService.closeResumeModal()" aria-label="Close resume modal">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div class="resume-sheet" id="printable-resume">
          <header class="resume-sheet-header">
            <h2>{{ portfolioService.developerName() }}</h2>
            <p class="resume-sheet-role">{{ portfolioService.title() }}</p>
            <div class="resume-sheet-contacts">
              <span><i class="fa-solid fa-phone"></i> {{ portfolioService.phone() }}</span>
              <span><i class="fa-solid fa-envelope"></i> {{ portfolioService.email() }}</span>
              <span><i class="fa-solid fa-location-dot"></i> {{ portfolioService.location() }}</span>
            </div>
          </header>

          <section class="resume-sheet-section">
            <h3>Career Objective</h3>
            <p>
              Software Engineer with over 6 years of experience in designing, developing, and deploying robust software solutions for challenging and complex problems. Demonstrated success in leading and contributing to high-impact projects through self-direction and a deep understanding of software engineering principles. Strong background in problem-solving, algorithm design, and optimizing code for performance and scalability. Skilled in collaborating with cross-functional teams to deliver innovative solutions that meet business objectives.
            </p>
          </section>

          <section class="resume-sheet-section">
            <h3>Professional Experience</h3>

            <div class="resume-job">
              <div class="resume-job-head">
                <strong>Sr. SOFTWARE ENGINEER (DOT NETCORE And Angular)</strong>
                <span>Sep 2023 – Present</span>
              </div>
              <div class="resume-job-company">CROEM • Islamabad, Pakistan</div>
              <p><strong>Project: AMP (Panama Maritime Authority)</strong></p>
              <ul>
                <li>Developed using ABP boilerplate, .NET Core, and Angular.</li>
                <li>Enables agents to apply for various certificates needed for ships passing through the Panama Canal.</li>
                <li>Streamlines the certification process, improving efficiency and regulatory compliance.</li>
                <li>Allows users to download and access the application seamlessly.</li>
              </ul>
            </div>

            <div class="resume-job">
              <div class="resume-job-head">
                <strong>SOFTWARE ENGINEER (DOT NETCORE And Angular)</strong>
                <span>Dec 2022 – Sep 2023</span>
              </div>
              <div class="resume-job-company">AKSA-SDS • Islamabad, Pakistan</div>
              <p><strong>Project: Digicel Haiti (Digital Wallet & MFS)</strong></p>
              <ul>
                <li>Enhanced the Admin Panel for Haiti using Angular and .NET Core, focusing on creating a responsive and intuitive UI.</li>
                <li>Created Web APIs with .NET Core to facilitate effective communication between frontend and backend.</li>
                <li>Used stored procedures to optimize database interactions, enhancing data retrieval and management.</li>
              </ul>
              <p><strong>Project: Digicel Jamaica (Telecom Admin Suite)</strong></p>
              <ul>
                <li>Played a key role in developing the Admin Panel for Digicel Jamaica, a leading telecommunications provider.</li>
                <li>Built frontend using Angular and developed performant Web APIs with .NET Core.</li>
              </ul>
            </div>

            <div class="resume-job">
              <div class="resume-job-head">
                <strong>Jr SOFTWARE ENGINEER (DOT NETCORE And Angular)</strong>
                <span>Mar 2021 – Nov 2022</span>
              </div>
              <div class="resume-job-company">AKSA-SDS • Islamabad, Pakistan</div>
              <p><strong>Project: Zong Paymax</strong></p>
              <ul>
                <li>Focused on the design and development of the Admin Panel for Zong Paymax (mobile financial service).</li>
                <li>Implemented frontend using Angular and developed Web APIs with .NET Core connected to stored procedures.</li>
              </ul>
              <p><strong>Project: Jazz LMS</strong></p>
              <ul>
                <li>Worked as Junior Full Stack Developer on the Jazz Learning Management System admin panel.</li>
                <li>Helped build the frontend using Angular 8 and backend Web APIs with .NET Core 3.1.</li>
              </ul>
            </div>

            <div class="resume-job">
              <div class="resume-job-head">
                <strong>INTERN (DOT NETCORE And Angular)</strong>
                <span>Dec 2020 – Mar 2021</span>
              </div>
              <div class="resume-job-company">AKSA-SDS • Islamabad, Pakistan</div>
              <ul>
                <li>Gained hands-on experience in ASP.NET MVC and ASP.NET Core.</li>
                <li>Created Single Page Applications (SPAs) using Angular 8 and SQL Server.</li>
              </ul>
            </div>
          </section>

          <section class="resume-sheet-section">
            <h3>Technical Skills</h3>
            <div class="resume-skills-list">
              <p><strong>Backend:</strong> ASP.NET Core, .NET Framework, C#, ASP.NET MVC, Entity Framework Core, LINQ, Microservices, ABP Boilerplate, REST APIs.</p>
              <p><strong>Frontend:</strong> Angular, TypeScript, Angular Material, Single Page Applications (SPAs), HTML5, CSS3, JavaScript.</p>
              <p><strong>Databases:</strong> Microsoft SQL Server, Stored Procedures, Database Tuning, Query Optimization.</p>
              <p><strong>DevOps & Methods:</strong> Azure DevOps, Git, Agile / Scrum, Code Reviews, Debugging, CI/CD.</p>
            </div>
          </section>

          <section class="resume-sheet-section">
            <h3>Education</h3>
            <div class="resume-job">
              <div class="resume-job-head">
                <strong>Bachelors in Software Engineering</strong>
                <span>2016 – 2020</span>
              </div>
              <div class="resume-job-company">International Islamic University, Islamabad, Pakistan</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `
})
export class ResumeModalComponent {
  readonly portfolioService = inject(PortfolioService);

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.portfolioService.closeResumeModal();
    }
  }

  printResume(): void {
    window.print();
  }
}
