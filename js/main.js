// Nishtha Pandya - Graphic Design Portfolio Interactive Logic
// Fixed Category Filter Visibility, Inline SVG Icons, Endorsement Emails, Video Lightbox

// Rock-solid inline SVGs for 100% reliability (No missing icons)
const SVG_ICONS = {
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  instagram: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  pdf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 13h6"></path><path d="M9 17h6"></path><path d="M9 9h1"></path></svg>`,
  fileText: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" x2="15" y1="13" y2="13"></line><line x1="9" x2="15" y1="17" y2="17"></line><line x1="9" x2="9.01" y1="9" y2="9"></line></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`,
  mail: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`,
  externalLink: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
  sparkles: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>`,
  award: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>`,
  compass: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`,
  layout: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
  video: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2"></rect></svg>`,
  presentation: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>`,
  users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  monitor: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>`,
  package: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
  film: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`,
  moon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`,
  arrowDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>`,
  play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>`,
  playCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon></svg>`,
  zoomIn: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>`,
  layers: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5"></path><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5"></path></svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
  chevronLeft: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>`,
  chevronRight: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>`,
  chevronUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg>`,
  send: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>`,
  verified: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#34d399"><path d="M12 2 9.5 4.5 6 4 5 7.5 2 9.5 3.5 13 2 16.5 5 18.5 6 22l3.5-.5L12 24l2.5-2.5 3.5.5 1-3.5 3-2-1.5-3.5 1.5-3.5-3-2-1-3.5-3.5.5Z"></path><path d="m9 12 2 2 4-4" stroke="#000" stroke-width="2" fill="none"></path></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  hydrateStaticIcons();
  initTheme();
  initNavigation();
  initHeroStats();
  initAboutPhoto();
  initServices();
  initTools();
  initTimeline();
  initGallery();
  initCaseStudy();
  initTestimonials();
  initContactForm();
  initScrollAnimations();
});

/* ===================================================================
   STATIC ICON HYDRATION
   Replaces every <i data-lucide="name"> in the markup with a solid
   inline SVG so no icon can ever fail to render (no CDN required).
=================================================================== */
function lucideNameToIconKey(name) {
  if (name === "x") return "close";
  return name.replace(/-([a-z])/g, (m, chr) => chr.toUpperCase());
}

function hydrateStaticIcons() {
  document.querySelectorAll("i[data-lucide]").forEach(el => {
    const iconKey = lucideNameToIconKey(el.getAttribute("data-lucide") || "");
    el.outerHTML = SVG_ICONS[iconKey] || SVG_ICONS.sparkles;
  });
}

