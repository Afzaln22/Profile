export const portfolioData = {
  personalInfo: {
    name: "Afzal N",
    role: "Software Engineer & AI Developer",
    location: "Mysore, Karnataka, India",
    email: "afzaln2003@gmail.com",
    github: "https://github.com/Afzaln22",
    githubTab: "https://github.com/Afzaln22?tab=repositories",
    linkedin: "https://linkedin.com/in/afzal-n-87296b29",
    avatarUrl: "https://avatars.githubusercontent.com/u/162466583?v=4",
    roles: [
      "Python Developer | FastAPI & Backend",
      "AI / ML Enthusiast | PyTorch & Vision",
      "Full-Stack Developer | React & Next.js",
      "Agentic AI & Quantitative Systems Architect",
      "Flutter Developer | Cross-Platform Apps"
    ],
    shortBio:
      "MCA candidate and BCA graduate passionate about architecting practical, high-performance software solutions, scalable microservices, and explainable AI systems.",
    aboutBio:
      "I am an MCA candidate and BCA graduate with an unwavering passion for engineering practical, high-performance software. My core strengths reside in Python backend architectures (FastAPI, RESTful APIs, PostgreSQL, OOP, Concurrency), cutting-edge AI/ML systems (PyTorch, CNN, Vision Transformers, YOLO, Explainable AI with Grad-CAM), and modern full-stack web and cross-platform applications using React 19, Next.js, Tailwind CSS, and Flutter.",
    philosophy:
      "I believe in building software that is thoroughly tested, computationally efficient, and user-centric. From designing 4-stage LangGraph agentic state machines with hallucination guardrails to visualizing 3D forensic deepfake heatmaps, I turn complex requirements into robust production code.",
    stats: [
      { label: "Flagship Systems", value: "4+" },
      { label: "Pytest Test Suite", value: "100%" },
      { label: "Academic Standing", value: "MCA / BCA" },
      { label: "Location", value: "Mysore, India" }
    ]
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research & Certs", href: "#publications" },
    { name: "Contact", href: "#contact" }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Mysore, Karnataka, India",
      period: "2024 - 2026",
      status: "Candidate / In Progress",
      description:
        "Specializing in Advanced Software Architecture, Distributed Systems, Deep Learning, Cloud Computing, and High-Performance Backend Engineering.",
      highlights: ["Data Structures & Algorithms", "Agentic AI & LLM Systems", "Computer Vision & PyTorch", "Database Internals & Optimization"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Mysore, Karnataka, India",
      period: "2021 - 2024",
      status: "Graduated with Honors",
      description:
        "Comprehensive grounding in Computer Science fundamentals, Software Engineering methodologies, Relational Database Management, and Full-Stack Web Development.",
      highlights: ["Core Java & Python", "Relational Database Management (PostgreSQL, SQL)", "Web Development & REST APIs", "Object-Oriented Design"]
    }
  ],

  skillCategories: [
    {
      name: "Python, AI & Backend",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Python 3.11+", level: "Expert", icon: "🐍" },
        { name: "FastAPI", level: "Expert", icon: "⚡" },
        { name: "PyTorch & Deep Learning", level: "Advanced", icon: "🔥" },
        { name: "Computer Vision (CNN, ViT, YOLO)", level: "Advanced", icon: "👁️" },
        { name: "Explainable AI (Grad-CAM)", level: "Advanced", icon: "🔬" },
        { name: "Agentic AI & LangGraph", level: "Advanced", icon: "🤖" },
        { name: "RESTful Microservices", level: "Expert", icon: "🔌" },
        { name: "Node.js & Express", level: "Intermediate", icon: "🟢" }
      ]
    },
    {
      name: "Web & Mobile Development",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React 19 & Vite", level: "Advanced", icon: "⚛️" },
        { name: "Next.js 16 (App Router)", level: "Advanced", icon: "▲" },
        { name: "Tailwind CSS & Modern UI", level: "Expert", icon: "🎨" },
        { name: "JavaScript (ES6+) / TypeScript", level: "Advanced", icon: "📜" },
        { name: "Flutter & Dart", level: "Intermediate", icon: "📱" },
        { name: "Three.js & React Three Fiber", level: "Intermediate", icon: "🧊" },
        { name: "HTML5 & Modern CSS3", level: "Expert", icon: "🌐" }
      ]
    },
    {
      name: "Databases & Storage",
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
        { name: "SQLite", level: "Expert", icon: "🗄️" },
        { name: "SQLAlchemy ORM", level: "Advanced", icon: "🔗" },
        { name: "Vector Databases & RAG", level: "Advanced", icon: "🧭" },
        { name: "MongoDB", level: "Intermediate", icon: "🍃" }
      ]
    },
    {
      name: "Tools, DevOps & Testing",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git & GitHub Workflow", level: "Expert", icon: "🐙" },
        { name: "Docker & Containerization", level: "Intermediate", icon: "🐳" },
        { name: "Postman & API Testing", level: "Advanced", icon: "🚀" },
        { name: "Pytest (Automated Testing)", level: "Expert", icon: "🧪" },
        { name: "VS Code & Linux Environment", level: "Expert", icon: "💻" }
      ]
    }
  ],

  projects: [
    {
      id: "algoforge",
      title: "AlgoForge - Quantitative Algorithmic Trading & Agentic AI Platform",
      category: "AI & ML",
      badge: "Production Ready",
      featured: true,
      shortDescription:
        "Quantitative trading and algorithmic execution platform with real-time Level-2 order book depth, statistical VWAP envelopes, and a 4-stage LangGraph Agentic AI Quant Copilot.",
      description:
        "AlgoForge is a high-performance quantitative trading engine featuring real-time Level-2 order book depth, Cumulative Volume Delta (CVD) analytics, and automated broker webhook execution. At its core is a stateful LangGraph Agentic AI Copilot orchestrating Intent Routing, Tool Execution, Multi-Cloud LLM Synthesis, and strict Pydantic AI output guardrails against hallucination.",
      highlights: [
        "Stateful LangGraph execution loop with millisecond-level telemetry trace in the UI",
        "Multi-cloud AI synthesis supporting AWS Bedrock, Azure OpenAI, and local offline engine",
        "Strict Pydantic AI output guardrails preventing speculative claims and grounding market data",
        "Real-time interactive candlestick charts with ±1.0σ, ±2.0σ, and ±3.0σ VWAP deviation bands",
        "Automated 9-test Pytest test suite covering graph compilation, tool calls, and failovers (9/9 Passing)"
      ],
      techStack: ["Python 3.11", "FastAPI", "LangGraph", "React 19", "Tailwind CSS", "WebSockets", "Pytest", "Boto3"],
      githubUrl: "https://github.com/Afzaln22",
      demoUrl: "https://github.com/Afzaln22",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      stats: { tests: "9/9 Passing", latency: "<15ms", architecture: "StateGraph 4-Stage" }
    },
    {
      id: "deepshield",
      title: "DeepShield - Explainable AI Deepfake & Multimedia Authenticity Platform",
      category: "AI & ML",
      badge: "Research & Systems",
      featured: true,
      shortDescription:
        "Forensic multimedia authenticity platform combining PyTorch Vision Transformers (ViT), CNNs, and Grad-CAM heatmaps with interactive 3D visualizations via Three.js.",
      description:
        "DeepShield provides real-time detection of synthetic deepfake manipulation in images and video feeds. It couples high-precision deep learning classifiers (Vision Transformers and CNNs) with Explainable AI (Grad-CAM) to pinpoint manipulated facial regions, backed by an interactive Three.js 3D forensic viewer and a FastAPI microservices backend.",
      highlights: [
        "PyTorch Vision Transformer (ViT) & CNN deepfake classification pipeline",
        "Grad-CAM (Explainable AI) generating spatial attention heatmaps of manipulated artifacts",
        "Interactive 3D forensic visualization powered by Three.js and React Three Fiber",
        "FastAPI microservices supporting real-time webcam analysis and confidence breakdown",
        "High-performance client UI with smooth Framer Motion animations and Recharts telemetry"
      ],
      techStack: ["PyTorch", "FastAPI", "React", "Three.js", "React Three Fiber", "Grad-CAM", "Tailwind CSS"],
      githubUrl: "https://github.com/Afzaln22",
      demoUrl: "https://github.com/Afzaln22",
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      stats: { model: "ViT + CNN", xai: "Grad-CAM Heatmaps", visual: "Three.js 3D" }
    },
    {
      id: "esports",
      title: "ESports Elite Gamers Den - Tournament & Gaming Matchmaking Hub",
      category: "Full Stack",
      badge: "Full Stack",
      featured: true,
      shortDescription:
        "Full-stack esports tournament platform with automated single/double elimination bracket generation, live standings, and team management.",
      description:
        "An end-to-end tournament management platform built for competitive gaming communities. Features instant bracket scheduling, automated match reporting, secure JWT user authentication, dynamic team rosters, and responsive live dashboards powered by Next.js 16 and a high-concurrency FastAPI backend.",
      highlights: [
        "Automated tournament bracket generation with single and double elimination logic",
        "Next.js 16 (App Router) frontend with React 19 and Tailwind CSS",
        "High-performance asynchronous FastAPI backend with SQLAlchemy ORM and SQLite/PostgreSQL",
        "Secure role-based access control (RBAC) for tournament organizers, teams, and players",
        "Real-time scoreboard updates and dynamic team profile cards"
      ],
      techStack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "SQLAlchemy", "Tailwind CSS", "JWT Auth"],
      githubUrl: "https://github.com/Afzaln22",
      demoUrl: "https://github.com/Afzaln22",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      stats: { framework: "Next.js 16", backend: "FastAPI Async", db: "SQLAlchemy ORM" }
    },
    {
      id: "brandpage",
      title: "Brandpage Showcase - Modern E-Commerce Brand Web Application",
      category: "Frontend",
      badge: "Showcase",
      featured: false,
      shortDescription:
        "Modern, responsive e-commerce brand showcase demonstrating clean React component design, interactive product catalog, and seamless cart state.",
      description:
        "A stylish, mobile-responsive e-commerce and brand showcase designed to demonstrate high-performance UI engineering, interactive shopping cart management, fluid animations, and clean modular React code structure.",
      highlights: [
        "Component-driven React architecture with reusable interactive components",
        "Dynamic product filtering, responsive grid showcase, and modal previews",
        "Stateful cart drawer with instant quantity calculations and smooth transitions",
        "Fully responsive design optimized for mobile, tablet, and ultra-wide screens"
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide Icons"],
      githubUrl: "https://github.com/Afzaln22/Brandpage",
      demoUrl: "https://github.com/Afzaln22/Brandpage",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      stats: { design: "Mobile First", speed: "100 Lighthouse", stack: "React + Vite" }
    },
    {
      id: "vision-suite",
      title: "Computer Vision & Object Tracking Pipeline",
      category: "AI & ML",
      badge: "Computer Vision",
      featured: false,
      shortDescription:
        "Domain-specific computer vision pipeline leveraging YOLO and PyTorch for multi-class object detection and tracking.",
      description:
        "Custom-engineered computer vision framework designed for high-accuracy bounding box detection, dataset augmentation, and low-latency inference on video streams.",
      highlights: [
        "Trained custom YOLO & PyTorch models for object localization and classification",
        "Real-time video inference pipeline with frame-by-frame bounding box annotations",
        "Automated image preprocessing, noise filtering, and data augmentation workflows"
      ],
      techStack: ["Python", "PyTorch", "YOLO", "OpenCV", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/Afzaln22",
      demoUrl: "https://github.com/Afzaln22",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      stats: { inference: "Real-time", framework: "PyTorch & YOLO", library: "OpenCV" }
    }
  ],

  experience: [
    {
      role: "Lead Full-Stack & AI Software Developer",
      company: "Independent & Academic Engineering",
      period: "2024 - Present",
      type: "Project Engineering",
      location: "Mysore, Karnataka, India",
      description:
        "Architecting production-grade AI platforms and full-stack software solutions with automated testing, modern frontends, and robust backend architectures.",
      responsibilities: [
        "Architected AlgoForge: Engineered a 4-stage LangGraph Agentic AI StateGraph with multi-cloud synthesis (AWS Bedrock / Azure OpenAI) and automated Pydantic guardrails.",
        "Built DeepShield: Implemented PyTorch deepfake detection with Vision Transformers, CNNs, and Grad-CAM Explainable AI heatmaps paired with Three.js 3D forensic visualization.",
        "Designed high-concurrency asynchronous REST APIs using FastAPI, PostgreSQL, and SQLite, ensuring clean separation of concerns and robust data validation.",
        "Authored automated unit and integration test suites in Pytest, maintaining 100% passing test rates across mission-critical execution components."
      ],
      tags: ["Python", "FastAPI", "PyTorch", "LangGraph", "React 19", "Three.js", "Docker", "Pytest"]
    },
    {
      role: "Graduate Scholar & Systems Developer",
      company: "Master of Computer Applications (MCA)",
      period: "2024 - 2026",
      type: "Academic Excellence",
      location: "Mysore, Karnataka, India",
      description:
        "Pursuing advanced studies in computer science, focusing on algorithmic efficiency, machine learning architectures, and distributed systems design.",
      responsibilities: [
        "Conducted in-depth practical implementations of deep learning models, Vision Transformers, and Grad-CAM visualization.",
        "Engineered database schemas and complex relational queries using PostgreSQL and SQLite with SQLAlchemy ORM.",
        "Collaborated on full-stack web and cross-platform mobile prototypes utilizing modern React, Vite, and Flutter frameworks."
      ],
      tags: ["Algorithms", "Deep Learning", "Distributed Systems", "SQLAlchemy", "PostgreSQL", "Flutter"]
    },
    {
      role: "Undergraduate Computer Applications Developer",
      company: "Bachelor of Computer Applications (BCA)",
      period: "2021 - 2024",
      type: "Degree Program",
      location: "Mysore, Karnataka, India",
      description:
        "Graduated with honors, establishing core foundations in software development, data structures, object-oriented programming, and web systems.",
      responsibilities: [
        "Developed multiple web and desktop applications applying OOP principles and clean code practices.",
        "Built relational database solutions and mastered relational algebra, indexing, and transactional integrity.",
        "Participated in coding challenges and technical symposiums representing the institution."
      ],
      tags: ["Python", "Java", "Data Structures", "Database Design", "Web Development"]
    }
  ],

  publicationsAndResearch: [
    {
      id: 1,
      title: "Explainable Deep Learning in Multimedia Forensics (Grad-CAM & ViT)",
      category: "Research Project",
      issuer: "Independent Deep Learning Exploration",
      year: "2025",
      description:
        "Deep exploration into model interpretability for deepfake detection using Vision Transformers (ViT) and Grad-CAM attention heatmaps to localize subtle artifact anomalies in facial imagery.",
      tags: ["Explainable AI", "Grad-CAM", "Vision Transformers", "PyTorch", "Forensics"]
    },
    {
      id: 2,
      title: "Agentic AI Orchestration with LangGraph & Deterministic Guardrails",
      category: "Systems Architecture",
      issuer: "Applied AI Research",
      year: "2025",
      description:
        "Design of multi-agent state machines utilizing LangGraph StateGraphs, deterministic Pydantic output validation, and market telemetry grounding to eliminate LLM hallucinations in quant finance.",
      tags: ["LangGraph", "Agentic AI", "Pydantic AI", "Hallucination Defense", "FastAPI"]
    },
    {
      id: 3,
      title: "High-Concurrency Asynchronous Microservices in Python",
      category: "Backend Systems",
      issuer: "Software Architecture Studies",
      year: "2024",
      description:
        "Comprehensive architectural study and benchmark of asynchronous Python event loops (FastAPI, Starlette, Uvicorn) for sub-15ms real-time financial signal dispatch and WebSocket feeds.",
      tags: ["FastAPI", "AsyncIO", "WebSockets", "Microservices", "Performance"]
    },
    {
      id: 4,
      title: "Cross-Platform Application Architecture with React & Flutter",
      category: "Full Stack & Mobile",
      issuer: "Applied Engineering",
      year: "2024",
      description:
        "Evaluating component modularity, state reactivity, and unified REST API consumption patterns across web (React 19) and mobile (Flutter) codebases.",
      tags: ["React 19", "Flutter", "REST APIs", "State Management", "Tailwind CSS"]
    }
  ],

  contactInfo: {
    email: "afzaln2003@gmail.com",
    location: "Mysore, Karnataka, India",
    availability: "Available for Full-time Roles, Internships & AI Collaborations",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Afzaln22",
        username: "Afzaln22",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/afzal-n-87296b29",
        username: "afzal-n-87296b29",
        icon: "linkedin"
      },
      {
        name: "Email",
        url: "mailto:afzaln2003@gmail.com",
        username: "afzaln2003@gmail.com",
        icon: "mail"
      }
    ]
  }
};

