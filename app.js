/**
 * MUHAMMAD AMMAR AHMED - PORTFOLIO INTERACTIVITY
 * Senior Full Stack .NET & Angular Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME SWITCHER (Dark / Light Mode) ---
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('ammar_portfolio_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('ammar_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  }

  // --- 3. STICKY HEADER & SCROLL SPY ---
  const header = document.getElementById('header');
  const backToTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header background blur on scroll
    if (scrollY > 50) {
      header.classList.add('scrolled');
      if (backToTop) backToTop.classList.remove('hidden');
    } else {
      header.classList.remove('scrolled');
      if (backToTop) backToTop.classList.add('hidden');
    }

    // Scroll Spy active state
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 4. ANIMATED NUMBER COUNTER ---
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1600;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, stepTime);
    });
  };

  const metricsSection = document.querySelector('.metrics-bar');
  if (metricsSection && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasCounted) {
        hasCounted = true;
        startCounters();
      }
    }, { threshold: 0.5 });
    counterObserver.observe(metricsSection);
  } else {
    startCounters();
  }

  // --- 5. SKILLS FILTERING ---
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // --- 6. PROJECTS FILTERING ---
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 50);
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // --- 7. PROJECT DETAILS MODAL DATA & CONTROLLER ---
  const projectDetails = {
    amp: {
      title: "AMP — Panama Maritime Authority Certification System",
      client: "CROEM / Panama Maritime Authority",
      role: "Sr. Software Engineer (.NET Core & Angular)",
      overview: "The AMP platform is an enterprise-scale vessel certification and maritime compliance management system used by international shipping agents and Panama Canal authorities to clear vessels transiting one of the most critical waterways in the world.",
      architecture: [
        "Architected with <strong>ABP Boilerplate Framework</strong> incorporating Domain-Driven Design (DDD) principles.",
        "Built responsive Single Page Application (SPA) frontends in <strong>Angular</strong> with multi-language and document upload capabilities.",
        "Designed performant <strong>.NET Core Web APIs</strong> handling vessel inspection checklists, regulatory workflows, and official digital certification issuance.",
        "Optimized <strong>Microsoft SQL Server</strong> database layer to maintain strict audit trails for global maritime regulatory compliance."
      ],
      impact: "Reduced processing bottlenecks by over 40%, streamlined worldwide vessel certificate applications, and provided instant digital verification for international shipping fleets.",
      techStack: ["ABP Boilerplate", ".NET Core", "Angular", "TypeScript", "SQL Server", "REST APIs", "Entity Framework Core"]
    },
    "digicel-haiti": {
      title: "Digicel Haiti — Mobile Financial Services & Digital Wallet",
      client: "AKSA-SDS / Digicel Haiti",
      role: "Software Engineer (.NET Core & Angular)",
      overview: "Digicel Haiti's digital wallet platform delivers vital financial inclusion to millions across the West Indies, enabling mobile money transfers, peer-to-peer payments, and merchant checkouts.",
      architecture: [
        "Enhanced the core Administrative Panel using <strong>Angular</strong>, providing internal compliance and operations teams with real-time transaction monitoring.",
        "Engineered secure <strong>.NET Core Web APIs</strong> with high fault-tolerance to process transactional feeds.",
        "Authored and fine-tuned complex <strong>SQL Stored Procedures</strong> to eliminate query deadlocks and drastically improve reporting speed under peak loads.",
        "Enforced rigorous security and tokenization standards for sensitive financial account handling."
      ],
      impact: "Enabled reliable real-time transaction reconciliation and supported high-velocity daily mobile wallet operations without downtime.",
      techStack: [".NET Core", "Angular", "C#", "SQL Server", "Stored Procedures", "Financial APIs", "TypeScript"]
    },
    "digicel-jamaica": {
      title: "Digicel Jamaica — Core Operations Admin Suite",
      client: "AKSA-SDS / Digicel Jamaica",
      role: "Software Engineer (.NET Core & Angular)",
      overview: "Digicel Jamaica is the flagship telecommunications network across the Caribbean. This project encompassed the modernization and expansion of the internal administrative system powering subscriber lifecycle and service tier management.",
      architecture: [
        "Designed accessible, modular frontend components with <strong>Angular</strong> to simplify complex subscriber management screens.",
        "Engineered RESTful Web APIs using <strong>.NET Core</strong> to connect frontend interfaces with legacy telecom billing and provisioning systems.",
        "Optimized database interactions through indexed views and stored procedures in <strong>MS SQL Server</strong>.",
        "Collaborated in Agile sprints to rapidly implement operational feature requests from Jamaican business leaders."
      ],
      impact: "Boosted support agent productivity, reduced customer provisioning lookup latency, and streamlined telecom plan administration.",
      techStack: ["Angular", ".NET Core", "Web APIs", "C#", "MS SQL Server", "Stored Procedures", "Agile/Scrum"]
    },
    paymax: {
      title: "Zong Paymax — Mobile Financial Services Portal",
      client: "AKSA-SDS / China Mobile Pakistan (Zong)",
      role: "Jr. Software Engineer (.NET Core & Angular)",
      overview: "Zong Paymax is a leading branchless banking and digital payments solution launched by China Mobile Pakistan, enabling cashless transactions, utility payments, and mobile remittances nationwide.",
      architecture: [
        "Spearheaded key admin panel modules in <strong>Angular</strong> for dispute resolution, merchant onboarding, and ledger review.",
        "Developed resilient <strong>.NET Core Web APIs</strong> interfacing directly with national payment rails and internal core banking databases.",
        "Constructed optimized <strong>SQL Stored Procedures</strong> for heavy transactional queries and automated daily settlement batches."
      ],
      impact: "Provided seamless administrative oversight for millions of digital payment transactions across Pakistan with high reliability.",
      techStack: ["ASP.NET Core", "Angular", "C#", "SQL Server", "Stored Procedures", "Payment Gateways"]
    },
    "jazz-lms": {
      title: "Jazz LMS — Enterprise Learning Management Portal",
      client: "AKSA-SDS / VEON Group (Jazz)",
      role: "Junior Full Stack Developer",
      overview: "Jazz LMS is a corporate enterprise learning management and compliance training portal deployed across thousands of employees at Pakistan's largest telecom provider.",
      architecture: [
        "Built responsive administrative views and course tracking modules using <strong>Angular 8</strong>.",
        "Developed backend Web APIs with <strong>.NET Core 3.1</strong> to serve course curricula, assessment engines, and certification verification.",
        "Cooperated with QA and product teams to refine user workflows and ensure rapid page load times."
      ],
      impact: "Supported corporate employee training programs with seamless course delivery, real-time analytics, and completion tracking.",
      techStack: ["Angular 8", ".NET Core 3.1", "C#", "SQL Server", "SPAs", "REST APIs"]
    }
  };

  const projectModal = document.getElementById('project-modal');
  const projectModalContent = document.getElementById('modal-project-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const openProjectModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data) return;

    projectModalContent.innerHTML = `
      <div class="modal-project-header">
        <span class="section-tag">${data.client}</span>
        <h2 id="modal-project-title" style="font-family: var(--font-heading); font-size: 1.8rem; margin: 10px 0 6px; color: var(--text-primary);">${data.title}</h2>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 20px;">Role: ${data.role}</div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Executive Summary</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${data.overview}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Architecture & Technical Contributions</h4>
        <ul style="display: flex; flex-direction: column; gap: 8px; padding-left: 20px; list-style: disc; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
          ${data.architecture.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 24px; background: rgba(56, 189, 248, 0.08); border-left: 4px solid var(--accent-cyan); padding: 14px 18px; border-radius: var(--radius-sm);">
        <strong style="color: var(--text-primary); font-size: 0.92rem; display: block; margin-bottom: 4px;">Business Impact & Outcomes:</strong>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin: 0;">${data.impact}</p>
      </div>

      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 10px;">Technologies Employed</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${data.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
        </div>
      </div>
    `;

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.project-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // --- 8. RESUME MODAL & PRINT CONTROLLER ---
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const resumeCloseBtn = document.getElementById('resume-close-btn');
  const printResumeBtn = document.getElementById('print-resume-btn');

  const openResume = () => {
    resumeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeResume = () => {
    resumeModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResume);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResume();
    }
  });

  // --- 9. COPY EMAIL TO CLIPBOARD WITH TOAST ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'ammar5508@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: ammar5508@gmail.com');
      }).catch(() => {
        showToast('ammar5508@gmail.com');
      });
    });
  }

  // --- 10. CONTACT FORM SUBMISSION HANDLER ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // Check if running on Netlify in production
      const isNetlify = window.location.hostname.includes('netlify.app') || window.location.hostname.includes('.com');

      if (!isNetlify) {
        // Local simulation / fallback
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>`;

        setTimeout(() => {
          formStatus.className = 'form-status-msg success';
          formStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been prepared. You can also reach Muhammad directly at <strong>ammar5508@gmail.com</strong>.`;
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i> <span>Send Message</span>`;
          showToast('Message sent successfully!');
        }, 1000);
      }
      // If deployed on Netlify, the standard Netlify POST submission takes over automatically!
    });
  }

  // --- 11. DYNAMIC CURRENT YEAR ---
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // --- 12. INTERACTIVE 3D TILT ON HERO AVATAR ---
  const avatarCard = document.getElementById('avatarCard');
  const heroVisual = document.querySelector('.hero-visual');
  if (avatarCard && heroVisual) {
    heroVisual.addEventListener('mousemove', (e) => {
      const rect = avatarCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;
      avatarCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      avatarCard.style.transform = '';
    });
  }
});
