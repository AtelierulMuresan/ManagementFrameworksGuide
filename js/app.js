/* ==========================================================================
   Management Frameworks Guide — rendering & interactions
   ========================================================================== */
(function () {
  const FW = window.FRAMEWORKS;
  const CAT = window.CATEGORIES;
  const G = window.GRAPHICS;
  const body = document.body;
  const ROOT = body.dataset.root || "";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const url = (slug) => `${ROOT}frameworks/${slug}.html`;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const initials = (name) => name.replace(/\(.*?\)/g, "").split(/[\s\/&-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const PALETTE = [["#6366f1", "#8b5cf6"], ["#0ea5e9", "#22d3ee"], ["#10b981", "#34d399"], ["#f59e0b", "#f97316"], ["#ec4899", "#f43f5e"], ["#8b5cf6", "#d946ef"], ["#14b8a6", "#0ea5e9"], ["#ef4444", "#f97316"]];
  const hashColor = (s) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return PALETTE[h % PALETTE.length]; };
  const logo = (name, colors) => { const [a, b] = colors || hashColor(name); return `<div class="logo" style="background:linear-gradient(135deg,${a},${b})">${initials(name)}</div>`; };

  /* ---------------- Shared chrome ---------------- */
  function initTheme() {
    const saved = store.get("mfg-theme");
    if (saved) document.documentElement.dataset.theme = saved;
    const btn = $("#themeToggle");
    const isDark = () => (document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark";
    const paint = () => { if (btn) btn.textContent = isDark() ? "☀" : "☾"; btn && btn.setAttribute("aria-label", isDark() ? "Switch to light theme" : "Switch to dark theme"); };
    paint();
    btn && btn.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      store.set("mfg-theme", next);
      paint();
    });
  }

  function initNav() {
    const menu = $("#menuBtn"), links = $("#navLinks");
    menu && menu.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", open);
      menu.textContent = open ? "✕" : "☰";
    });
    const jump = $("#jump");
    if (jump) {
      jump.innerHTML = `<option value="">Jump to framework…</option>` + FW.map((f) => `<option value="${f.slug}" ${f.slug === body.dataset.slug ? "selected" : ""}>${f.name}</option>`).join("");
      jump.addEventListener("change", () => jump.value && (location.href = url(jump.value)));
    }
    const bar = $(".scroll-progress"), top = $(".to-top");
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar) bar.style.width = p * 100 + "%";
      if (top) top.classList.toggle("show", h.scrollTop > 600);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    top && top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------------- Home page ---------------- */
  function renderHome() {
    $("#heroArt").innerHTML = G.hero();
    $("#statCount").textContent = FW.length;
    $("#statChecks").textContent = FW.reduce((s, f) => s + f.checklist.length, 0);
    $("#statCompanies").textContent = FW.reduce((s, f) => s + f.companies.length, 0);

    const grid = $("#grid");
    grid.innerHTML = FW.map((f, i) => `
      <a class="card reveal" href="${url(f.slug)}" data-cat="${f.category}" data-search="${(f.name + " " + f.tagline + " " + CAT[f.category].label).toLowerCase()}" style="--fc1:${f.colors[0]};--fc2:${f.colors[1]}">
        <span class="card-num">${String(i + 1).padStart(2, "0")}</span>
        <div class="card-art">${G[f.slug](f.colors[0], f.colors[1])}</div>
        <div class="card-body">
          <span class="chip" style="align-self:flex-start"><span class="dot" style="background:${CAT[f.category].color}"></span>${CAT[f.category].label}</span>
          <h3>${f.name}</h3>
          <p>${f.tagline}</p>
          <div class="card-foot"><span>⏱ ${f.time}</span><span class="go">Explore →</span></div>
        </div>
      </a>`).join("");

    const filters = $("#filters");
    const counts = {};
    FW.forEach((f) => (counts[f.category] = (counts[f.category] || 0) + 1));
    filters.innerHTML = `<button class="filter active" data-cat="all">All <span>${FW.length}</span></button>` +
      Object.entries(CAT).map(([k, c]) => `<button class="filter" data-cat="${k}"><span class="dot" style="background:${c.color}"></span>${c.label} <span>${counts[k] || 0}</span></button>`).join("");

    let cat = "all", q = "";
    const apply = () => {
      let shown = 0;
      $$(".card", grid).forEach((c) => {
        const ok = (cat === "all" || c.dataset.cat === cat) && c.dataset.search.includes(q);
        c.style.display = ok ? "" : "none";
        if (ok) { shown++; c.classList.add("in"); }
      });
      $("#empty").style.display = shown ? "none" : "block";
    };
    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      $$(".filter", filters).forEach((x) => x.classList.toggle("active", x === b));
      cat = b.dataset.cat; apply();
    });
    $("#search").addEventListener("input", (e) => { q = e.target.value.trim().toLowerCase(); apply(); });
    addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); $("#search").focus(); }
    });

    const picks = [
      ["🎯", "I need to set clear goals", ["smart-goals", "okrs"]],
      ["📊", "I need to measure performance", ["kpis", "lead-lag-measures", "north-star-metric"]],
      ["🧭", "I need to shape strategy", ["swot-analysis", "north-star-metric"]],
      ["⚖️", "I have too much to do", ["eisenhower-matrix", "rice-scoring", "pareto-principle"]],
      ["🤝", "I need to delegate or clarify roles", ["cport", "raci-matrix"]],
      ["🚀", "I need to deliver projects iteratively", ["scrum-agile", "start-stop-continue"]],
      ["🔧", "I need to fix a slow process", ["theory-of-constraints", "pareto-principle"]],
      ["💬", "I need honest team feedback", ["start-stop-continue"]]
    ];
    const bySlug = Object.fromEntries(FW.map((f) => [f.slug, f]));
    $("#picker").innerHTML = picks.map(([ic, q, s]) => `
      <div class="pick reveal"><div class="ic">${ic}</div><div><div class="q">${q}</div>
      <div class="a">${s.map((x) => `<a href="${url(x)}">${bySlug[x].name}</a>`).join(" · ")}</div></div></div>`).join("");
  }

  /* ---------------- Framework page ---------------- */
  function renderFramework(slug) {
    const i = FW.findIndex((f) => f.slug === slug);
    const f = FW[i];
    if (!f) { $("#main").innerHTML = `<div class="container section"><h1>Framework not found</h1><a href="${ROOT}index.html">← Back to all frameworks</a></div>`; return; }
    const [c1, c2] = f.colors;
    document.documentElement.style.setProperty("--c1", c1);
    document.documentElement.style.setProperty("--c2", c2);
    document.title = `${f.name} — Management Frameworks Guide`;
    const cat = CAT[f.category];
    const prev = FW[(i - 1 + FW.length) % FW.length], next = FW[(i + 1) % FW.length];
    const sections = [
      ["overview", "Overview", "📖"], ["concepts", "Key concepts", "💡"], ["apply", "How to apply", "🛠"],
      ["checklist", "Checklist", "✅"], ["pitfalls", "Pitfalls", "⚠️"], ["docs", "Documentation", "📚"],
      ["videos", "Videos", "▶️"], ["companies", "Who uses it", "🏢"], ["related", "Related", "🔗"]
    ];
    const blockTitle = (id) => { const s = sections.find((x) => x[0] === id); return `<div class="block-title"><div class="block-icon">${s[2]}</div><h2>${s[1]}</h2></div>`; };

    $("#main").innerHTML = `
    <header class="fw-hero container">
      <div class="crumbs"><a href="${ROOT}index.html">Home</a><span>/</span><a href="${ROOT}index.html#frameworks">Frameworks</a><span>/</span><span>${f.name}</span></div>
      <div class="fw-hero-grid">
        <div class="reveal">
          <span class="chip"><span class="dot" style="background:${cat.color}"></span>${cat.label} · Framework ${i + 1} of ${FW.length}</span>
          <h1 style="margin-top:16px"><span class="grad-text">${f.name}</span></h1>
          <p class="tagline">${f.tagline}</p>
          <div class="meta">
            <div><small>Origin</small><span>${f.origin}</span></div>
            <div><small>Difficulty</small><span>${f.difficulty}</span></div>
            <div><small>Time to apply</small><span>${f.time}</span></div>
            <div><small>Checklist</small><span>${f.checklist.length} items</span></div>
          </div>
        </div>
        <div class="fw-art reveal">${G[f.slug](c1, c2)}</div>
      </div>
    </header>

    <div class="container fw-layout">
      <aside class="toc"><h4>On this page</h4><nav>${sections.map(([id, t, ic]) => `<a href="#${id}" data-id="${id}"><span>${ic}</span>${t}</a>`).join("")}</nav></aside>
      <div>
        <section id="overview" class="block reveal">${blockTitle("overview")}
          ${f.overview.map((p) => `<p>${p}</p>`).join("")}
          <div class="best-for"><b>Best for:</b> ${f.bestFor}</div>
        </section>

        <section id="concepts" class="block reveal">${blockTitle("concepts")}
          <div class="ideas">${f.keyIdeas.map((k) => `<div class="idea"><h4>${k.title}</h4><p>${k.text}</p></div>`).join("")}</div>
        </section>

        <section id="apply" class="block reveal">${blockTitle("apply")}
          <ol class="steps">${f.steps.map((s) => `<li><h4>${s.title}</h4><p>${s.text}</p></li>`).join("")}</ol>
          <div class="example"><h4>🧪 ${f.example.title}</h4><div>${f.example.text}</div></div>
        </section>

        <section id="checklist" class="block reveal">${blockTitle("checklist")}
          <div class="check-head">
            <div class="progress"><div class="progress-bar"><span id="progFill"></span></div><div class="progress-label" id="progLabel"></div></div>
            <div class="check-actions">
              <button class="btn btn-ghost btn-sm" id="resetChecks" type="button">↺ Reset</button>
              <button class="btn btn-ghost btn-sm" id="printChecks" type="button">🖨 Print</button>
            </div>
          </div>
          <ul class="checklist">${f.checklist.map((c, n) => `<li><label><input type="checkbox" data-n="${n}"><span>${c}</span></label></li>`).join("")}</ul>
          <div class="done-banner" id="doneBanner">🎉 All done — your ${f.name} is ready to go!</div>
          <p class="note">Your ticks are saved in this browser so you can come back later.</p>
        </section>

        <section id="pitfalls" class="block reveal">${blockTitle("pitfalls")}
          <ul class="pitfalls">${f.pitfalls.map((p) => `<li>${p}</li>`).join("")}</ul>
        </section>

        <section id="docs" class="block reveal">${blockTitle("docs")}
          <div class="res-grid">${f.docs.map((d) => `<a class="res" href="${d.url}" target="_blank" rel="noopener"><div class="res-ic">📄</div><div><b>${d.title}</b><small>${d.source} ↗</small></div></a>`).join("")}</div>
        </section>

        <section id="videos" class="block reveal">${blockTitle("videos")}
          <div class="res-grid">${f.videos.map((v) => `<a class="res video" href="${v.url}" target="_blank" rel="noopener"><div class="video-thumb"><div class="play"></div></div><div class="video-body"><b>${v.title}</b><small>${v.url.includes("ted.com") ? "TED Talk" : "YouTube — curated results"} ↗</small></div></a>`).join("")}</div>
          <p class="note">Video links open curated YouTube search results so you always get current, available videos from multiple creators.</p>
        </section>

        <section id="companies" class="block reveal">${blockTitle("companies")}
          <div class="companies">${f.companies.map((c) => `<div class="company">${logo(c.name)}<div><b>${c.name}</b><p>${c.how}</p></div></div>`).join("")}</div>
          <p class="note">Based on publicly available reports, books and company publications. Adoption varies by team and may change over time.</p>
        </section>

        <section id="related" class="block reveal">${blockTitle("related")}
          <div class="related">${f.related.map((s) => FW.find((x) => x.slug === s)).filter(Boolean).map((r) => `<a class="rel" href="${url(r.slug)}">${logo(r.name, r.colors)}<span>${r.name}</span></a>`).join("")}</div>
        </section>

        <nav class="pager" aria-label="Framework navigation">
          <a class="prev" href="${url(prev.slug)}"><small>← Previous</small><b>${prev.name}</b></a>
          <a class="next" href="${url(next.slug)}"><small>Next →</small><b>${next.name}</b></a>
        </nav>
      </div>
    </div>`;

    initChecklist(f);
    initToc();
  }

  function initChecklist(f) {
    const key = "mfg-check-" + f.slug;
    let state = {};
    try { state = JSON.parse(store.get(key) || "{}"); } catch (e) {}
    const boxes = $$(".checklist input");
    const update = () => {
      const done = boxes.filter((b) => b.checked).length;
      $("#progFill").style.width = (done / boxes.length) * 100 + "%";
      $("#progLabel").textContent = `${done} of ${boxes.length} complete (${Math.round((done / boxes.length) * 100)}%)`;
      $("#doneBanner").classList.toggle("show", done === boxes.length);
    };
    boxes.forEach((b) => {
      b.checked = !!state[b.dataset.n];
      b.addEventListener("change", () => { state[b.dataset.n] = b.checked; store.set(key, JSON.stringify(state)); update(); });
    });
    $("#resetChecks").addEventListener("click", () => { boxes.forEach((b) => (b.checked = false)); state = {}; store.del(key); update(); });
    $("#printChecks").addEventListener("click", () => print());
    update();
  }

  function initToc() {
    const links = $$(".toc a");
    const map = Object.fromEntries(links.map((a) => [a.dataset.id, a]));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const a = map[e.target.id];
          if (a) {
            a.classList.add("active");
            const nav = a.parentElement; // keep the active tab visible in the horizontal mobile TOC
            if (nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.clientWidth / 2, behavior: "smooth" });
          }
        }
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    $$(".block").forEach((s) => io.observe(s));
  }

  /* ---------------- Boot ---------------- */
  initTheme();
  if (body.dataset.page === "home") renderHome();
  if (body.dataset.page === "framework") renderFramework(body.dataset.slug);
  initNav();
  initReveal();
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