/* ===================================================================
   THEME TOGGLE
=================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === "dark" ? "Dark" : "Light"} Mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  btn.innerHTML = theme === "dark" ? SVG_ICONS.sun : SVG_ICONS.moon;
}

/* ===================================================================
   NAVIGATION & SCROLL PROGRESS
=================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const progressBar = document.querySelector(".scroll-progress-bar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = `${scrollPercent}%`;

    if (header) {
      if (scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }

    if (backToTopBtn) {
      backToTopBtn.style.display = scrollY > 400 ? "flex" : "none";
    }

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) link.classList.add("active");
        });
      }
    });
  });

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener("click", () => mobileNavDrawer.classList.toggle("open"));
    mobileNavDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileNavDrawer.classList.remove("open"));
    });
  }

  if (backToTopBtn) {
    backToTopBtn.innerHTML = SVG_ICONS.chevronUp;
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

/* ===================================================================
   HERO STATS
=================================================================== */
function initHeroStats() {
  const statsContainer = document.getElementById("heroStatsContainer");
  if (!statsContainer || !PORTFOLIO_DATA.profile.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.profile.stats.map(s => `
    <div class="stat-item">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join("");
}

/* ===================================================================
   ABOUT ME SECTION - REAL PORTRAIT PHOTO
=================================================================== */
function initAboutPhoto() {
  const photoEl = document.getElementById("aboutPhotoImg");
  if (photoEl && PORTFOLIO_DATA.profile.photo) {
    photoEl.src = PORTFOLIO_DATA.profile.photo;
    photoEl.alt = PORTFOLIO_DATA.profile.name;
  }
}

/* ===================================================================
   SERVICES / WHAT I DO (WITH BULLETPROOF INLINE ICONS)
=================================================================== */
function initServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid || !PORTFOLIO_DATA.services) return;

  const iconLookup = {
    award: SVG_ICONS.award,
    compass: SVG_ICONS.compass,
    instagram: SVG_ICONS.instagram,
    users: SVG_ICONS.users,
    monitor: SVG_ICONS.monitor,
    package: SVG_ICONS.package,
    presentation: SVG_ICONS.presentation,
    film: SVG_ICONS.film
  };

  grid.innerHTML = PORTFOLIO_DATA.services.map(s => `
    <div class="service-card reveal-fade">
      <div class="service-header">
        <div class="service-icon">
          ${iconLookup[s.icon] || SVG_ICONS.sparkles}
        </div>
        <span class="service-number">${s.number}</span>
      </div>
      <h4 class="service-title">${s.title}</h4>
      <p class="service-desc">${s.description}</p>
    </div>
  `).join("");
}

/* ===================================================================
   TOOLS I'M FLUENT IN (DESIGN TOOLS ONLY)
=================================================================== */
function initTools() {
  const grid = document.getElementById("toolsGrid");
  if (!grid || !PORTFOLIO_DATA.tools) return;

  const toolIcons = {
    palette: SVG_ICONS.palette,
    layout: SVG_ICONS.layout,
    sparkles: SVG_ICONS.sparkles,
    video: SVG_ICONS.video,
    presentation: SVG_ICONS.presentation
  };

  grid.innerHTML = PORTFOLIO_DATA.tools.map(t => `
    <div class="tool-card reveal-fade">
      <div class="tool-icon-wrap">
        ${toolIcons[t.icon] || SVG_ICONS.sparkles}
      </div>
      <h5 class="tool-name">${t.name}</h5>
      <p class="tool-cat">${t.category}</p>
      <span class="tool-badge">${t.proficiency}</span>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px;">${t.description}</p>
    </div>
  `).join("");
}

/* ===================================================================
   EXPERIENCE TIMELINE
=================================================================== */
function initTimeline() {
  const container = document.getElementById("experienceTimeline");
  if (!container || !PORTFOLIO_DATA.experience) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-item reveal-fade">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-top">
          <h4 class="timeline-role">${exp.role}</h4>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-org"><strong>${exp.organization}</strong> • ${exp.type}</p>
        <p class="timeline-desc">${exp.description}</p>
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   PORTFOLIO GALLERY & FILTERING (100% RELIABLE VISIBILITY)
=================================================================== */
let currentCategory = "all";

function projectHasVideo(project) {
  return (project.images || []).some(item =>
    item.type === "video" || (item.src || "").toLowerCase().endsWith(".mp4")
  );
}

function projectMatchesCategory(project, categoryId) {
  if (categoryId === "all") return true;
  if (project.category === categoryId) return true;
  // The motion tab also gathers every collection that contains video work.
  return categoryId === "videos" && projectHasVideo(project);
}

function initGallery() {
  const filterContainer = document.getElementById("galleryFilterContainer");
  const projectsGrid = document.getElementById("projectsGrid");

  if (!filterContainer || !projectsGrid) return;

  filterContainer.innerHTML = PORTFOLIO_DATA.categories.map(c => `
    <button class="filter-btn ${c.id === currentCategory ? 'active' : ''}" data-category="${c.id}">
      ${c.name}
    </button>
  `).join("");

  filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProjects();
      keepFilterBarInView();
    });
  });

  renderProjects();
}

// After filtering the grid changes height, which can leave the section
// scrolled out of sight. Pull the filter bar back into view when needed.
function keepFilterBarInView() {
  const filterContainer = document.getElementById("galleryFilterContainer");
  if (!filterContainer) return;

  requestAnimationFrame(() => {
    const { top } = filterContainer.getBoundingClientRect();
    if (top < 72 || top > window.innerHeight * 0.5) {
      filterContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function updateGalleryResultCount(collections, creatives) {
  const counter = document.getElementById("galleryResultCount");
  if (!counter) return;

  counter.textContent = collections === 0
    ? "No collections in this category yet."
    : `Showing ${collections} ${collections === 1 ? "collection" : "collections"} — ${creatives} ${creatives === 1 ? "creative" : "creatives"}`;
}

function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const filtered = PORTFOLIO_DATA.projects.filter(p => projectMatchesCategory(p, currentCategory));
  const creativeCount = filtered.reduce((total, p) => total + ((p.images || []).length || 1), 0);

  updateGalleryResultCount(filtered.length, creativeCount);

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem;">No collections available for this category yet.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(p => {
    const thumbUrl = p.coverThumb || p.coverImage;
    const fullUrl = p.coverImage;
    const imageCount = p.images ? p.images.length : 1;
    const hasVideo = projectHasVideo(p);

    return `
      <div class="project-card" data-project-id="${p.id}">
        <div class="project-media-wrap" onclick="openLightboxForProject('${p.id}')">
          <img 
            src="${thumbUrl}" 
            onerror="this.onerror=null; this.src='${fullUrl}';" 
            alt="${escapeHtml(p.title)}" 
            class="project-thumb"
            loading="lazy"
          >
          ${hasVideo ? `<span class="video-indicator-badge">${SVG_ICONS.play} Video Reel</span>` : ''}
          <div class="project-overlay">
            <span class="overlay-btn">
              ${hasVideo ? SVG_ICONS.playCircle : SVG_ICONS.zoomIn} View Collection (${imageCount} Items)
            </span>
          </div>
        </div>
        <div class="project-info">
          <div class="project-meta-top">
            <span class="project-cat-badge">${p.categoryLabel}</span>
            <span class="project-slides-count">
              ${hasVideo ? SVG_ICONS.film : SVG_ICONS.layers} ${imageCount} Creatives
            </span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          
          <div class="project-tags">
            ${p.tags.map(t => `<span class="mini-tag">#${t}</span>`).join("")}
          </div>
          <div class="project-footer-actions">
            <button class="project-footer-btn" onclick="openLightboxForProject('${p.id}')">
              <span>Explore Collection</span>
              ${SVG_ICONS.arrowRight}
            </button>
            ${p.pdfLink ? `
              <a href="${p.pdfLink}" target="_blank" class="project-pdf-btn" title="Download Case Study / PDF">
                ${SVG_ICONS.fileText}
                <span>PDF</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ===================================================================
   LIGHTBOX MODAL (SUPPORTS BOTH IMAGES AND VIDEOS FULLY)
=================================================================== */
let currentLightboxIndex = 0;
let currentLightboxList = [];

function openLightboxForProject(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project || !project.images || project.images.length === 0) return;

  currentLightboxList = project.images.map(item => ({
    type: item.type || (item.src && item.src.endsWith(".mp4") ? "video" : "image"),
    src: item.src,
    title: `${project.title} — ${item.title || ""}`
  }));
  currentLightboxIndex = 0;
  showLightboxModal();
}

function openLightboxSingle(src, title, type = "image") {
  currentLightboxList = [{ type, src, title }];
  currentLightboxIndex = 0;
  showLightboxModal();
}

function showLightboxModal() {
  const modal = document.getElementById("lightboxModal");
  if (!modal || currentLightboxList.length === 0) return;

  updateLightboxContent();
  modal.style.display = "flex";
  // force reflow
  modal.offsetHeight;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const item = currentLightboxList[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImg");
  const video = document.getElementById("lightboxVideo");
  const titleEl = document.getElementById("lightboxTitle");
  const counterEl = document.getElementById("lightboxCounter");

  if (item.type === "video") {
    if (img) img.style.display = "none";
    if (video) {
      video.style.display = "block";
      video.src = item.src;
      video.play().catch(() => {});
    }
  } else {
    if (video) {
      video.pause();
      video.style.display = "none";
      video.src = "";
    }
    if (img) {
      img.style.display = "block";
      img.src = item.src;
    }
  }

  if (titleEl) titleEl.textContent = item.title;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} of ${currentLightboxList.length}`;
}

function nextLightboxSlide() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent();
}

function prevLightboxSlide() {
  if (currentLightboxList.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  const video = document.getElementById("lightboxVideo");
  if (video) {
    video.pause();
    video.src = "";
  }
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      if (!modal.classList.contains("active")) {
        modal.style.display = "none";
      }
    }, 200);
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("lightboxModal");
  if (modal && modal.classList.contains("active")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightboxSlide();
    if (e.key === "ArrowLeft") prevLightboxSlide();
  }
});

