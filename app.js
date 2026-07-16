// --- FALLBACK REPOS DATA (If GitHub API rate limit is reached or offline) ---
const FALLBACK_REPOS = [
  {
    "name": "AV_EngApp",
    "description": "Active English-learning application highlighting UI design and core TS mechanics.",
    "html_url": "https://github.com/Tunaanhgamedev/AV_EngApp",
    "language": "TypeScript",
    "stargazers_count": 1,
    "created_at": "2026-05-08T10:46:27Z",
    "updated_at": "2026-07-16T12:14:04Z"
  },
  {
    "name": "Block_Puzzle",
    "description": "TypeScript puzzle game with responsive drag-and-drop gameplay mechanics.",
    "html_url": "https://github.com/Tunaanhgamedev/Block_Puzzle",
    "language": "TypeScript",
    "stargazers_count": 0,
    "created_at": "2026-05-30T10:36:52Z",
    "updated_at": "2026-06-01T14:04:30Z"
  },
  {
    "name": "StickWarLegacy",
    "description": "JavaScript-based clone/adaptation of the classic Stick War Legacy game.",
    "html_url": "https://github.com/Tunaanhgamedev/StickWarLegacy",
    "language": "JavaScript",
    "stargazers_count": 0,
    "created_at": "2026-06-01T14:07:48Z",
    "updated_at": "2026-06-01T15:19:46Z"
  },
  {
    "name": "2D_TopDown",
    "description": "A 2D top-down Unity game implementing smart enemy AI, inventory systems, and core gameplay loops.",
    "html_url": "https://github.com/Tunaanhgamedev/2D_TopDown",
    "language": "C#",
    "stargazers_count": 0,
    "created_at": "2026-04-18T15:06:55Z",
    "updated_at": "2026-05-21T16:31:41Z"
  },
  {
    "name": "Shooter2D",
    "description": "2D Shooter game built in Unity, focusing on shooting mechanics, pathfinding, and waves controls.",
    "html_url": "https://github.com/Tunaanhgamedev/Shooter2D",
    "language": "C#",
    "stargazers_count": 0,
    "created_at": "2026-05-15T16:21:04Z",
    "updated_at": "2026-05-16T10:26:47Z"
  },
  {
    "name": "Secure_Chat",
    "description": "A Kotlin-based messaging application featuring end-to-end encryption and real-time database syncing.",
    "html_url": "https://github.com/Tunaanhgamedev/Secure_Chat",
    "language": "Kotlin",
    "stargazers_count": 0,
    "created_at": "2026-03-21T06:16:58Z",
    "updated_at": "2026-06-27T20:00:37Z"
  },
  {
    "name": "TTS_offlineVoice",
    "description": "Offline text-to-speech service using local voice engines and modern Web APIs.",
    "html_url": "https://github.com/Tunaanhgamedev/TTS_offlineVoice",
    "language": "TypeScript",
    "stargazers_count": 0,
    "created_at": "2026-05-11T17:29:23Z",
    "updated_at": "2026-05-13T19:44:30Z"
  },
  {
    "name": "UI_SQL",
    "description": "C# desktop utility providing a rich GUI for managing database connections, execution and visual results.",
    "html_url": "https://github.com/Tunaanhgamedev/UI_SQL",
    "language": "C#",
    "stargazers_count": 0,
    "created_at": "2025-04-21T06:04:24Z",
    "updated_at": "2026-07-01T18:36:16Z"
  },
  {
    "name": "Cinema",
    "description": "Java-based cinema booking system managing showtimes, seating maps, tickets, and user roles.",
    "html_url": "https://github.com/Tunaanhgamedev/Cinema",
    "language": "Java",
    "stargazers_count": 0,
    "created_at": "2026-04-29T16:30:50Z",
    "updated_at": "2026-06-21T14:21:23Z"
  },
  {
    "name": "Qly_Diemsinhvien",
    "description": "PHP and MySQL management system for tracking student grades, semesters, and reports.",
    "html_url": "https://github.com/Tunaanhgamedev/Qly_Diemsinhvien",
    "language": "PHP",
    "stargazers_count": 0,
    "created_at": "2025-05-26T03:02:57Z",
    "updated_at": "2026-05-01T16:20:51Z"
  }
];

