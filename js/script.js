(() => {
  "use strict";

  const STORAGE_KEY = "mediqora-theme";
  const doc = document.documentElement;
  const page = (
    window.location.pathname.split("/").pop() || "home.html"
  ).toLowerCase();

  // global favicon
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/x-icon";
  favicon.href = "assets/logo.png";
  document.head.appendChild(favicon);

  // ---------- Theme ----------
  const getPreferredTheme = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    return "light";
  };

  const applyTheme = (theme) => {
    doc.dataset.theme = theme;
    doc.style.colorScheme = theme;
    const button = document.getElementById("themeToggle");
    if (!button) return;
    const isDark = theme === "dark";
    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    button.setAttribute("title", isDark ? "Light mode" : "Dark mode");
    button.innerHTML = isDark
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42m0-12.72 1.42-1.42M5.64 18.36l-1.42 1.42"/><circle cx="12" cy="12" r="4"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 14.8A8.4 8.4 0 0 1 9.2 3.6 8.5 8.5 0 1 0 20.4 14.8Z"/></svg>';
  };

  applyTheme(getPreferredTheme());

  // ---------- Dynamic layout ----------
  const isActive = (name) => (page === name ? "active" : "");
  const productActive = [
    "feature-solutions.html",
    "producttour.html",
    "pricing.html",
  ].includes(page)
    ? "active"
    : "";
  const resourcesActive = [
    "blogs.html",
    "documentation.html",
    "faq.html",
    "updates.html",
  ].includes(page)
    ? "active"
    : "";

  const header = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="home.html" aria-label="Mediqora home">
          <img src="assets/logo.png" alt="Mediqora">
        </a>

        <nav class="nav" id="mainNav" aria-label="Primary navigation">
          <a class="${isActive("home.html")}" href="home.html">Home</a>
          <a class="${isActive("feature-solutions.html")}" href="feature-solutions.html">Features &amp; Solutions</a>
          <a class="${isActive("pricing.html")}" href="pricing.html">Pricing</a>
          <a class="${isActive("aboutus.html")}" href="aboutus.html">About</a>
          <a class="${resourcesActive}" href="blogs.html">Resources / Blog</a>
          <a class="${isActive("contactus.html") || isActive("bookdemo.html")}" href="contactus.html">Contact / Book a Demo</a>
        </nav>

        <div class="header-actions">
          <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch theme"></button>
          <a class="btn btn-primary header-cta" href="bookdemo.html">Book a Demo →</a>
          <button class="menu-toggle" id="menuToggle" type="button" aria-label="Toggle menu" aria-controls="mainNav" aria-expanded="false">☰</button>
        </div>
      </div>
    </header>`;

  const footer = `
<footer class="site-footer">
  <div class="container footer-main">
    
    <!-- Brand Info -->
    <div class="footer-brand">
      <div class="brand-logo">
        <img src="assets/logo.png" alt="Mediqora">
        <h3>Mediqora</h3>
      </div>
      <p>The all-in-one clinic management software for modern clinics and doctors. Built to simplify your work, so you can focus on what matters most — your patients.</p>
      <div class="social-links">
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

    <!-- Column 1: Product -->
    <div class="footer-col">
      <h4>Product</h4>
      <a href="feature-solutions.html">Features</a>
      <a href="feature-solutions.html">Solutions</a>
      <a href="pricing.html">Pricing</a>
      <a href="producttour.html">Product Tour / Demo</a>
      <a href="updates.html">What's New</a>
    </div>

    <!-- Column 2: Resources -->
    <div class="footer-col">
      <h4>Resources</h4>
      <a href="blogs.html">Blog</a>
      <a href="contactus.html">Help Center</a>
      <a href="faq.html">FAQs</a>
      <a href="documentation.html">Documentation</a>
      <a href="documentation.html">Getting Started</a>
    </div>

    <!-- Column 3: Company -->
    <div class="footer-col">
      <h4>Company</h4>
      <a href="aboutus.html">About Mediqora</a>
      <a href="contactus.html">Contact Us</a>
      <a href="bookdemo.html">Book a Demo</a>
    </div>

    <!-- Column 4: Legal & Security -->
    <div class="footer-col">
      <h4>Legal &amp; Security</h4>
      <a href="policypage.html">Privacy Policy</a>
      <a href="policypage.html#terms">Terms &amp; Conditions</a>
      <a href="policypage.html#cookies">Cookie Policy</a>
      <a href="policypage.html#security">Security</a>
      <a href="policypage.html#data">Data Protection</a>
    </div>

    <!-- Column 5: Connect (With Social Icons below phone number) -->
    <div class="footer-col">
      <h4>Connect</h4>
      <a href="mailto:hello@mediqora.com">hello@mediqora.com</a>
      <a href="tel:+919876543210">+91 98765 43210</a>
      <div class="social-links" style="margin-top: 12px; display: flex; gap: 10px;">
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <!-- Footer Bottom Strip -->
  <div class="footer-bottom-wrapper">
    <div class="container footer-bottom">
      <span>© <span id="year"></span> Mediqora. All rights reserved.</span>
      <div class="footer-legal-links">
        <a href="policypage.html">Privacy Policy</a>
        <span class="divider">|</span>
        <a href="policypage.html#terms">Terms &amp; Conditions</a>
        <span class="divider">|</span>
        <a href="policypage.html#cookies">Cookie Policy</a>
      </div>
      <span class="tagline">Mediqora — Clinic Management Software for Modern Healthcare</span>
    </div>
  </div>
</footer>`;

  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");
  if (headerMount) headerMount.outerHTML = header;
  if (footerMount) footerMount.outerHTML = footer;

  document
    .getElementById("year")
    ?.replaceChildren(
      document.createTextNode(String(new Date().getFullYear())),
    );
  applyTheme(doc.dataset.theme || getPreferredTheme());

  // ---------- Header interactions ----------
  const themeToggle = document.getElementById("themeToggle");
  themeToggle?.addEventListener("click", () => {
    const next = doc.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {}
  });

  const nav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  const closeMobileNav = () => {
    if (!nav || !menuToggle) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    document
      .querySelectorAll(".dropdown.open")
      .forEach((item) => item.classList.remove("open"));
    document
      .querySelectorAll(".dropdown > button")
      .forEach((button) => button.setAttribute("aria-expanded", "false"));
  };

  menuToggle?.addEventListener("click", () => {
    if (!nav) return;
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
  });

  document.querySelectorAll(".dropdown > button").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.innerWidth > 980) return;
      const dropdown = button.closest(".dropdown");
      const open = dropdown?.classList.toggle("open") ?? false;
      button.setAttribute("aria-expanded", String(open));
    });
  });

  nav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMobileNav));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMobileNav();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNav();
  });

  // ---------- Shared dashboard illustration ----------
  document.querySelectorAll("[data-dashboard-mockup]").forEach((el) => {
    el.innerHTML = `<div class="mockup-wrap" aria-label="Mediqora clinic dashboard preview">
      <div class="laptop"><div class="screen"><div class="dash-top"><span class="dash-logo">✚ Mediqora</span><strong>Dashboard</strong></div><div class="dash-grid">
        <div class="dash-side"><span>▣ Dashboard</span><span>◷ Appointments</span><span>♙ Patients</span><span>℞ Prescriptions</span><span>◫ Medicine</span><span>⚗ Tests</span><span>▥ Reports</span><span>⚙ Settings</span></div>
        <div class="dash-main"><div class="metric-grid"><div class="metric"><small>Today's Appointments</small><strong>24</strong></div><div class="metric"><small>Total Patients</small><strong>1,248</strong></div><div class="metric"><small>Prescriptions</small><strong>356</strong></div><div class="metric"><small>Pending</small><strong>8</strong></div></div>
        <div class="mini-cols"><div class="mini-panel"><h4>Today's Appointments</h4><div class="appt"><span>09:00</span><b>Rahul Verma</b><span class="status">Confirmed</span></div><div class="appt"><span>10:00</span><b>Priya Patel</b><span class="status">Confirmed</span></div><div class="appt"><span>10:30</span><b>Arjun Singh</b><span class="status">Confirmed</span></div><div class="appt"><span>11:00</span><b>Neha Patel</b><span class="status pending-status">Pending</span></div><div class="appt"><span>11:30</span><b>Mohit Sharma</b><span class="status">Confirmed</span></div></div>
        <div class="mini-panel"><h4>Quick Actions</h4><div class="quick"><span>＋ New Appointment</span><span>℞ New Prescription</span><span>♙ Add Patient</span><span>◎ View Reports</span></div></div></div></div></div></div>
      </div>
      <div class="phone"><div class="phone-screen"><div class="rx"><h4>← Prescription</h4><strong>Rahul Verma | 32/M</strong><p>20 May 2024</p><div class="pill-line"><i class="pill"></i><span>Tab. Paracetamol 650 mg</span></div><div class="pill-line"><i class="pill orange"></i><span>Cap. Amoxicillin 500 mg</span></div><div class="pill-line"><i class="pill"></i><span>Syp. Cefix</span></div><p><b>Tests</b></p><div>◉ CBC (Complete Blood Count)</div><div>◉ Blood Sugar (Fasting)</div><div class="phone-actions"><span>Print</span><span>Email</span><span>WhatsApp</span></div></div></div></div>
    </div>`;
  });

  // ---------- Reveal animations ----------
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // ---------- Home counters ----------
  const counters = document.querySelectorAll(".count[data-count]");
  if (counters.length) {
    const animateCounter = (el) => {
      const target = Number(el.dataset.count || 0);
      const startedAt = performance.now();
      const duration = 1300;
      const frame = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        el.textContent =
          value.toLocaleString("en-IN") + (target >= 10000 ? "+" : "");
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.5 },
      );
      counters.forEach((counter) => counterObserver.observe(counter));
    } else {
      counters.forEach(animateCounter);
    }
  }

  // ---------- Blog search / categories ----------
  const blogSearch = document.getElementById("blogSearch");
  if (blogSearch) {
    const items = [...document.querySelectorAll(".blog-item")];
    const empty = document.getElementById("blogEmpty");
    let category = "all";

    const filterBlogs = () => {
      const query = blogSearch.value.trim().toLowerCase();
      let visible = 0;
      items.forEach((item) => {
        const matchesCategory =
          category === "all" ||
          (item.dataset.cat || "").split(" ").includes(category);
        const matchesQuery =
          !query || item.textContent.toLowerCase().includes(query);
        const show = matchesCategory && matchesQuery;
        item.hidden = !show;
        if (show) visible += 1;
      });
      empty?.classList.toggle("show", visible === 0);
    };

    blogSearch.addEventListener("input", filterBlogs);
    document.querySelectorAll(".category-band button").forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(".category-band button")
          .forEach((item) => item.classList.remove("active"));
        if (category === button.dataset.cat) category = "all";
        else {
          category = button.dataset.cat || "all";
          button.classList.add("active");
        }
        filterBlogs();
        document
          .querySelector(".blog-layout")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    document
      .getElementById("blogSubscribe")
      ?.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("blogSubscribed")?.classList.add("show");
        event.currentTarget.reset();
      });
  }

  // ---------- Demo form ----------
  const demoForm = document.getElementById("demoForm");
  if (demoForm) {
    const dateInput = demoForm.querySelector('input[type="date"]');
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
    demoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!demoForm.reportValidity()) return;
      const success = document.getElementById("demoSuccess");
      success?.classList.add("show");
      demoForm.reset();
      success?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  // ---------- Contact form + compact FAQ ----------
  const contactForm = document.getElementById("contactForm");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    document.getElementById("contactSuccess")?.classList.add("show");
    contactForm.reset();
  });

  document.querySelectorAll(".faq-mini button").forEach((button) => {
    button.addEventListener("click", () => {
      const wasOpen = button.classList.toggle("open");
      const indicator = button.querySelector("b");
      if (indicator) indicator.textContent = wasOpen ? "−" : "+";
    });
  });

  // ---------- Documentation search ----------
  const docSearch = document.getElementById("docSearch");
  if (docSearch) {
    const items = [...document.querySelectorAll(".searchable")];
    const empty = document.getElementById("noResults");
    const filterDocs = () => {
      const query = docSearch.value.trim().toLowerCase();
      let visible = 0;
      items.forEach((item) => {
        const haystack =
          `${item.textContent} ${item.dataset.keywords || ""}`.toLowerCase();
        const show = !query || haystack.includes(query);
        item.hidden = !show;
        if (show) visible += 1;
      });
      empty?.classList.toggle("show", Boolean(query) && visible === 0);
    };
    docSearch.addEventListener("input", filterDocs);
    document.querySelectorAll(".tags button").forEach((button) => {
      button.addEventListener("click", () => {
        docSearch.value = button.textContent.trim();
        filterDocs();
        docSearch.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  }

  // ---------- FAQ accordion / filter ----------
  const faqItems = [...document.querySelectorAll(".faq-item")];
  if (faqItems.length) {
    const faqSearch = document.getElementById("faqSearch");
    const faqEmpty = document.getElementById("faqEmpty");
    let category = "all";

    faqItems.forEach((item) => {
      const button = item.querySelector("button");
      button?.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        const indicator = button.querySelector("b");
        if (indicator) indicator.textContent = open ? "−" : "+";
      });
    });

    const filterFaqs = () => {
      const query = (faqSearch?.value || "").trim().toLowerCase();
      let visible = 0;
      faqItems.forEach((item) => {
        const matchesCategory =
          category === "all" || item.dataset.cat === category;
        const matchesQuery =
          !query || item.textContent.toLowerCase().includes(query);
        const show = matchesCategory && matchesQuery;
        item.hidden = !show;
        if (show) visible += 1;
      });
      faqEmpty?.classList.toggle("show", visible === 0);
    };

    faqSearch?.addEventListener("input", filterFaqs);
    document.querySelectorAll(".category-grid button").forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(".category-grid button")
          .forEach((item) => item.classList.remove("active"));
        if (category === button.dataset.cat) category = "all";
        else {
          category = button.dataset.cat || "all";
          button.classList.add("active");
        }
        filterFaqs();
        document
          .querySelector(".faq-layout")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ---------- Pricing toggle ----------
  const billingButtons = [
    ...document.querySelectorAll(".billing-toggle button"),
  ];
  if (billingButtons.length) {
    const prices = [...document.querySelectorAll(".price b[data-monthly]")];
    billingButtons.forEach((button) => {
      button.addEventListener("click", () => {
        billingButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        const mode = button.dataset.mode || "monthly";
        prices.forEach((price) => {
          const amount = Number(price.dataset[mode] || 0);
          price.textContent = `₹${amount.toLocaleString("en-IN")}`;
        });
      });
    });
  }

  // ---------- Product tour modal ----------
  const tourModal = document.getElementById("tourModal");
  if (tourModal) {
    const title = document.getElementById("tourTitle");
    const openTour = (name = "Mediqora Product Tour") => {
      if (title) title.textContent = name;
      tourModal.classList.add("show");
      tourModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };
    const closeTour = () => {
      tourModal.classList.remove("show");
      tourModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    document
      .getElementById("watchTour")
      ?.addEventListener("click", () => openTour());
    document
      .getElementById("inlinePlay")
      ?.addEventListener("click", () => openTour());
    document
      .querySelectorAll("[data-tour]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          openTour(`${button.dataset.tour} Tour`),
        ),
      );
    document.getElementById("closeTour")?.addEventListener("click", closeTour);
    tourModal.addEventListener("click", (event) => {
      if (event.target === tourModal) closeTour();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeTour();
    });
  }

  // ---------- Updates filters ----------
  const updateSearch = document.getElementById("updateSearch");
  if (updateSearch) {
    const items = [...document.querySelectorAll(".update-item")];
    const empty = document.getElementById("updateEmpty");
    let type = "all";

    const filterUpdates = () => {
      const query = updateSearch.value.trim().toLowerCase();
      const areas = [...document.querySelectorAll(".area-filter:checked")].map(
        (item) => item.value,
      );
      let visible = 0;
      items.forEach((item) => {
        const matchesType = type === "all" || item.dataset.type === type;
        const matchesText =
          !query || item.textContent.toLowerCase().includes(query);
        const matchesArea =
          !areas.length || areas.includes(item.dataset.area || "");
        const show = matchesType && matchesText && matchesArea;
        item.hidden = !show;
        if (show) visible += 1;
      });
      empty?.classList.toggle("show", visible === 0);
    };

    updateSearch.addEventListener("input", filterUpdates);
    document
      .querySelectorAll(".area-filter")
      .forEach((checkbox) =>
        checkbox.addEventListener("change", filterUpdates),
      );
    document.querySelectorAll(".update-tabs button").forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll(".update-tabs button")
          .forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        type = button.dataset.type || "all";
        filterUpdates();
      });
    });
    document.getElementById("loadMore")?.addEventListener("click", (event) => {
      event.currentTarget.textContent = "You’re all caught up ✓";
      event.currentTarget.disabled = true;
    });
    document
      .getElementById("updatesSubscribe")
      ?.addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById("updatesSubscribed")?.classList.add("show");
        event.currentTarget.reset();
      });
  }
})();