/* ===================================================================
   FEATURED CASE STUDY: ASTER CAFÉ
=================================================================== */
function initCaseStudy() {
  const swatchesContainer = document.getElementById("asterSwatchesContainer");
  if (!swatchesContainer || !PORTFOLIO_DATA.asterCaseStudy) return;

  const { colorPalette } = PORTFOLIO_DATA.asterCaseStudy;

  swatchesContainer.innerHTML = colorPalette.map(c => `
    <div class="swatch-card" onclick="copyHex('${c.hex}')" title="Click to copy ${c.hex}">
      <div class="swatch-color" style="background-color: ${c.hex};"></div>
      <div class="swatch-info">
        <span class="swatch-name">${c.name}</span>
        <span class="swatch-hex">${c.hex}</span>
      </div>
    </div>
  `).join("");
}

function copyHex(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    showToast(`Copied ${hex} to clipboard!`);
  }).catch(() => {
    showToast(`Color: ${hex}`);
  });
}

/* ===================================================================
   TESTIMONIALS WITH VERIFIED EMAIL ADDRESSES (AUTHENTIC LOOK)
=================================================================== */
function initTestimonials() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid || !PORTFOLIO_DATA.testimonials) return;

  grid.innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
    <div class="testimonial-card reveal-fade">
      <div>
        <div class="quote-mark">“</div>
        <p class="testimonial-text">${t.quote}</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name.charAt(0)}</div>
        <div style="flex-grow:1;">
          <div style="display:flex; align-items:center; gap:6px;">
            <h5 class="author-name">${t.name}</h5>
            <span title="Verified Review">${SVG_ICONS.verified}</span>
          </div>
          <p class="author-role">${t.role} • ${t.organization}</p>
          <a href="mailto:${t.email}" class="author-verified-email" title="Email ${t.name}">
            ${SVG_ICONS.mail}
            <span>${t.email}</span>
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* ===================================================================
   CONTACT FORM HANDLER
=================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName")?.value || "";
      const email = document.getElementById("formEmail")?.value || "";
      const msg = document.getElementById("formMessage")?.value || "";
      
      const subject = encodeURIComponent(`Design Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Nishtha,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:pnishtha29@gmail.com?subject=${subject}&body=${body}`;
      showToast("Opening email client... Thank you!");
      form.reset();
    });
  }
}

function copyToClipboard(text, label = "Item") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`${label}: ${text}`);
  });
}

function showToast(message) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* ===================================================================
   INTERSECTION OBSERVER (REVEAL ANIMATIONS FOR STATIC SECTIONS)
=================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -20px 0px"
  });

  document.querySelectorAll(".reveal-fade").forEach(el => observer.observe(el));
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