// --- FEATURED PROJECTS LIST (Curated details for visually stunning cards) ---
const FEATURED_PROJECTS = [
  {
    name: "AV English App",
    repoName: "AV_EngApp",
    description: "Dự án tâm huyết - Ứng dụng học tiếng Anh đa năng viết bằng TypeScript & React. Tích hợp hệ thống Flashcards tương tác, thuật toán lặp lại ngắt quãng (Spaced Repetition) để tối ưu ghi nhớ từ vựng, các bài kiểm tra đánh giá năng lực và thống kê tiến trình học tập trực quan.",
    language: "TypeScript",
    category: "web",
    stars: 1,
    githubUrl: "https://github.com/Tunaanhgamedev/AV_EngApp",
    customTags: ["TypeScript", "React", "Spaced Repetition", "UI/UX Design"]
  },
  {
    name: "Stick War Legacy Clone",
    repoName: "StickWarLegacy",
    description: "Một bản sao trò chơi chiến thuật cổ điển được dựng lại bằng JavaScript thuần. Tập trung vào hệ thống điều khiển AI binh lính, cơ chế kéo thả đội hình, và hệ thống khai thác tài nguyên mượt mà.",
    language: "JavaScript",
    category: "game",
    stars: 0,
    githubUrl: "https://github.com/Tunaanhgamedev/StickWarLegacy",
    customTags: ["AI Control", "Game Loop", "Raw JS Canvas"]
  },
  {
    name: "2D TopDown RPG Engine",
    repoName: "2D_TopDown",
    description: "Dự án phát triển game nhập vai góc nhìn từ trên xuống trong Unity sử dụng C#. Triển khai hệ thống di chuyển nâng cao, quản lý vật phẩm (Inventory), cơ chế chiến đấu và trí tuệ nhân tạo (AI) cho quái vật.",
    language: "C#",
    category: "game",
    stars: 0,
    githubUrl: "https://github.com/Tunaanhgamedev/2D_TopDown",
    customTags: ["Unity 2D", "C# Gameplay", "AI Behavior Tree"]
  },
  {
    name: "Secure Chat Messenger",
    repoName: "Secure_Chat",
    description: "Ứng dụng chat bảo mật phát triển bằng Kotlin trên hệ điều hành Android. Tích hợp hệ thống mã hóa đầu cuối (E2EE), xác thực người dùng bảo mật, và đồng bộ tin nhắn thời gian thực qua Firebase.",
    language: "Kotlin",
    category: "app",
    stars: 0,
    githubUrl: "https://github.com/Tunaanhgamedev/Secure_Chat",
    customTags: ["Android SDK", "E2EE", "Firebase", "Realtime Sync"]
  },
  {
    name: "UI SQL Database Manager",
    repoName: "UI_SQL",
    description: "Một công cụ quản lý cơ sở dữ liệu trên máy tính được viết bằng C#. Cung cấp giao diện trực quan để kết nối, chạy các câu lệnh SQL tự do và hiển thị kết quả truy vấn dưới dạng bảng biểu.",
    language: "C#",
    category: "tool",
    stars: 0,
    githubUrl: "https://github.com/Tunaanhgamedev/UI_SQL",
    customTags: ["C# Desktop", ".NET Windows Form", "Database Client"]
  },
  {
    name: "Offline TTS Engine",
    repoName: "TTS_offlineVoice",
    description: "Công cụ chuyển đổi văn bản thành giọng nói ngoại tuyến viết bằng TypeScript. Hỗ trợ nhiều gói ngôn ngữ cục bộ mà không cần kết nối mạng internet, tối ưu hóa độ trễ phản hồi âm thanh.",
    language: "TypeScript",
    category: "tool",
    stars: 0,
    githubUrl: "https://github.com/Tunaanhgamedev/TTS_offlineVoice",
    customTags: ["Speech Synthesis", "Offline API", "Web Voice Engine"]
  }
];

