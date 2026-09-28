/* ==========================================================================
   Inline SVG illustrations — one per framework.
   Each function receives the framework's two brand colours and returns an
   SVG string (viewBox 400x260). Text uses .svg-t / .svg-m classes so it
   follows the light/dark theme.
   ========================================================================== */

window.GRAPHICS = (function () {
  const svg = (inner, id) =>
    `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" class="fw-svg">${inner}</svg>`;

  const grad = (id, a, b, x2 = 1, y2 = 1) =>
    `<defs><linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>`;

  return {
    "smart-goals": (a, b) => {
      const letters = [["S", "Specific"], ["M", "Measurable"], ["A", "Achievable"], ["R", "Relevant"], ["T", "Time-bound"]];
      let out = grad("gSmart", a, b);
      letters.forEach(([l, w], i) => {
        const x = 18 + i * 74;
        out += `<g class="pop" style="animation-delay:${i * 0.12}s">
          <rect x="${x}" y="60" width="64" height="84" rx="14" fill="url(#gSmart)" opacity="${0.55 + i * 0.1}"/>
          <text x="${x + 32}" y="116" text-anchor="middle" font-size="40" font-weight="800" fill="#fff">${l}</text>
          <text x="${x + 32}" y="170" text-anchor="middle" font-size="11.5" class="svg-m">${w}</text></g>`;
      });
      out += `<path d="M40 205 H360" stroke="${a}" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 8"/>
        <circle cx="360" cy="205" r="12" fill="${b}"/><path d="M354 205 l4 4 l8 -8" stroke="#fff" stroke-width="2.5" fill="none"/>
        <text x="40" y="232" font-size="12" class="svg-m">Vague idea</text><text x="360" y="232" text-anchor="end" font-size="12" class="svg-m">Clear goal</text>`;
      return svg(out);
    },

    "lead-lag-measures": (a, b) => {
      let out = grad("gLL", a, b, 0, 1);
      const leads = [40, 58, 52, 70, 78, 92];
      const lag = [30, 34, 40, 50, 62, 80];
      leads.forEach((h, i) => {
        out += `<rect class="grow" style="animation-delay:${i * 0.08}s" x="${30 + i * 26}" y="${190 - h}" width="18" height="${h}" rx="4" fill="url(#gLL)"/>`;
      });
      const pts = lag.map((h, i) => `${230 + i * 28},${190 - h}`).join(" ");
      out += `<polyline points="${pts}" fill="none" stroke="${b}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="draw"/>`;
      lag.forEach((h, i) => (out += `<circle cx="${230 + i * 28}" cy="${190 - h}" r="5" fill="${b}"/>`));
      out += `<path d="M190 120 h24" stroke="${a}" stroke-width="3" marker-end="url(#arr)"/>
        <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${a}"/></marker></defs>
        <line x1="20" y1="190" x2="380" y2="190" class="svg-axis"/>
        <text x="96" y="215" text-anchor="middle" font-size="13" font-weight="700" class="svg-t">LEAD</text>
        <text x="96" y="233" text-anchor="middle" font-size="11" class="svg-m">predictive · influenceable</text>
        <text x="300" y="215" text-anchor="middle" font-size="13" font-weight="700" class="svg-t">LAG</text>
        <text x="300" y="233" text-anchor="middle" font-size="11" class="svg-m">outcome · after the fact</text>`;
      return svg(out);
    },

    "kpis": (a, b) => {
      let out = grad("gKpi", a, b, 1, 0);
      out += `<path d="M60 170 A90 90 0 0 1 240 170" fill="none" class="svg-track" stroke-width="18" stroke-linecap="round"/>
        <path d="M60 170 A90 90 0 0 1 216 115" fill="none" stroke="url(#gKpi)" stroke-width="18" stroke-linecap="round" class="draw"/>
        <line x1="150" y1="170" x2="205" y2="120" stroke="${b}" stroke-width="5" stroke-linecap="round" class="needle"/>
        <circle cx="150" cy="170" r="10" fill="${a}"/>
        <text x="150" y="215" text-anchor="middle" font-size="28" font-weight="800" class="svg-t">82%</text>
        <text x="150" y="236" text-anchor="middle" font-size="11" class="svg-m">of target</text>`;
      const tiles = [["Revenue", "▲ 12%", "#10b981"], ["Churn", "▼ 0.8%", "#10b981"], ["NPS", "46", a]];
      tiles.forEach(([n, v, c], i) => {
        const y = 45 + i * 62;
        out += `<g class="pop" style="animation-delay:${0.2 + i * 0.12}s"><rect x="272" y="${y}" width="112" height="50" rx="10" class="svg-card"/>
          <text x="284" y="${y + 20}" font-size="11" class="svg-m">${n}</text>
          <text x="284" y="${y + 40}" font-size="17" font-weight="800" fill="${c}">${v}</text></g>`;
      });
      return svg(out);
    },

    "swot-analysis": (a, b) => {
      const q = [["S", "Strengths", "#10b981", 50, 20], ["W", "Weaknesses", "#f59e0b", 205, 20], ["O", "Opportunities", "#0ea5e9", 50, 135], ["T", "Threats", "#ef4444", 205, 135]];
      let out = "";
      q.forEach(([l, w, c, x, y], i) => {
        out += `<g class="pop" style="animation-delay:${i * 0.1}s"><rect x="${x}" y="${y}" width="145" height="105" rx="16" fill="${c}" opacity=".9"/>
          <text x="${x + 18}" y="${y + 52}" font-size="42" font-weight="800" fill="#fff" opacity=".95">${l}</text>
          <text x="${x + 18}" y="${y + 84}" font-size="13" font-weight="600" fill="#fff">${w}</text></g>`;
      });
      out += `<text x="30" y="75" font-size="10" class="svg-m" transform="rotate(-90 30 75)" text-anchor="middle">INTERNAL</text>
        <text x="30" y="190" font-size="10" class="svg-m" transform="rotate(-90 30 190)" text-anchor="middle">EXTERNAL</text>
        <text x="122" y="256" font-size="10" class="svg-m" text-anchor="middle">HELPFUL</text>
        <text x="278" y="256" font-size="10" class="svg-m" text-anchor="middle">HARMFUL</text>`;
      return svg(out);
    },

    "cport": (a, b) => {
      const items = [["C", "Context"], ["P", "Purpose"], ["O", "Outcome"], ["R", "Resources"], ["T", "Time"]];
      let out = grad("gCport", a, b, 1, 0);
      out += `<path d="M40 120 C 100 40, 140 200, 200 120 S 300 40, 360 120" fill="none" stroke="url(#gCport)" stroke-width="4" stroke-dasharray="8 8" class="dash"/>`;
      const pos = [[40, 120], [120, 95], [200, 120], [280, 145], [360, 120]];
      items.forEach(([l, w], i) => {
        const [x, y] = pos[i];
        out += `<g class="pop" style="animation-delay:${i * 0.12}s"><circle cx="${x}" cy="${y}" r="28" fill="url(#gCport)"/>
          <text x="${x}" y="${y + 9}" text-anchor="middle" font-size="26" font-weight="800" fill="#fff">${l}</text>
          <text x="${x}" y="${y + 50}" text-anchor="middle" font-size="12" font-weight="600" class="svg-t">${w}</text></g>`;
      });
      out += `<text x="200" y="232" text-anchor="middle" font-size="12" class="svg-m">A complete brief → confident, autonomous delivery</text>`;
      return svg(out);
    },

    "eisenhower-matrix": (a, b) => {
      const q = [["DO", "Urgent · Important", "#ef4444", 60, 20], ["SCHEDULE", "Not urgent · Important", "#10b981", 220, 20], ["DELEGATE", "Urgent · Not important", "#f59e0b", 60, 130], ["DELETE", "Neither", "#64748b", 220, 130]];
      let out = "";
      q.forEach(([t, s, c, x, y], i) => {
        out += `<g class="pop" style="animation-delay:${i * 0.1}s"><rect x="${x}" y="${y}" width="150" height="100" rx="14" fill="${c}" opacity=".92"/>
          <text x="${x + 75}" y="${y + 50}" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">${t}</text>
          <text x="${x + 75}" y="${y + 72}" text-anchor="middle" font-size="10.5" fill="#fff" opacity=".9">${s}</text></g>`;
      });
      out += `<text x="135" y="250" text-anchor="middle" font-size="11" font-weight="700" class="svg-m">URGENT</text>
        <text x="295" y="250" text-anchor="middle" font-size="11" font-weight="700" class="svg-m">NOT URGENT</text>
        <text x="40" y="70" text-anchor="middle" font-size="11" font-weight="700" class="svg-m" transform="rotate(-90 40 70)">IMPORTANT</text>
        <text x="40" y="180" text-anchor="middle" font-size="11" font-weight="700" class="svg-m" transform="rotate(-90 40 180)">NOT IMPORT.</text>`;
      return svg(out);
    },

    "rice-scoring": (a, b) => {
      let out = grad("gRice", a, b);
      const f = [["R", "Reach"], ["I", "Impact"], ["C", "Confidence"]];
      f.forEach(([l, w], i) => {
        const x = 40 + i * 110;
        out += `<g class="pop" style="animation-delay:${i * 0.12}s"><rect x="${x}" y="30" width="80" height="80" rx="18" fill="url(#gRice)"/>
          <text x="${x + 40}" y="84" text-anchor="middle" font-size="40" font-weight="800" fill="#fff">${l}</text>
          <text x="${x + 40}" y="130" text-anchor="middle" font-size="11.5" class="svg-m">${w}</text></g>`;
        if (i < 2) out += `<text x="${x + 95}" y="80" text-anchor="middle" font-size="22" font-weight="700" class="svg-t">×</text>`;
      });
      out += `<line x1="40" y1="150" x2="340" y2="150" class="svg-t-stroke" stroke-width="3" stroke-linecap="round"/>
        <g class="pop" style="animation-delay:.45s"><rect x="150" y="165" width="80" height="60" rx="16" class="svg-card"/>
        <text x="190" y="205" text-anchor="middle" font-size="32" font-weight="800" fill="${a}">E</text>
        <text x="190" y="246" text-anchor="middle" font-size="11.5" class="svg-m">Effort</text></g>`;
      return svg(out);
    },

    "scrum-agile": (a, b) => {
      let out = grad("gScrum", a, b);
      out += `<circle cx="250" cy="125" r="75" fill="none" class="svg-track" stroke-width="14"/>
        <circle cx="250" cy="125" r="75" fill="none" stroke="url(#gScrum)" stroke-width="14" stroke-dasharray="360 471" stroke-linecap="round" class="spin-slow" transform="rotate(-90 250 125)"/>
        <circle cx="250" cy="125" r="34" fill="none" stroke="${b}" stroke-width="5" stroke-dasharray="4 7"  class="spin"/>
        <text x="250" y="122" text-anchor="middle" font-size="14" font-weight="800" class="svg-t">SPRINT</text>
        <text x="250" y="138" text-anchor="middle" font-size="10" class="svg-m">1–4 weeks</text>
        <text x="250" y="222" text-anchor="middle" font-size="11" class="svg-m">Daily Scrum ↻</text>`;
      [0, 1, 2, 3].forEach((i) => {
        out += `<rect class="pop" style="animation-delay:${i * 0.1}s" x="30" y="${40 + i * 28}" width="${110 - i * 14}" height="20" rx="6" fill="${a}" opacity="${0.9 - i * 0.18}"/>`;
      });
      out += `<text x="30" y="30" font-size="11" font-weight="700" class="svg-m">BACKLOG</text>
        <path d="M150 90 H168" stroke="${a}" stroke-width="3" marker-end="url(#arrS)"/>
        <defs><marker id="arrS" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="${a}"/></marker></defs>
        <g class="pop" style="animation-delay:.5s"><rect x="340" y="105" width="44" height="40" rx="8" fill="${b}"/>
        <path d="M352 125 l6 6 l12 -12" stroke="#fff" stroke-width="3" fill="none"/></g>
        <text x="362" y="162" text-anchor="middle" font-size="10" class="svg-m">Increment</text>`;
      return svg(out);
    },

    "start-stop-continue": () => {
      const cols = [["START", "#22c55e", "▶"], ["STOP", "#ef4444", "■"], ["CONTINUE", "#3b82f6", "↻"]];
      let out = "";
      cols.forEach(([t, c, ic], i) => {
        const x = 22 + i * 124;
        out += `<g class="pop" style="animation-delay:${i * 0.12}s"><rect x="${x}" y="20" width="110" height="220" rx="16" class="svg-card"/>
          <circle cx="${x + 55}" cy="58" r="22" fill="${c}"/><text x="${x + 55}" y="66" text-anchor="middle" font-size="20" fill="#fff">${ic}</text>
          <text x="${x + 55}" y="104" text-anchor="middle" font-size="13" font-weight="800" fill="${c}">${t}</text>`;
        [0, 1, 2].forEach((j) => {
          out += `<rect x="${x + 14}" y="${120 + j * 36}" width="82" height="26" rx="5" fill="${c}" opacity="${0.28 - j * 0.05}"/>`;
        });
        out += `</g>`;
      });
      return svg(out);
    },

    "pareto-principle": (a, b) => {
      let out = grad("gPar", a, b, 0, 1);
      const vals = [100, 62, 30, 18, 12, 9, 7, 5];
      const total = vals.reduce((s, v) => s + v, 0);
      let cum = 0;
      const pts = [];
      vals.forEach((v, i) => {
        const h = v * 1.6;
        const x = 40 + i * 40;
        out += `<rect class="grow" style="animation-delay:${i * 0.07}s" x="${x}" y="${210 - h}" width="30" height="${h}" rx="4" fill="${i < 2 ? "url(#gPar)" : "currentColor"}" opacity="${i < 2 ? 1 : 0.25}"/>`;
        cum += v;
        pts.push(`${x + 15},${210 - (cum / total) * 180}`);
      });
      out += `<polyline points="${pts.join(" ")}" fill="none" stroke="${b}" stroke-width="3" stroke-linejoin="round" class="draw"/>`;
      pts.forEach((p) => { const [x, y] = p.split(","); out += `<circle cx="${x}" cy="${y}" r="3.5" fill="${b}"/>`; });
      const y80 = 210 - 0.8 * 180;
      out += `<line x1="30" y1="${y80}" x2="370" y2="${y80}" stroke="${b}" stroke-dasharray="4 5" opacity=".7"/>
        <text x="372" y="${y80 - 6}" text-anchor="end" font-size="11" font-weight="700" fill="${b}">80%</text>
        <line x1="30" y1="210" x2="370" y2="210" class="svg-axis"/>
        <text x="80" y="232" text-anchor="middle" font-size="11" font-weight="700" class="svg-t">vital few</text>
        <text x="250" y="232" text-anchor="middle" font-size="11" class="svg-m">trivial many</text>`;
      return svg(out);
    },

    "okrs": (a, b) => {
      let out = grad("gOkr", a, b, 1, 0);
      out += `<g class="pop"><rect x="110" y="20" width="180" height="56" rx="14" fill="url(#gOkr)"/>
        <text x="200" y="44" text-anchor="middle" font-size="11" fill="#fff" opacity=".85">OBJECTIVE</text>
        <text x="200" y="63" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">Inspiring & qualitative</text></g>`;
      const pct = [0.9, 0.65, 0.4];
      [0, 1, 2].forEach((i) => {
        const x = 20 + i * 128;
        out += `<path d="M200 76 C200 110, ${x + 58} 100, ${x + 58} 135" fill="none" stroke="${a}" stroke-width="2" opacity=".6"/>
          <g class="pop" style="animation-delay:${0.2 + i * 0.12}s"><rect x="${x}" y="135" width="116" height="88" rx="12" class="svg-card"/>
          <text x="${x + 14}" y="160" font-size="12" font-weight="700" class="svg-t">Key Result ${i + 1}</text>
          <rect x="${x + 14}" y="176" width="88" height="10" rx="5" class="svg-track-fill"/>
          <rect x="${x + 14}" y="176" width="${88 * pct[i]}" height="10" rx="5" fill="${b}" class="grow-x"/>
          <text x="${x + 14}" y="206" font-size="16" font-weight="800" fill="${a}">${pct[i].toFixed(1)}</text></g>`;
      });
      return svg(out);
    },

    "north-star-metric": (a, b) => {
      let out = grad("gNs", a, b);
      const star = (cx, cy, R, r) => {
        let p = "";
        for (let i = 0; i < 10; i++) {
          const ang = (Math.PI / 5) * i - Math.PI / 2;
          const rad = i % 2 ? r : R;
          p += `${cx + rad * Math.cos(ang)},${cy + rad * Math.sin(ang)} `;
        }
        return p;
      };
      const inputs = [[60, 200, "Breadth"], [150, 225, "Depth"], [250, 225, "Frequency"], [340, 200, "Efficiency"]];
      inputs.forEach(([x, y, t], i) => {
        out += `<line x1="200" y1="100" x2="${x}" y2="${y - 18}" stroke="${a}" stroke-width="2" stroke-dasharray="4 5" opacity=".6"/>
          <g class="pop" style="animation-delay:${0.3 + i * 0.1}s"><rect x="${x - 42}" y="${y - 18}" width="84" height="30" rx="15" class="svg-card"/>
          <text x="${x}" y="${y + 2}" text-anchor="middle" font-size="11" font-weight="600" class="svg-t">${t}</text></g>`;
      });
      out += `<circle cx="200" cy="95" r="70" fill="${a}" opacity=".12" class="pulse"/>
        <polygon points="${star(200, 95, 58, 24)}" fill="url(#gNs)" class="pop"/>
        <text x="200" y="176" text-anchor="middle" font-size="12" font-weight="700" class="svg-t">NORTH STAR</text>`;
      return svg(out);
    },

    "raci-matrix": (a, b) => {
      const roles = ["PM", "Dev", "Design", "Exec"];
      const rows = [["Plan", ["A", "C", "C", "I"]], ["Design", ["C", "C", "R", "A"]], ["Build", ["A", "R", "C", "I"]], ["Launch", ["R", "I", "I", "A"]]];
      const col = { R: "#10b981", A: a, C: "#f59e0b", I: "#94a3b8" };
      let out = "";
      roles.forEach((r, i) => (out += `<text x="${150 + i * 62}" y="35" text-anchor="middle" font-size="12" font-weight="700" class="svg-t">${r}</text>`));
      rows.forEach(([t, cells], j) => {
        const y = 50 + j * 48;
        out += `<text x="30" y="${y + 26}" font-size="12.5" font-weight="600" class="svg-t">${t}</text>`;
        cells.forEach((c, i) => {
          out += `<g class="pop" style="animation-delay:${(j * 4 + i) * 0.04}s"><rect x="${127 + i * 62}" y="${y + 4}" width="46" height="36" rx="9" fill="${col[c]}"/>
            <text x="${150 + i * 62}" y="${y + 28}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${c}</text></g>`;
        });
      });
      return svg(out);
    },

    "theory-of-constraints": (a, b) => {
      let out = grad("gToc", a, b, 1, 0);
      out += `<rect x="20" y="85" width="170" height="80" rx="14" fill="${a}" opacity=".18"/>
        <rect x="205" y="110" width="40" height="30" rx="6" fill="${b}" class="pulse"/>
        <rect x="260" y="85" width="120" height="80" rx="14" fill="${a}" opacity=".18"/>
        <path d="M190 85 L205 110 M190 165 L205 140 M245 110 L260 85 M245 140 L260 165" stroke="${b}" stroke-width="3"/>`;
      for (let i = 0; i < 9; i++) {
        const x = 34 + (i % 5) * 30, y = 100 + Math.floor(i / 5) * 32;
        out += `<circle cx="${x}" cy="${y + 8}" r="9" fill="url(#gToc)" class="pop" style="animation-delay:${i * 0.05}s"/>`;
      }
      out += `<circle cx="225" cy="125" r="8" fill="#fff" class="flow"/>
        <circle cx="290" cy="125" r="9" fill="url(#gToc)"/><circle cx="330" cy="125" r="9" fill="url(#gToc)" opacity=".5"/>
        <text x="225" y="92" text-anchor="middle" font-size="12" font-weight="800" fill="${b}">CONSTRAINT</text>
        <text x="105" y="190" text-anchor="middle" font-size="11" class="svg-m">Work piles up (WIP)</text>
        <text x="320" y="190" text-anchor="middle" font-size="11" class="svg-m">Throughput</text>`;
      const steps = ["Identify", "Exploit", "Subordinate", "Elevate", "Repeat"];
      steps.forEach((s, i) => {
        out += `<text x="${40 + i * 80}" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="${i % 2 ? b : a}">${i + 1}. ${s}</text>`;
      });
      return svg(out);
    },

    /* Hero illustration for the home page */
    hero: () => `<svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" class="hero-svg" aria-hidden="true">
      <defs>
        <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#ec4899"/></linearGradient>
        <linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#06b6d4"/><stop offset="1" stop-color="#10b981"/></linearGradient>
        <linearGradient id="hg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f59e0b"/><stop offset="1" stop-color="#ef4444"/></linearGradient>
      </defs>
      <g class="float" style="animation-delay:0s">
        <rect x="40" y="40" width="200" height="150" rx="22" class="svg-card-strong"/>
        <text x="62" y="72" font-size="13" font-weight="700" class="svg-m">SWOT</text>
        <rect x="62" y="84" width="74" height="42" rx="8" fill="#10b981"/><rect x="144" y="84" width="74" height="42" rx="8" fill="#f59e0b"/>
        <rect x="62" y="132" width="74" height="42" rx="8" fill="#0ea5e9"/><rect x="144" y="132" width="74" height="42" rx="8" fill="#ef4444"/>
      </g>
      <g class="float" style="animation-delay:1.2s">
        <rect x="270" y="20" width="220" height="170" rx="22" class="svg-card-strong"/>
        <text x="292" y="52" font-size="13" font-weight="700" class="svg-m">Pareto 80/20</text>
        <rect x="294" y="80" width="24" height="90" rx="4" fill="url(#hg3)"/><rect x="324" y="110" width="24" height="60" rx="4" fill="url(#hg3)"/>
        <rect x="354" y="140" width="24" height="30" rx="4" fill="currentColor" opacity=".2"/><rect x="384" y="150" width="24" height="20" rx="4" fill="currentColor" opacity=".2"/>
        <rect x="414" y="156" width="24" height="14" rx="4" fill="currentColor" opacity=".2"/><rect x="444" y="160" width="24" height="10" rx="4" fill="currentColor" opacity=".2"/>
        <polyline points="306,120 336,92 366,80 396,74 426,70 456,68" fill="none" stroke="#ef4444" stroke-width="3"/>
      </g>
      <g class="float" style="animation-delay:.6s">
        <rect x="20" y="220" width="240" height="170" rx="22" class="svg-card-strong"/>
        <text x="42" y="252" font-size="13" font-weight="700" class="svg-m">OKRs</text>
        <rect x="42" y="266" width="196" height="30" rx="8" fill="url(#hg1)"/>
        <rect x="42" y="308" width="196" height="10" rx="5" fill="currentColor" opacity=".12"/><rect x="42" y="308" width="160" height="10" rx="5" fill="#8b5cf6"/>
        <rect x="42" y="330" width="196" height="10" rx="5" fill="currentColor" opacity=".12"/><rect x="42" y="330" width="110" height="10" rx="5" fill="#8b5cf6"/>
        <rect x="42" y="352" width="196" height="10" rx="5" fill="currentColor" opacity=".12"/><rect x="42" y="352" width="70" height="10" rx="5" fill="#8b5cf6"/>
      </g>
      <g class="float" style="animation-delay:1.8s">
        <rect x="290" y="215" width="200" height="180" rx="22" class="svg-card-strong"/>
        <text x="312" y="247" font-size="13" font-weight="700" class="svg-m">Sprint</text>
        <circle cx="390" cy="315" r="52" fill="none" stroke="currentColor" stroke-opacity=".12" stroke-width="12"/>
        <circle cx="390" cy="315" r="52" fill="none" stroke="url(#hg2)" stroke-width="12" stroke-dasharray="240 327" stroke-linecap="round" class="spin-slow"/>
        <text x="390" y="321" text-anchor="middle" font-size="18" font-weight="800" class="svg-t">73%</text>
      </g>
    </svg>`
  };
})();
