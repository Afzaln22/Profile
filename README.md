# 🚀 Afzal N - Software Engineer & AI Developer Portfolio

A modern, high-performance, and responsive developer portfolio website engineered with **React 19**, **Vite**, and **Tailwind CSS**. Designed following the clean aesthetic of [portfolio-praneeth.netlify.app](https://portfolio-praneeth.netlify.app/) and customized for **Afzal N** (`Afzaln22`).

---

## 🌟 Key Features

- **⚡ Modern Responsive UI/UX**: Built with Tailwind CSS, Space Grotesk and Inter typography, subtle gradients, and glassmorphism.
- **🌓 Seamless Dark / Light Mode**: System theme detection with smooth transitions and persistent `localStorage` saving.
- **✨ Dynamic Hero Section**:
  - Live animated typewriter cycling through developer roles.
  - Interactive profile card with orbiting technology badges (Python, FastAPI, PyTorch, React).
  - Floating status pills (MCA Candidate, 100% Pytest Verified).
  - Quick action CTAs (View Projects, Contact, View Resume).
- **📖 Comprehensive About Me**:
  - Narrative on backend engineering, deep learning, computer vision, and system reliability.
  - Academic credentials: Master of Computer Applications (MCA) & Bachelor of Computer Applications (BCA).
  - Key focus pillars and metric cards.
- **🛠️ Interactive Technical Skills**: Categorized filterable skill cards for Backend & APIs, AI & Vision, Web & Mobile, Databases, and DevOps.
- **💻 Featured Engineering Projects**:
  - **AlgoForge**: Quantitative Algorithmic Trading & Agentic AI Platform (LangGraph 4-stage StateGraph, FastAPI, React 19).
  - **DeepShield**: Explainable AI Deepfake Detection & Multimedia Authenticity (PyTorch, Vision Transformers, Grad-CAM, Three.js).
  - **ESports Elite Gamers Den**: Tournament & Matchmaking Hub (Next.js 16, FastAPI, SQLAlchemy, SQLite/PostgreSQL).
  - **Brandpage Showcase**: Interactive Responsive Modern Brand & E-Commerce Web App (React, Tailwind CSS).
  - Interactive **Deep Dive & Specs Modal** for each project.
- **💼 Work & Project Experience**: Structured timeline detailing lead software engineering initiatives and academic engineering.
- **🔬 Research & Certifications**: Dedicated section highlighting Explainable AI (Grad-CAM), LangGraph State Machines, and Asynchronous Microservices.
- **📫 Working Contact & Direct Channels**:
  - Direct 1-click email copy & mailto fallback.
  - Interactive contact form with real-time feedback and celebratory confetti.
  - Direct links to GitHub (`Afzaln22`) and LinkedIn profiles.
- **📄 Built-in Resume Viewer & PDF Export**: Instant in-browser resume preview with 1-click print and save to PDF.

---

## 🛠️ Tech Stack

- **Frontend**: React 18/19, Vite, Tailwind CSS, Lucide React, Canvas Confetti
- **Typography**: Inter (Body), Space Grotesk (Headings), Monospace (Code/Metrics)
- **Deployment**: Netlify / Vercel / GitHub Pages ready

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory ready for deployment.

---

## 🌐 Deploy to Netlify (Same as Reference)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/Afzaln22/portfolio.git
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Select your `portfolio` repository.
5. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**!

---

## 📝 Customization

All personal details, skills, project specs, and links are cleanly separated in:
`src/data/portfolioData.js`

To modify or add projects, simply update the JSON array in that file.

---

## 🤖 Autonomous Execution & Automated Git Workflow Guidelines

To ensure seamless continuous development and granular version control:

1. **Autonomous End-to-End Execution**:
   - Once a task or development instruction is started, execute all steps autonomously until completion without pausing to ask for permission ("allow") for routine operations.
   - Complete file creation, code modifications, testing, and validation end-to-end.

2. **Automated Incremental Git Pushing**:
   - **No Giant Batches**: Do not accumulate changes and push everything all at once at the end.
   - **Atomic Feature Commits**: After creating or modifying files for a specific feature, immediately stage, commit, and push those changes to the remote repository.
   - **Incremental Corrections**: If any bug fix, styling refinement, or correction is made afterward, immediately commit and push that correction as a separate incremental commit.
   - **Remote Branch**: Maintain continuous synchronization with the configured remote repository (`origin Main:main` / `origin Main`).