// --- TECH STACK DATA ---
const TECH_DATA = {
  gamedev: [
    { name: "Unity Engine", icon: "unity" },
    { name: "C# Scripting", icon: "cs" },
    { name: "Gameplay Math", icon: "custom-math" },
    { name: "2D/3D Physics", icon: "custom-physics" },
    { name: "AI Behavior Trees", icon: "custom-ai" }
  ],
  languages: [
    { name: "C++", icon: "cpp" },
    { name: "C#", icon: "cs" },
    { name: "Java", icon: "java" },
    { name: "Kotlin", icon: "kotlin" },
    { name: "TypeScript", icon: "ts" },
    { name: "JavaScript", icon: "js" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" }
  ],
  frameworks: [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "Spring Boot", icon: "spring" },
    { name: "Laravel", icon: "laravel" }
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Supabase", icon: "supabase" },
    { name: "Firebase", icon: "firebase" },
    { name: "Redis", icon: "redis" },
    { name: "Postman", icon: "postman" },
    { name: "Linux", icon: "linux" },
    { name: "VS Code", icon: "vscode" }
  ]
};

// --- APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initParticleCanvas();
  initTypingEffect();
  initScrollReveals();
  initTechTabs();
  renderFeaturedProjects();
  fetchAndRenderGithubRepos();
  initContactForm();
});

// --- NAVBAR SCROLL & MOBILE MENU ---
function initNavbar() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelectorAll("nav a");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    // Highlight nav link based on scroll position
    let fromTop = window.scrollY + 120;
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // Mobile navigation toggle
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
    const icon = navToggle.querySelector("i");
    if (nav.classList.contains("mobile-active")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });

  // Close mobile nav when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("mobile-active");
      navToggle.querySelector("i").className = "fas fa-bars";
    });
  });
}

