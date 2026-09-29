# Muhammad Ammar Ahmed — Senior Full Stack .NET & Angular Portfolio

A modern, high-performance, responsive portfolio web application engineered for **Muhammad Ammar Ahmed**, Senior Full Stack .NET & Angular Developer.

Built with **Angular 8+ & Modern Architecture**, **TypeScript**, **Angular Signals**, and a **Glassmorphism Design System** featuring dynamic neon accents, dark & light themes, interactive project modals, and an ATS-friendly printable resume.

---

## 🚀 Key Features

* **Angular 8+ & Modern Standalone Architecture**: Clean components, reactive architecture, and strongly-typed models showcasing 6+ years of specialized Angular expertise.
* **Modern Aesthetic**: Glassmorphism cards, ambient animated neon gradients, dark/light theme toggle with `localStorage` persistence.
* **Featured Enterprise Projects**:
  * **AMP (Panama Maritime Authority)**: International vessel certification portal built with ABP Boilerplate, .NET Core, and Angular.
  * **Digicel Haiti**: Mobile financial services & digital wallet admin portal.
  * **Digicel Jamaica**: High-concurrency telecom administration suite.
  * **Zong Paymax**: Nationwide digital payments & MFS ecosystem.
  * **Jazz LMS**: Enterprise workforce learning management system.
* **Interactive Modals**: Detailed architectural breakdowns, system challenges, and business impact for each enterprise project.
* **Skills Matrix**: Categorized tech stack tabs (Backend/.NET, Frontend/Angular, Database/SQL, DevOps) with smooth filtering.
* **Career Journey Timeline**: Chronological milestones covering CROEM, AKSA-SDS, and BS Software Engineering from International Islamic University Islamabad.
* **One-Click Email Copy**: Instant copy with animated toast notification feedback.
* **ATS Printable Resume**: In-app modal viewer with a dedicated `@media print` stylesheet to print or save directly as PDF.
* **Contact Form**: Pre-configured for **Netlify Forms** (`data-netlify="true"`) or Formspree with zero backend server required.

---

## 📁 Project Structure

```text
ammar-portfolio/
├── angular.json                     # Angular 17 workspace configuration
├── package.json                     # Dependencies & build scripts
├── tsconfig.json                    # TypeScript compiler options
├── tsconfig.app.json                # Application TypeScript configuration
├── .gitignore                       # Git ignore file
├── README.md                        # Documentation & deployment guide
├── index.html                       # Standalone offline preview
├── styles.css                       # Standalone CSS
├── app.js                           # Standalone JS
├── assets/
│   └── avatar.jpg                   # Developer portrait asset
└── src/
    ├── index.html                   # Angular root HTML
    ├── main.ts                      # Angular standalone bootstrap
    ├── styles.scss                  # Design system tokens & global SCSS
    ├── assets/
    │   └── avatar.jpg               # Avatar asset
    └── app/
        ├── app.config.ts            # Application configuration
        ├── app.component.ts         # Root component assembling layout
        ├── models/
        │   └── portfolio.model.ts   # TypeScript interfaces & types
        ├── services/
        │   ├── portfolio.service.ts # Reactive data service with Signals
        │   └── theme.service.ts     # Dark/Light theme manager
        └── components/
            ├── header.component.ts  # Navbar with responsive drawer & theme toggle
            ├── hero.component.ts    # Hero section with stats & visual cards
            ├── about.component.ts   # Bio & core engineering principles
            ├── skills.component.ts  # Filterable skills matrix
            ├── projects.component.ts# Enterprise project cards & filters
            ├── project-modal.component.ts # Architecture deep-dive dialog
            ├── experience.component.ts # Work history & education timeline
            ├── contact.component.ts # Contact cards & Netlify form
            ├── resume-modal.component.ts  # Printable ATS resume modal
            └── footer.component.ts  # Footer links & copyright
```

---

## ⚡ Quick Start: Running Locally

### Option A: Instant Offline Preview (No Node.js Required)
Simply double-click the `index.html` file in the project folder to open and explore the portfolio immediately in your browser (Google Chrome, Microsoft Edge, Brave, Firefox, etc.).

### Option B: Angular CLI Development Server
If you have [Node.js (v18+)](https://nodejs.org/) installed:

```bash
# 1. Navigate to the project directory
cd ammar-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```
Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 🌐 100% Free Public Deployment Guide

You can deploy this portfolio to the public for **free with HTTPS and a custom URL**:

### 1. Deploy via **Netlify** (Recommended & Easiest)

#### Method 1: Netlify Drop (Takes 30 Seconds, No Git Required!)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (log in or sign up for free).
2. Drag and drop the `ammar-portfolio` folder directly into the browser window.
3. Done! Netlify gives you an instant live URL like `https://ammar-ahmed.netlify.app`.

#### Method 2: Git Repository (Automatic continuous deployment)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Muhammad Ammar Ahmed Portfolio"
   git remote add origin https://github.com/your-username/ammar-portfolio.git
   git push -u origin main
   ```
2. Log into [Netlify](https://www.netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository. Netlify detects Angular automatically:
   * **Build command**: `npm run build`
   * **Publish directory**: `dist/ammar-portfolio/browser`
4. Click **Deploy**. Your site is now live with automatic updates on every git push!

---

### 2. Deploy via **Vercel**
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `ammar-portfolio` GitHub repo.
4. Vercel automatically detects the Angular framework preset:
   * **Build Command**: `ng build`
   * **Output Directory**: `dist/ammar-portfolio/browser`
5. Click **Deploy**. Your portfolio will be live at `https://your-name.vercel.app`.

---

### 3. Deploy via **GitHub Pages**
1. Install the Angular GitHub Pages deploy tool:
   ```bash
   npx angular-cli-ghpages --dir=dist/ammar-portfolio/browser
   ```
2. In your GitHub repository settings, under **Pages**, select `gh-pages` branch.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## 📄 License & Attribution
Designed & engineered for **Muhammad Ammar Ahmed**.
Open-source under the MIT License.
