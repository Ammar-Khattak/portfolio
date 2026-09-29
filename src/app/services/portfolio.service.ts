import { Injectable, signal, computed } from '@angular/core';
import { Project, SkillCard, TimelineItem, Metric, ProjectCategory, SkillCategory } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // --- Personal & Profile Info ---
  readonly developerName = signal<string>('Muhammad Ammar Ahmed');
  readonly title = signal<string>('Senior Full Stack .NET & Angular Engineer');
  readonly experienceYears = signal<number>(6);
  readonly email = signal<string>('ammar5508@gmail.com');
  readonly phone = signal<string>('+923139890286');
  readonly location = signal<string>('Islamabad, Pakistan');
  readonly linkedInUrl = signal<string>('https://linkedin.com');

  // --- Metrics ---
  readonly metrics = signal<Metric[]>([
    { value: 6, suffix: '+', label: 'Years of Engineering Experience' },
    { value: 5, suffix: '+', label: 'Major Enterprise & Gov Systems' },
    { value: 100, suffix: '%', label: 'Production Delivery Record' },
    { value: 'Millions', label: 'Daily Telecom & Fintech Users' }
  ]);

  // --- Projects Data ---
  private readonly _projects = signal<Project[]>([
    {
      id: 'amp',
      title: 'AMP — Panama Maritime Authority Certification System',
      client: 'CROEM • Panama Canal Ecosystem',
      category: 'maritime',
      badgeLabel: 'Maritime & Gov',
      badgeClass: 'maritime',
      role: 'Sr. Software Engineer (.NET Core & Angular)',
      summary: 'A mission-critical enterprise portal built using ABP Boilerplate, .NET Core, and Angular. Empowers international maritime agents to seamlessly apply for, process, and obtain vessel certificates needed to transit through the world-famous Panama Canal.',
      overview: 'The AMP platform is an enterprise-scale vessel certification and maritime compliance management system used by international shipping agents and Panama Canal authorities to clear vessels transiting one of the most critical waterways in the world.',
      features: [
        'Streamlines global maritime vessel certification workflow',
        'Ensures international maritime safety & regulatory compliance',
        'Secure portal for instant document download & agent verification'
      ],
      architecture: [
        'Architected with ABP Boilerplate Framework incorporating Domain-Driven Design (DDD) principles.',
        'Built responsive Single Page Application (SPA) frontends in Angular with multi-language and document upload capabilities.',
        'Designed performant .NET Core Web APIs handling vessel inspection checklists, regulatory workflows, and official digital certification issuance.',
        'Optimized Microsoft SQL Server database layer to maintain strict audit trails for global maritime regulatory compliance.'
      ],
      impact: 'Reduced processing bottlenecks by over 40%, streamlined worldwide vessel certificate applications, and provided instant digital verification for international shipping fleets.',
      techStack: ['ABP Boilerplate', '.NET Core', 'Angular', 'TypeScript', 'SQL Server', 'REST APIs', 'Entity Framework Core']
    },
    {
      id: 'digicel-haiti',
      title: 'Digicel Haiti — Mobile Financial Services & Digital Wallet',
      client: 'AKSA-SDS • West Indies Financial Ecosystem',
      category: 'fintech',
      badgeLabel: 'Fintech & Wallet',
      badgeClass: 'fintech',
      role: 'Software Engineer (.NET Core & Angular)',
      summary: 'Contributed to the development and enhancement of the digital wallet & mobile financial service (MFS) admin portal for Digicel Haiti, enabling seamless electronic transactions, money transfers, and merchant payments across the West Indies.',
      overview: 'Digicel Haiti\'s digital wallet platform delivers vital financial inclusion to millions across the West Indies, enabling mobile money transfers, peer-to-peer payments, and merchant checkouts.',
      features: [
        'Engineered responsive, highly accessible Angular admin interface',
        'Built high-throughput .NET Core Web APIs for transactional feeds',
        'Optimized SQL stored procedures for rapid financial data retrieval'
      ],
      architecture: [
        'Enhanced the core Administrative Panel using Angular, providing internal compliance and operations teams with real-time transaction monitoring.',
        'Engineered secure .NET Core Web APIs with high fault-tolerance to process transactional feeds.',
        'Authored and fine-tuned complex SQL Stored Procedures to eliminate query deadlocks and drastically improve reporting speed under peak loads.',
        'Enforced rigorous security and tokenization standards for sensitive financial account handling.'
      ],
      impact: 'Enabled reliable real-time transaction reconciliation and supported high-velocity daily mobile wallet operations without downtime.',
      techStack: ['.NET Core', 'Angular', 'C#', 'SQL Server', 'Stored Procedures', 'Fintech APIs', 'TypeScript']
    },
    {
      id: 'digicel-jamaica',
      title: 'Digicel Jamaica — Core Operations Admin Suite',
      client: 'AKSA-SDS • Caribbean Telecom Leader',
      category: 'telecom',
      badgeLabel: 'Telecom Operations',
      badgeClass: 'telecom',
      role: 'Software Engineer (.NET Core & Angular)',
      summary: 'Key role in engineering the enterprise Admin Panel for Digicel Jamaica, the leading telecommunications network provider. Designed user-friendly frontends and robust backend interfaces to manage subscriber services and network operations.',
      overview: 'Digicel Jamaica is the flagship telecommunications network across the Caribbean. This project encompassed the modernization and expansion of the internal administrative system powering subscriber lifecycle and service tier management.',
      features: [
        'Crafted intuitive Angular dashboards for high accessibility',
        'Developed performant Web APIs connecting telecom middleware',
        'Executed high-efficiency database queries for subscriber analytics'
      ],
      architecture: [
        'Designed accessible, modular frontend components with Angular to simplify complex subscriber management screens.',
        'Engineered RESTful Web APIs using .NET Core to connect frontend interfaces with legacy telecom billing and provisioning systems.',
        'Optimized database interactions through indexed views and stored procedures in MS SQL Server.',
        'Collaborated in Agile sprints to rapidly implement operational feature requests from Jamaican business leaders.'
      ],
      impact: 'Boosted support agent productivity, reduced customer provisioning lookup latency, and streamlined telecom plan administration.',
      techStack: ['Angular', '.NET Core', 'Web APIs', 'C#', 'MS SQL Server', 'Stored Procedures', 'TypeScript']
    },
    {
      id: 'paymax',
      title: 'Zong Paymax — Mobile Financial Services Portal',
      client: 'AKSA-SDS • China Mobile Pakistan (Zong)',
      category: 'fintech',
      badgeLabel: 'Fintech & Payments',
      badgeClass: 'fintech',
      role: 'Jr. Software Engineer (.NET Core & Angular)',
      summary: 'Developed the mission-critical Admin Panel for Paymax, the branchless banking and digital payments platform powered by Zong (China Mobile Pakistan), facilitating secure, high-concurrency electronic payments for millions of users.',
      overview: 'Zong Paymax is a leading branchless banking and digital payments solution launched by China Mobile Pakistan, enabling cashless transactions, utility payments, and mobile remittances nationwide.',
      features: [
        'Frontend implementation with Angular and reactive components',
        'Built secure REST APIs connecting payment processing gateways',
        'High-performance stored procedures handling payment reconciliation'
      ],
      architecture: [
        'Spearheaded key admin panel modules in Angular for dispute resolution, merchant onboarding, and ledger review.',
        'Developed resilient .NET Core Web APIs interfacing directly with national payment rails and internal core banking databases.',
        'Constructed optimized SQL Stored Procedures for heavy transactional queries and automated daily settlement batches.'
      ],
      impact: 'Provided seamless administrative oversight for millions of digital payment transactions across Pakistan with high reliability.',
      techStack: ['ASP.NET Core', 'Angular', 'C#', 'SQL Server', 'Stored Procedures', 'Payment Gateways']
    },
    {
      id: 'jazz-lms',
      title: 'Jazz LMS — Enterprise Learning Management Portal',
      client: 'AKSA-SDS • VEON Group (Jazz)',
      category: 'telecom',
      badgeLabel: 'Telecom LMS',
      badgeClass: 'telecom',
      role: 'Junior Full Stack Developer',
      summary: 'Built the administrative engine for Jazz LMS, supporting nationwide telecom employee training, corporate compliance modules, and interactive certifications across Pakistan\'s largest telecom provider.',
      overview: 'Jazz LMS is a corporate enterprise learning management and compliance training portal deployed across thousands of employees at Pakistan\'s largest telecom provider.',
      features: [
        'Modernized administrative portal using Angular 8 UI',
        'Engineered .NET Core 3.1 Web APIs for curriculum delivery',
        'Streamlined employee course tracking & reporting analytics'
      ],
      architecture: [
        'Built responsive administrative views and course tracking modules using Angular 8.',
        'Developed backend Web APIs with .NET Core 3.1 to serve course curricula, assessment engines, and certification verification.',
        'Cooperated with QA and product teams to refine user workflows and ensure rapid page load times.'
      ],
      impact: 'Supported corporate employee training programs with seamless course delivery, real-time analytics, and completion tracking.',
      techStack: ['Angular 8', '.NET Core 3.1', 'C#', 'SQL Server', 'SPAs', 'REST APIs']
    }
  ]);

  // Selected project filter signal
  readonly selectedProjectCategory = signal<ProjectCategory>('all');

  // Filtered projects computed signal
  readonly filteredProjects = computed(() => {
    const category = this.selectedProjectCategory();
    if (category === 'all') return this._projects();
    return this._projects().filter(p => p.category === category);
  });

  // Selected project for modal dialog
  readonly activeModalProject = signal<Project | null>(null);

  // Resume modal open state
  readonly isResumeModalOpen = signal<boolean>(false);

  // --- Skills Data ---
  private readonly _skills = signal<SkillCard[]>([
    {
      title: '.NET Core & C#',
      category: 'backend',
      level: 'Enterprise Expert',
      description: 'Engineered robust Web APIs, microservices, and asynchronous background handlers with .NET 6/7/8 & ASP.NET Core.',
      tags: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'Web APIs'],
      icon: 'fa-solid fa-code',
      bgClass: 'dotnet-bg'
    },
    {
      title: 'ABP Boilerplate & Microservices',
      category: 'backend',
      level: 'Production Proven',
      description: 'Harnessing ABP Framework for multi-tenant, DDD-based enterprise web platforms and domain event orchestration.',
      tags: ['ABP Framework', 'Domain Driven Design', 'Microservices', 'Multi-Tenancy'],
      icon: 'fa-solid fa-layer-group',
      bgClass: 'abp-bg'
    },
    {
      title: 'Angular Framework',
      category: 'frontend',
      level: 'Senior Specialist',
      description: 'Architecting modular Single Page Applications (SPAs), reactive state management, custom directives, and interceptors.',
      tags: ['Angular (v8+)', 'TypeScript', 'Angular Material', 'RxJS', 'Signals'],
      icon: 'fa-brands fa-angular',
      bgClass: 'angular-bg'
    },
    {
      title: 'Modern Web UI & UX',
      category: 'frontend',
      level: 'Responsive & Accessible',
      description: 'Crafting responsive, intuitive, and accessible user interfaces and interactive dashboards for telecom and fintech admins.',
      tags: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'Flexbox / CSS Grid'],
      icon: 'fa-brands fa-html5',
      bgClass: 'ui-bg'
    },
    {
      title: 'Microsoft SQL Server',
      category: 'database',
      level: 'Advanced Query Tuning',
      description: 'Optimizing relational database interactions, complex stored procedures, triggers, views, and index performance.',
      tags: ['MS SQL Server', 'Stored Procedures', 'Query Optimization', 'Data Modeling'],
      icon: 'fa-solid fa-database',
      bgClass: 'sql-bg'
    },
    {
      title: 'Entity Framework & LINQ',
      category: 'database',
      level: 'ORM Master',
      description: 'Writing performant LINQ queries, code-first migrations, projection queries, and transactional integrity guarantees.',
      tags: ['EF Core', 'LINQ', 'Repository Pattern', 'Unit of Work'],
      icon: 'fa-solid fa-network-wired',
      bgClass: 'orm-bg'
    },
    {
      title: 'Azure DevOps & CI/CD',
      category: 'devops',
      level: 'Production Operations',
      description: 'Managing work items, automated build/release pipelines, continuous integration, and version control workflows.',
      tags: ['Azure DevOps', 'Git & GitHub', 'CI/CD', 'Board Management'],
      icon: 'fa-brands fa-microsoft',
      bgClass: 'devops-bg'
    },
    {
      title: 'Agile Delivery & Code Quality',
      category: 'devops',
      level: 'Leadership & Mentorship',
      description: 'Driving Scrum ceremonies, rigorous code reviews, automated unit testing, debugging, and continuous team mentoring.',
      tags: ['Scrum & Agile', 'Code Reviews', 'Debugging', 'Problem Solving'],
      icon: 'fa-solid fa-list-check',
      bgClass: 'agile-bg'
    }
  ]);

  readonly selectedSkillCategory = signal<SkillCategory>('all');

  readonly filteredSkills = computed(() => {
    const category = this.selectedSkillCategory();
    if (category === 'all') return this._skills();
    return this._skills().filter(s => s.category === category);
  });

  // --- Experience & Education Timeline ---
  readonly timeline = signal<TimelineItem[]>([
    {
      role: 'Sr. Software Engineer (.NET Core & Angular)',
      company: 'CROEM • Islamabad, Pakistan',
      period: 'September 2023 – Present',
      summary: 'Leading the engineering of international enterprise systems, notably the Panama Maritime Authority (AMP) platform.',
      bullets: [
        'Architected and developed modular enterprise features using ABP Boilerplate, .NET Core, and Angular.',
        'Enabled maritime agents worldwide to apply for, track, and download official certificates required for Panama Canal passage.',
        'Streamlined the entire vessel certification pipeline, cutting processing delays and enforcing strict international maritime protocols.',
        'Spearheaded code reviews, architectural standards, and automated deployment practices.'
      ],
      tech: ['ABP Boilerplate', '.NET Core', 'Angular', 'MS SQL Server', 'Entity Framework'],
      icon: 'fa-solid fa-briefcase'
    },
    {
      role: 'Software Engineer (.NET Core & Angular)',
      company: 'AKSA-SDS • Islamabad, Pakistan',
      period: 'December 2022 – September 2023',
      summary: 'Delivered large-scale admin panels and transactional microservices for international telecom and digital banking giants.',
      bullets: [
        'Digicel Haiti: Enhanced the digital wallet admin portal using Angular and .NET Core; developed secure REST Web APIs and tuned stored procedures for financial transactions.',
        'Digicel Jamaica: Key contributor to the administrative portal for Jamaica\'s foremost telecom operator; improved interface usability, responsiveness, and database query efficiency.',
        'Collaborated closely with multi-disciplinary, cross-functional squads to ensure alignment with fast-paced business requirements.'
      ],
      tech: ['.NET Core', 'Angular', 'C#', 'Stored Procedures', 'REST APIs'],
      icon: 'fa-solid fa-code-branch'
    },
    {
      role: 'Jr. Software Engineer (.NET Core & Angular)',
      company: 'AKSA-SDS • Islamabad, Pakistan',
      period: 'March 2021 – November 2022',
      summary: 'Engineered core modules for nationwide digital financial services and corporate learning management systems.',
      bullets: [
        'Zong Paymax: Designed and implemented admin panel workflows for mobile payments; developed .NET Core Web APIs and SQL stored procedures for transaction management.',
        'Jazz LMS: Built intuitive frontend features using Angular 8 and integrated backend APIs via .NET Core 3.1.',
        'Maintained high code quality and participated in rigorous bug triage and resolution cycles.'
      ],
      tech: ['.NET Core 3.1', 'Angular 8', 'SQL Server', 'ASP.NET Web APIs'],
      icon: 'fa-solid fa-terminal'
    },
    {
      role: 'Software Engineering Intern',
      company: 'AKSA-SDS • Islamabad, Pakistan',
      period: 'December 2020 – March 2021',
      summary: 'Gained intensive professional experience building enterprise Single Page Applications (SPAs) integrating Angular 8 with ASP.NET Core and SQL Server.',
      tech: ['ASP.NET MVC', 'ASP.NET Core', 'Angular 8', 'SQL Server'],
      icon: 'fa-solid fa-graduation-cap'
    },
    {
      role: 'Bachelor of Science in Software Engineering',
      company: 'International Islamic University • Islamabad, Pakistan',
      period: '2016 – 2020',
      summary: 'Comprehensive degree curriculum covering Software Design & Architecture, Data Structures & Algorithms, Object-Oriented Analysis, Relational Database Management Systems, and Web Application Frameworks.',
      tech: ['Data Structures', 'Algorithms', 'OOP', 'Database Design', 'Software Architecture'],
      isEducation: true,
      icon: 'fa-solid fa-award'
    }
  ]);

  // Actions
  setProjectCategory(category: ProjectCategory): void {
    this.selectedProjectCategory.set(category);
  }

  setSkillCategory(category: SkillCategory): void {
    this.selectedSkillCategory.set(category);
  }

  openProjectModal(projectId: string): void {
    const found = this._projects().find(p => p.id === projectId) || null;
    this.activeModalProject.set(found);
  }

  closeProjectModal(): void {
    this.activeModalProject.set(null);
  }

  openResumeModal(): void {
    this.isResumeModalOpen.set(true);
  }

  closeResumeModal(): void {
    this.isResumeModalOpen.set(false);
  }
}