// --- INTERACTIVE CANVAS PARTICLES ---
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const properties = {
    particleColor: "rgba(0, 242, 254, 0.45)",
    lineColor: "rgba(155, 81, 224, 0.08)",
    particleRadius: 2.2,
    particleCount: Math.min(65, Math.floor(window.innerWidth / 20)),
    particleMaxVelocity: 0.6,
    lineLength: 140,
  };

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.velocityX = (Math.random() * 2 - 1) * properties.particleMaxVelocity;
      this.velocityY = (Math.random() * 2 - 1) * properties.particleMaxVelocity;
    }

    position() {
      this.x += this.velocityX;
      this.y += this.velocityY;

      // Bounce off walls
      if (this.x < 0 || this.x > width) this.velocityX *= -1;
      if (this.y < 0 || this.y > height) this.velocityY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < properties.lineLength) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = 1 - distance / properties.lineLength;
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      
      // Interact with mouse
      if (mouse.x !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = 1 - distance / mouse.radius;
          ctx.strokeStyle = `rgba(155, 81, 224, ${alpha * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          
          // Repel slightly
          const force = (mouse.radius - distance) / mouse.radius;
          particles[i].x += (dx / distance) * force * 1.5;
          particles[i].y += (dy / distance) * force * 1.5;
        }
      }
    }
  }

  function setup() {
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    
    // Subtle mesh background grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.003)";
    ctx.lineWidth = 1;
    const gridSize = 80;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    particles.forEach(p => {
      p.position();
      p.draw();
    });
    drawLines();
    requestAnimationFrame(loop);
  }

  setup();
  loop();
}

// --- LIGHTWEIGHT TYPING EFFECT ---
function initTypingEffect() {
  const target = document.querySelector(".hero-typed");
  if (!target) return;

  const words = [
    "Game Developer //",
    "Gameplay Programmer //",
    "IT Student //",
    "Software Creator //"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    let displayText = "";

    if (isDeleting) {
      displayText = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      displayText = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 120;
    }

    target.innerHTML = `${displayText}<span class="typed-cursor">|</span>`;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2200; // Wait at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  setTimeout(type, 1000);
}

// --- SCROLL REVEALS (FADE-IN EFFECT) ---
function initScrollReveals() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );

  reveals.forEach(el => revealObserver.observe(el));
}

// --- TECH STACK INTERACTIVE TABS ---
function initTechTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const techGrid = document.querySelector(".tech-grid");
  if (!tabs.length || !techGrid) return;

  function renderCategory(category) {
    techGrid.style.opacity = 0;
    techGrid.style.transform = "translateY(10px)";
    
    setTimeout(() => {
      techGrid.innerHTML = "";
      const skills = TECH_DATA[category];
      
      skills.forEach(skill => {
        const card = document.createElement("div");
        card.className = "tech-card glass-card reveal active";
        
        let iconHtml = "";
        // Render custom svgs or fallback to skillicons url
        if (skill.icon.startsWith("custom-")) {
          // Special graphic icons
          const symbol = skill.icon === "custom-math" ? "∑" : (skill.icon === "custom-physics" ? "⚙" : "🧠");
          iconHtml = `<div style="font-size: 2.2rem; color: var(--accent-cyan); font-weight: bold; font-family: var(--font-hud)">${symbol}</div>`;
        } else {
          iconHtml = `<img src="https://skillicons.dev/icons?i=${skill.icon}" alt="${skill.name}" style="width: 42px; height: 42px;" />`;
        }
        
        card.innerHTML = `
          <div class="tech-icon">${iconHtml}</div>
          <div class="tech-name">${skill.name}</div>
        `;
        techGrid.appendChild(card);
      });
      
      techGrid.style.opacity = 1;
      techGrid.style.transform = "translateY(0)";
    }, 200);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCategory(tab.dataset.tab);
    });
  });

  // Load first category initially
  renderCategory("gamedev");
}

// --- RENDER FEATURED PROJECTS (GLOWING CARDS) ---
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-grid");
  if (!container) return;

  container.innerHTML = "";
  
  FEATURED_PROJECTS.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card glass-card reveal";
    
    // Generate ASCII/HTML visual code graphics depending on language
    let codeGraphic = "";
    if (project.language === "C#") {
      codeGraphic = `using UnityEngine;\npublic class ${project.repoName} : MonoBehaviour {\n    void Update() {\n        Move(Speed * Time.deltaTime);\n    }\n}`;
    } else if (project.language === "TypeScript" || project.language === "JavaScript") {
      codeGraphic = `import { Game } from './engine';\nconst app = new Game({\n    canvas: '#stage',\n    debug: true\n});\napp.start();`;
    } else {
      codeGraphic = `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("${project.name}")\n}`;
    }

    const tagsHtml = project.customTags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    const categoryLabel = project.category === "game" ? "Game Dev" : (project.category === "web" ? "Web App" : (project.category === "tool" ? "Utility" : "Mobile App"));
    const badgeClass = project.category === "game" ? "badge-purple" : "badge-cyan";

    card.innerHTML = `
      <div class="project-media">
        <div class="project-code-art">${codeGraphic}</div>
        <div class="project-badge-overlay">
          <span class="badge ${badgeClass}">${categoryLabel}</span>
        </div>
        <div class="project-icon-overlay">
          <i class="${getProjectCategoryIcon(project.category)} text-accent" style="font-size: 1.3rem; color: ${project.category === "game" ? "var(--accent-purple)" : "var(--accent-cyan)"}"></i>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-footer">
          <a href="${project.githubUrl}" target="_blank" class="project-link">
            <span>Chi tiết GitHub</span> <i class="fab fa-github"></i>
          </a>
          <span class="project-stars ${project.stars > 0 ? 'has-stars' : ''}">
            <i class="fas fa-star"></i> <span>${project.stars}</span>
          </span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

function getProjectCategoryIcon(cat) {
  switch (cat) {
    case "game": return "fas fa-gamepad";
    case "web": return "fas fa-globe";
    case "app": return "fas fa-mobile-alt";
    default: return "fas fa-tools";
  }
}

// --- DYNAMIC GITHUB API FETCH & RENDER ---
async function fetchAndRenderGithubRepos() {
  const container = document.getElementById("all-repos-grid");
  if (!container) return;

  container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-family: var(--font-hud); padding: 3rem 0;">
    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
    <div>Đang kết nối GitHub Hub...</div>
  </div>`;

  let repos = [];
  try {
    const response = await fetch("https://api.github.com/users/Tunaanhgamedev/repos?per_page=100&sort=updated");
    if (!response.ok) throw new Error("GitHub API Limit reached");
    
    const rawRepos = await response.json();
    // Filter out profile readme and only public non-forks
    repos = rawRepos
      .filter(repo => repo.name !== "Tunaanhgamedev" && !repo.fork)
      .map(repo => ({
        name: repo.name,
        description: repo.description || "Dự án nguồn mở trên GitHub của tôi.",
        html_url: repo.html_url,
        language: repo.language || "Markdown",
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at
      }));
  } catch (error) {
    console.warn("Falling back to static repos.json data due to:", error.message);
    repos = FALLBACK_REPOS;
  }

  // Remove spinner and render
  container.innerHTML = "";
  
  // Slice to top 8 repos initially, with a search input or load more option
  const featuredNames = FEATURED_PROJECTS.map(fp => fp.repoName);
  const remainingRepos = repos.filter(r => !featuredNames.includes(r.name));

  if (remainingRepos.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:var(--text-muted)">Không tìm thấy dự án phụ nào khác.</div>`;
    return;
  }

  renderRepoGrid(remainingRepos.slice(0, 8), container);

  // If there are more than 8 repos, add a Load More button
  if (remainingRepos.length > 8) {
    const footer = document.querySelector(".repos-hub-footer");
    if (footer) {
      footer.innerHTML = `
        <button class="btn btn-secondary" id="btn-load-all-repos">
          <span>Xem Toàn Bộ (${remainingRepos.length} Kho Lưu Trữ)</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      `;
      
      const btn = document.getElementById("btn-load-all-repos");
      btn.addEventListener("click", () => {
        container.innerHTML = "";
        renderRepoGrid(remainingRepos, container);
        footer.innerHTML = `
          <div style="font-family: var(--font-hud); font-size: 0.85rem; color: var(--accent-cyan)">
            // Đã tải toàn bộ kho lưu trữ GitHub thành công
          </div>
        `;
      });
    }
  }
}

function renderRepoGrid(list, targetElement) {
  list.forEach(repo => {
    const card = document.createElement("div");
    card.className = "project-card glass-card reveal active";
    card.style.height = "auto";
    card.style.minHeight = "230px";
    
    const formattedDate = new Date(repo.updated_at).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "short"
    });

    const langColor = getLanguageColor(repo.language);

    card.innerHTML = `
      <div class="project-content" style="padding: 1.5rem; justify-content: space-between; gap: 0.75rem;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <div style="display:flex; align-items:center; gap: 0.5rem;">
              <span class="badge badge-cyan" style="font-size: 0.6rem; padding: 0.15rem 0.4rem;">${repo.language}</span>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-hud)">CN: ${formattedDate}</span>
          </div>
          <h4 class="project-name" style="font-size: 1.1rem; margin-bottom: 0.5rem;">${repo.name}</h4>
          <p class="project-desc" style="font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
            ${repo.description}
          </p>
        </div>
        <div class="project-footer" style="padding-top: 0.75rem; margin-top: 0.25rem;">
          <a href="${repo.html_url}" target="_blank" class="project-link" style="font-size: 0.8rem">
            <span>Mã Nguồn</span> <i class="fab fa-github"></i>
          </a>
          <span class="project-stars ${repo.stargazers_count > 0 ? 'has-stars' : ''}" style="font-size: 0.8rem">
            <i class="fas fa-star"></i> <span>${repo.stargazers_count}</span>
          </span>
        </div>
      </div>
    `;
    targetElement.appendChild(card);
  });
}

function getLanguageColor(lang) {
  switch (lang) {
    case "C#": return "#178600";
    case "C++": return "#f34b7d";
    case "TypeScript": return "#3178c6";
    case "JavaScript": return "#f1e05a";
    case "Kotlin": return "#A97BFF";
    case "Java": return "#b07219";
    case "PHP": return "#4F5D95";
    case "HTML": return "#e34c26";
    case "CSS": return "#563d7c";
    default: return "var(--text-muted)";
  }
}

// --- INTERACTIVE CONTACT FORM ---
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.innerHTML;
    
    // Simple mock submit feedback
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>Đang truyền gói tin...</span>`;
    
    setTimeout(() => {
      btn.innerHTML = `<i class="fas fa-check"></i> <span>Đã gửi thành công!</span>`;
      btn.style.background = "linear-gradient(135deg, #00FF87 0%, #60EFFF 100%)";
      form.reset();
      
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.background = "";
      }, 3000);
    }, 1500);
  });
}
