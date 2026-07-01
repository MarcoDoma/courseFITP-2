/* ============================================================
   CORSO IS1 2026 — STUDIO — Script
   Istruttori di 1° Livello (Padel) · FITP · A.A. 2026
   Three.js padel court + GSAP sport animations + App logic
   ============================================================ */

// ============================================================
// THREE.JS — Padel court wireframe + ball arc background
// ============================================================
(function initThree() {
  const canvas = document.getElementById('three-bg');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, -6, 22);
  camera.lookAt(0, 2, 0);

  // ── Court wireframe (padel court 20×10 ratio) ──────────────
  const courtGeo   = new THREE.PlaneGeometry(22, 11, 8, 4);
  const courtEdges = new THREE.EdgesGeometry(courtGeo);
  const courtMat   = new THREE.LineBasicMaterial({
    color: 0xc6f135,
    transparent: true,
    opacity: 0.13,
  });
  const court = new THREE.LineSegments(courtEdges, courtMat);
  court.rotation.x = -Math.PI / 2.6;
  court.position.y = -1;
  scene.add(court);

  // ── Center net line ────────────────────────────────────────
  const netPts = [new THREE.Vector3(-11, 0, 0), new THREE.Vector3(11, 0, 0)];
  const netGeo = new THREE.BufferGeometry().setFromPoints(netPts);
  const netMat = new THREE.LineBasicMaterial({ color: 0xc6f135, transparent: true, opacity: 0.35 });
  const net = new THREE.Line(netGeo, netMat);
  court.add(net);

  // ── Service lines ──────────────────────────────────────────
  const svc1Pts = [new THREE.Vector3(-5.5, 0, -5.5), new THREE.Vector3(-5.5, 0, 5.5)];
  const svc2Pts = [new THREE.Vector3(5.5, 0, -5.5),  new THREE.Vector3(5.5, 0, 5.5)];
  [svc1Pts, svc2Pts].forEach(pts => {
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    court.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xc6f135, transparent: true, opacity: 0.18 })));
  });

  // ── Ball 1 — lob arc left→right ───────────────────────────
  const arc1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, -0.5, 0),
    new THREE.Vector3(-5, 5.5, 0),
    new THREE.Vector3(0, 7, 0),
    new THREE.Vector3(5, 4.5, 0),
    new THREE.Vector3(10, -0.5, 0),
  ]);

  // ── Ball 2 — cross-court arc ───────────────────────────────
  const arc2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-9, -0.5, -3),
    new THREE.Vector3(-2, 6, -1),
    new THREE.Vector3(3, 5, 2),
    new THREE.Vector3(9, -0.5, 3),
  ]);

  const ballMat = new THREE.MeshBasicMaterial({ color: 0xf9e54a });
  const ball1 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), ballMat);
  const ball2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xf9e54a, transparent: true, opacity: 0.55 })
  );
  scene.add(ball1);
  scene.add(ball2);

  // ── Ball trail (tube geometry along arc, very faint) ──────
  const trailGeo = new THREE.TubeGeometry(arc1, 40, 0.04, 4, false);
  const trailMat = new THREE.MeshBasicMaterial({ color: 0xf9e54a, transparent: true, opacity: 0.08 });
  scene.add(new THREE.Mesh(trailGeo, trailMat));

  let t1 = 0, t2 = 0.5;

  function animate() {
    requestAnimationFrame(animate);

    // Ball movement — different speeds, offset phase
    t1 = (t1 + 0.0025) % 1;
    t2 = (t2 + 0.0018) % 1;

    const p1 = arc1.getPointAt(t1);
    const p2 = arc2.getPointAt(t2);
    ball1.position.copy(p1);
    ball2.position.copy(p2);

    // Slow court drift
    court.rotation.z += 0.00012;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.addEventListener('themechange', (e) => {
    const isDark = e.detail === 'dark';
    courtMat.color.setHex(isDark ? 0xc6f135 : 0x7ab800);
    netMat.color.setHex(isDark ? 0xc6f135 : 0x7ab800);
    courtMat.opacity = isDark ? 0.13 : 0.10;
  });
})();


// ============================================================
// HAPTICS
// ============================================================
function vibrateCorrect()   { if (navigator.vibrate) navigator.vibrate(40); }
function vibrateWrong()     { if (navigator.vibrate) navigator.vibrate([60, 40, 60]); }
function vibrateMilestone() { if (navigator.vibrate) navigator.vibrate([30, 20, 30, 20, 80]); }


// ============================================================
// BURST PARTICLES — DOM-based, no Three.js
// ============================================================
function burstParticles(el, type) {
  if (typeof gsap === 'undefined') return;
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colorMap = {
    accent: '#c6f135',
    green:  '#00d4a8',
    red:    '#ff4d6a',
  };
  const col = colorMap[type] || colorMap.accent;
  const count = type === 'green' ? 8 : 6;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    const size = 4 + Math.random() * 4;
    dot.style.cssText = `
      position:fixed;width:${size}px;height:${size}px;border-radius:50%;
      background:${col};pointer-events:none;z-index:9999;
      left:${cx}px;top:${cy}px;transform:translate(-50%,-50%);
    `;
    document.body.appendChild(dot);
    const angle = (i / count) * Math.PI * 2;
    const dist  = 24 + Math.random() * 18;
    gsap.to(dot, {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      opacity: 0,
      scale: 0,
      duration: 0.5 + Math.random() * 0.2,
      ease: 'power2.out',
      onComplete: () => dot.remove(),
    });
  }
}


// ============================================================
// MILESTONE BANNER
// ============================================================
function celebrateMilestone(type) {
  if (typeof gsap === 'undefined') return;
  const isComplete = type === 'complete';
  const banner = document.createElement('div');
  banner.className = 'milestone-banner';
  banner.style.cssText += `
    background:${isComplete ? 'var(--green-bg)' : 'var(--accent-bg)'};
    border-bottom-color:${isComplete ? 'var(--green-border)' : 'var(--accent-border)'};
    color:${isComplete ? 'var(--green)' : 'var(--accent)'};
  `;
  banner.textContent = isComplete ? '🏆 Sezione completata!' : '💪 Metà sezione!';
  document.body.appendChild(banner);

  gsap.fromTo(banner,
    { y: -60 },
    {
      y: 0, duration: 0.28, ease: 'power3.out',
      onComplete: () => {
        gsap.to(banner, {
          y: -60, delay: 1.8, duration: 0.22, ease: 'power3.in',
          onComplete: () => banner.remove(),
        });
      },
    }
  );
  vibrateMilestone();
}


// ============================================================
// QUIZ ANSWER FLASH
// ============================================================
function flashScreen(color) {
  if (typeof gsap === 'undefined') return;
  const flash = document.createElement('div');
  flash.className = 'quiz-flash';
  flash.style.background = color;
  flash.style.opacity = '1';
  document.body.appendChild(flash);
  gsap.to(flash, { opacity: 0, duration: 0.38, ease: 'power2.out', onComplete: () => flash.remove() });
}


// ============================================================
// GSAP — Animation helpers
// ============================================================
function animateScreenIn(screenId) {
  if (typeof gsap === 'undefined') return;
  const screen = document.getElementById('screen-' + screenId);
  if (!screen) return;

  const targets = screen.querySelectorAll(
    '.stat-card, .prog-card, .day-card, .tips-box, ' +
    '.sec-item-wrap, .sec-item, .qa-card, ' +
    '.flash-card-scene, .flash-prog-row, .flash-filter, ' +
    '.quiz-start-card, .quiz-header-card, .quiz-option, ' +
    '.num-card, .history-card, .summary-card, .result-detail-card'
  );

  gsap.fromTo(targets,
    { opacity: 0, y: 12 },
    {
      opacity: 1, y: 0,
      duration: 0.28,
      stagger: { each: 0.03, ease: 'power1.out' },
      ease: 'power2.out',
      clearProps: 'transform,opacity',
    }
  );
}

function animateNavTap(btn) {
  if (typeof gsap === 'undefined') return;
  // Animate indicator in
  const indicator = btn.querySelector('.nav-indicator');
  if (indicator) {
    gsap.fromTo(indicator,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.22, ease: 'power3.out', transformOrigin: 'center' }
    );
  }
  // Button scale punch
  gsap.to(btn, { scale: 0.88, duration: 0.08, ease: 'power3.in', yoyo: true, repeat: 1 });
}

function animateCountersUp() {
  if (typeof gsap === 'undefined') return;
  document.querySelectorAll('#screen-home .stat-val').forEach(el => {
    const raw = el.textContent.trim();
    const num = parseInt(raw, 10);
    if (!isNaN(num) && !raw.includes('/') && !raw.includes(':')) {
      const original = el.textContent;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: num,
        duration: 0.85,
        ease: 'power2.out',
        snap: { val: 1 },
        onUpdate() {
          el.textContent = raw.includes('%')
            ? Math.round(obj.val) + '%'
            : Math.round(obj.val);
        },
        onComplete() { el.textContent = original; },
      });
    }
  });
}

function animateProgressBars(screenEl) {
  if (typeof gsap === 'undefined') return;
  const bars = (screenEl || document).querySelectorAll(
    '.prog-bar, .sec-bar-fill, .flash-prog-fill, .quiz-prog-bar, .history-prog-fill'
  );
  bars.forEach(bar => {
    const target = bar.style.width || '0%';
    bar.style.width = '0%';
    gsap.to(bar, { width: target, duration: 0.55, ease: 'back.out(1.4)', delay: 0.12 });
  });
}

function animateFlashCardFlip(card, onMidpoint) {
  if (typeof gsap === 'undefined') { onMidpoint(); return; }
  gsap.to(card, {
    rotateY: 90,
    duration: 0.14,
    ease: 'power2.in',
    onComplete() {
      onMidpoint();
      gsap.fromTo(card,
        { rotateY: -90, scaleX: 0.92 },
        { rotateY: 0, scaleX: 1, duration: 0.26, ease: 'power3.out' }
      );
    },
  });
}

function pulseElement(el) {
  if (typeof gsap === 'undefined') return;
  gsap.timeline()
    .to(el, { scale: 1.08, duration: 0.10, ease: 'power3.out' })
    .to(el, { scale: 1.0,  duration: 0.22, ease: 'power2.out' });
}

function shakeElement(el) {
  if (typeof gsap === 'undefined') return;
  gsap.to(el, { x: [-5, 5, -3, 3, -1, 1, 0], duration: 0.30, ease: 'none' });
}


// ============================================================
// STORAGE
// ============================================================
const LS = 'is1_2026_v1';
let store = {};
function load() { try { store = JSON.parse(localStorage.getItem(LS)) || {}; } catch(e) { store = {}; } }
function save() { localStorage.setItem(LS, JSON.stringify(store)); }

function getTheme() { return store.theme || 'dark'; }
function setTheme(t) {
  store.theme = t; save(); applyTheme();
  window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
}
function applyTheme() { document.documentElement.setAttribute('data-theme', getTheme()); }
function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); renderHome(); }

function isRead(sid, qi) { return !!(store['r_'+sid] && store['r_'+sid][qi]); }

function toggleRead(sid, qi) {
  if (!store['r_'+sid]) store['r_'+sid] = {};
  const prevPct = secPct(sid);
  store['r_'+sid][qi] = !store['r_'+sid][qi];
  save();
  const isDone = !!store['r_'+sid][qi];
  const card = document.getElementById('qcard_'+sid+'_'+qi);
  const btn  = document.getElementById('rbtn_'+sid+'_'+qi);
  if (card) {
    card.className = 'qa-card' + (isDone ? ' read' : '');
    if (isDone && typeof gsap !== 'undefined') {
      const line = card.querySelector('.card-accent-line');
      if (line) gsap.fromTo(line, { scaleY: 0, transformOrigin: 'top center' }, { scaleY: 1, duration: 0.3, ease: 'power2.out' });
    }
  }
  if (btn) {
    btn.className = 'mark-read-btn' + (isDone ? ' done' : '');
    btn.innerHTML = isDone ? '✓ Studiata' : '○ Segna come studiata';
    pulseElement(btn);
    if (isDone) burstParticles(btn, 'green');
  }
  const newPct = secPct(sid);
  if (prevPct < 50  && newPct >= 50)  celebrateMilestone('halfway');
  if (prevPct < 100 && newPct === 100) celebrateMilestone('complete');
  const meta = document.getElementById('detail_meta');
  if (meta) {
    const sec = SECTIONS.find(s => s.id === sid);
    meta.textContent = sec.qa.length + ' domande · ' + newPct + '% completato';
  }
}

function secPct(sid) {
  const s = SECTIONS.find(x => x.id === sid);
  if (!s) return 0;
  const r = s.qa.filter((_, i) => isRead(sid, i)).length;
  return Math.round(r / s.qa.length * 100);
}
function totalRead() { return SECTIONS.reduce((a, s) => a + s.qa.filter((_, i) => isRead(s.id, i)).length, 0); }
function totalQA()   { return SECTIONS.reduce((a, s) => a + s.qa.length, 0); }

function dayDone(n) { return !!store['day_'+n]; }
function toggleDay(n) {
  const wasDone = dayDone(n);
  store['day_'+n] = !wasDone;
  save();
  const isDone = !wasDone;

  const card = document.querySelector(`.day-card[data-day="${n}"]`);
  if (!card) { renderHome(); return; }

  const pill  = card.querySelector('.day-pill');
  const check = card.querySelector('.day-check');
  pill.className  = 'day-pill' + (isDone ? ' done' : '');
  if (check) check.textContent = isDone ? '✅' : '⬜';

  if (isDone) {
    if (typeof gsap !== 'undefined') {
      gsap.timeline()
        .to(pill, { scale: 1.3, duration: 0.12, ease: 'power3.out' })
        .to(pill, { scale: 1.0, duration: 0.32, ease: 'elastic.out(1.2, 0.5)' });
    }
    burstParticles(pill, 'accent');
  } else {
    if (typeof gsap !== 'undefined') gsap.to(pill, { scale: 0.85, duration: 0.08, yoyo: true, repeat: 1 });
  }
}

function getHistory() { return store.quizHistory || []; }
function saveQuizResult(result) {
  if (!store.quizHistory) store.quizHistory = [];
  store.quizHistory.unshift(result);
  if (store.quizHistory.length > 20) store.quizHistory = store.quizHistory.slice(0, 20);
  save();
}


// ============================================================
// NAVIGATION
// ============================================================
let currentNav = 'home';

function goTo(name, btn) {
  if (name === currentNav) return;
  const prevScreen = document.getElementById('screen-' + currentNav);

  if (typeof gsap !== 'undefined' && prevScreen) {
    gsap.to(prevScreen, {
      opacity: 0, x: -20, duration: 0.12, ease: 'power3.in',
      onComplete: showNext,
    });
  } else {
    showNext();
  }

  function showNext() {
    document.querySelectorAll('.screen').forEach(s => {
      s.style.display = 'none';
      s.style.opacity = '';
      s.style.transform = '';
    });
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.remove('active');
      // Clear any inline transform GSAP left on the indicator, so the glow
      // doesn't stay lit on previously-tapped tabs. CSS reasserts scaleX(0).
      const ind = b.querySelector('.nav-indicator');
      if (ind) { ind.style.transform = ''; ind.style.opacity = ''; }
    });

    const el = document.getElementById('screen-' + name);
    el.style.display = 'block';
    el.scrollTop = 0;

    if (btn) { btn.classList.add('active'); animateNavTap(btn); }
    currentNav = name;

    if      (name === 'home')    renderHome();
    else if (name === 'sezioni') renderSezioni('');
    else if (name === 'flash')   initFlash();
    else if (name === 'quiz')    renderQuizStart();
    else if (name === 'numeri')  renderNumeri();

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(el, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.18, ease: 'power2.out' });
    }
    animateScreenIn(name);
  }
}

function goDetail(sid) {
  document.querySelectorAll('.screen').forEach(s => { s.style.display = 'none'; });
  const el = document.getElementById('screen-detail');
  el.style.display = 'block';
  el.scrollTop = 0;
  renderDetail(sid);
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(el, { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' });
  }
  animateScreenIn('detail');
}

function backSezioni() {
  document.querySelectorAll('.screen').forEach(s => { s.style.display = 'none'; });
  const el = document.getElementById('screen-sezioni');
  el.style.display = 'block';
  renderSezioni('');
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(el, { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' });
  }
  animateScreenIn('sezioni');
}


// ============================================================
// HOME
// ============================================================
function renderHome() {
  const tRead = totalRead(), tQA = totalQA(), tPct = Math.round(tRead / tQA * 100);
  const doneCount = SECTIONS.filter(s => secPct(s.id) === 100).length;
  const isDark = getTheme() === 'dark';
  const cats = ['sistema', 'deontologia', 'regole', 'didattica', 'tattica', 'tecnica'];
  const catLabels = { sistema:'Sistema & Bandi', deontologia:'Deontologia', regole:'Campo & Regole', didattica:'Didattica', tattica:'Tattica', tecnica:'Tecnica' };

  let h = `
  <div class="home-hero">
    <div class="page-header-row" style="margin-bottom:12px">
      <div class="hero-badge">🎾 FITP · Istruttore 1° Livello · 2026</div>
      <button class="theme-toggle" onclick="toggleTheme()" aria-label="Cambia tema">${isDark ? '☀️' : '🌙'}</button>
    </div>
    <div class="hero-title">Corso IS1 2026</div>
    <div class="hero-sub">Tutti i concetti delle slide con spiegazioni, flashcard, quiz e piano in 7 giorni per l'esame.</div>
  </div>
  <div class="stats-row">
    <div class="stat-card"><div class="stat-val">${SECTIONS.length}</div><div class="stat-lbl">Sezioni</div></div>
    <div class="stat-card"><div class="stat-val">${tRead}</div><div class="stat-lbl">Lette</div></div>
    <div class="stat-card"><div class="stat-val">${tPct}%</div><div class="stat-lbl">Completato</div></div>
  </div>
  <div class="section-label">Progresso generale</div>
  <div class="prog-card">
    <div class="prog-top"><span class="prog-name">Domande studiate</span><span class="prog-pct">${tRead} / ${tQA}</span></div>
    <div class="prog-bar-wrap"><div class="prog-bar${tPct === 100 ? ' done' : ''}" style="width:${tPct}%"></div></div>
    <div class="prog-meta">${doneCount} sezioni completate su ${SECTIONS.length}</div>
  </div>`;

  cats.forEach(cat => {
    const secs = SECTIONS.filter(s => s.cat === cat);
    const tot  = secs.reduce((a, s) => a + s.qa.length, 0);
    const rd   = secs.reduce((a, s) => a + s.qa.filter((_, i) => isRead(s.id, i)).length, 0);
    const p    = tot > 0 ? Math.round(rd / tot * 100) : 0;
    h += `<div class="prog-card">
      <div class="prog-top"><span class="prog-name">${catLabels[cat]}</span><span class="prog-pct">${p}%</span></div>
      <div class="prog-bar-wrap"><div class="prog-bar${p === 100 ? ' done' : ''}" style="width:${p}%"></div></div>
      <div class="prog-meta">${rd} / ${tot} domande</div>
    </div>`;
  });

  const hist = getHistory();
  if (hist.length > 0) {
    const last = hist[0];
    const lp = Math.round(last.correct / last.total * 100);
    h += `<div class="section-label">Ultimo quiz</div>
    <div class="prog-card" style="cursor:pointer" onclick="goTo('quiz',document.querySelectorAll('.nav-btn')[3])">
      <div class="prog-top"><span class="prog-name">📝 ${last.date}</span><span class="prog-pct">${lp}%</span></div>
      <div class="prog-bar-wrap"><div class="prog-bar${lp >= 80 ? ' done' : ''}" style="width:${lp}%"></div></div>
      <div class="prog-meta">${last.correct} corrette su ${last.total} — tocca per vedere lo storico</div>
    </div>`;
  }

  h += `<div class="section-label">Piano di studio — 7 giorni</div>`;
  PLAN_DAYS.forEach(d => {
    const done = dayDone(d.n);
    h += `<div class="day-card" data-day="${d.n}" onclick="toggleDay(${d.n})">
      <div class="day-pill${done ? ' done' : ''}">G${d.n}</div>
      <div class="day-info">
        <div class="day-n">Giorno ${d.n}</div>
        <div class="day-topics">${d.topics}</div>
        <div class="day-method">${d.method}</div>
      </div>
      <span class="day-check" style="font-size:20px">${done ? '✅' : '⬜'}</span>
    </div>`;
  });

  h += `<div class="section-label">Consigli</div>
  <div class="tips-box">
    <div class="tip-row"><span>⏰</span><span class="tip-text">Sessioni da 30-40 min: l'esame dà 30 minuti per 30 domande</span></div>
    <div class="tip-row"><span>📐</span><span class="tip-text">Impara a memoria misure del campo e racchetta (sezione Numeri)</span></div>
    <div class="tip-row"><span>🚦</span><span class="tip-text">Fissa bene il "Semaforo": zona gialla, verde e rossa</span></div>
    <div class="tip-row"><span>🎯</span><span class="tip-text">Attenzione alle domande con risposte simili — le più insidiose</span></div>
  </div>`;

  document.getElementById('screen-home').innerHTML = h;
  animateCountersUp();
  animateProgressBars(document.getElementById('screen-home'));
}


// ============================================================
// SEZIONI
// ============================================================
let _secOpen = new Set();
let _secCat  = 'all';

function renderSezioni(filter) {
  const cats = ['all','sistema','deontologia','regole','didattica','tattica','tecnica'];
  const catL = { all:'Tutte', sistema:'Sistema', deontologia:'Deontol.', regole:'Regole', didattica:'Didattica', tattica:'Tattica', tecnica:'Tecnica' };
  const q    = (filter || '').toLowerCase();
  const items = SECTIONS.filter(s => {
    const mc = _secCat === 'all' || s.cat === _secCat;
    const mq = !q || s.name.toLowerCase().includes(q) || s.cat.toLowerCase().includes(q);
    return mc && mq;
  });
  const doneSec = SECTIONS.filter(s => secPct(s.id) === 100).length;
  const chips   = cats.map(c => `<div class="chip${_secCat === c ? ' active' : ''}" onclick="_secCat='${c}';renderSezioni('')">${catL[c]}</div>`).join('');

  let h = `
  <div class="page-header">
    <div class="page-header-row">
      <div><div class="page-title">Sezioni</div><div class="page-sub">${doneSec}/${SECTIONS.length} complete · ${totalRead()}/${totalQA()} domande</div></div>
    </div>
  </div>
  <div class="search-wrap"><input class="search-input" type="search" placeholder="Cerca sezione..." value="${filter || ''}" oninput="renderSezioni(this.value)" /></div>
  <div style="padding:6px 16px 2px"><div class="flash-filter">${chips}</div></div>
  <div class="sections-list">`;

  items.forEach(s => {
    const p = secPct(s.id);
    const isOpen = _secOpen.has(s.id);
    h += `<div class="sec-item-wrap" style="margin-bottom:9px">
      <div class="sec-item" style="margin-bottom:0;border-radius:${isOpen ? '14px 14px 0 0' : '14px'}" onclick="_secToggle(${s.id})">
        <div class="sec-icon-wrap">${s.icon}</div>
        <div class="sec-info">
          <div class="sec-name">${s.name}</div>
          <div class="sec-progress">
            <div class="sec-bar"><div class="sec-bar-fill" id="sbar_${s.id}" style="width:${p}%"></div></div>
            <span class="sec-pct" id="spct_${s.id}">${p}%</span>
            <span class="sec-count">${s.qa.length}D</span>
          </div>
        </div>
        <span style="color:var(--text3);font-size:20px;transition:transform .2s;display:inline-block;transform:rotate(${isOpen ? '90deg' : '0deg'})" id="sarr_${s.id}">›</span>
      </div>
      <div id="sconc_${s.id}" style="display:${isOpen ? 'block' : 'none'};background:var(--bg2);border:0.5px solid var(--border);border-top:none;border-radius:0 0 14px 14px;overflow:hidden">`;
    if (isOpen) {
      s.qa.forEach((qa, i) => {
        const read = isRead(s.id, i);
        h += `<div class="qa-card${read ? ' read' : ''}" id="qcard_${s.id}_${i}" style="margin:0;border-radius:0;border-left:none;border-right:none;border-top:0.5px solid var(--border);border-bottom:none;box-shadow:none;position:relative">
          <div class="card-accent-line" style="transform:scaleY(${read ? 1 : 0})"></div>
          <div class="qa-num">Concetto ${i+1} / ${s.qa.length}</div>
          <div class="qa-q">${qa.q}</div>
          <div class="qa-ans-wrap"><span class="qa-check">✅</span><span class="qa-ans-text">${qa.a}</span></div>
          <div class="qa-exp">${qa.e}</div>
          <button class="mark-read-btn${read ? ' done' : ''}" id="rbtn_${s.id}_${i}" onclick="event.stopPropagation();_secToggleRead(${s.id},${i})">
            ${read ? '✓ Studiata' : '○ Segna come studiata'}
          </button>
        </div>`;
      });
    }
    h += `</div></div>`;
  });
  h += '</div>';
  document.getElementById('screen-sezioni').innerHTML = h;
}

function _secToggle(sid) {
  if (_secOpen.has(sid)) _secOpen.delete(sid); else _secOpen.add(sid);
  renderSezioni(document.querySelector('.search-input') ? document.querySelector('.search-input').value : '');
}

function _secToggleRead(sid, qi) {
  if (!store['r_'+sid]) store['r_'+sid] = {};
  const prevPct = secPct(sid);
  store['r_'+sid][qi] = !store['r_'+sid][qi];
  save();
  const read = !!store['r_'+sid][qi];
  const card = document.getElementById('qcard_'+sid+'_'+qi);
  const btn  = document.getElementById('rbtn_'+sid+'_'+qi);

  if (card) {
    card.className = 'qa-card' + (read ? ' read' : '');
    if (read && typeof gsap !== 'undefined') {
      const line = card.querySelector('.card-accent-line');
      if (line) gsap.fromTo(line, { scaleY: 0, transformOrigin: 'top center' }, { scaleY: 1, duration: 0.3, ease: 'power2.out' });
    }
  }
  if (btn) {
    btn.className = 'mark-read-btn' + (read ? ' done' : '');
    btn.innerHTML = read ? '✓ Studiata' : '○ Segna come studiata';
    pulseElement(btn);
    if (read) burstParticles(btn, 'green');
  }

  const newPct = secPct(sid);
  const bar = document.getElementById('sbar_'+sid);
  const pct = document.getElementById('spct_'+sid);
  if (bar && typeof gsap !== 'undefined') gsap.to(bar, { width: newPct + '%', duration: 0.45, ease: 'back.out(1.4)' });
  else if (bar) bar.style.width = newPct + '%';
  if (pct) pct.textContent = newPct + '%';

  if (prevPct < 50  && newPct >= 50)  celebrateMilestone('halfway');
  if (prevPct < 100 && newPct === 100) celebrateMilestone('complete');

  const doneS = SECTIONS.filter(s => secPct(s.id) === 100).length;
  const ph = document.querySelector('#screen-sezioni .page-sub');
  if (ph) ph.textContent = doneS + '/' + SECTIONS.length + ' complete · ' + totalRead() + '/' + totalQA() + ' domande';
}


// ============================================================
// DETAIL
// ============================================================
function renderDetail(sid) {
  const sec = SECTIONS.find(s => s.id === sid);
  const p   = secPct(sid);
  let h = `
  <div class="detail-header">
    <button class="back-btn" onclick="backSezioni()">‹ Tutte le sezioni</button>
    <div class="detail-title-row"><span style="font-size:20px">${sec.icon}</span><span class="detail-title">${sec.name}</span></div>
    <div class="detail-meta" id="detail_meta">${sec.qa.length} domande · ${p}% completato</div>
  </div>
  <div class="qa-list">`;
  sec.qa.forEach((qa, i) => {
    const read = isRead(sid, i);
    h += `<div class="qa-card${read ? ' read' : ''}" id="qcard_${sid}_${i}" style="position:relative">
      <div class="card-accent-line" style="transform:scaleY(${read ? 1 : 0})"></div>
      <div class="qa-num">D${i+1}</div>
      <div class="qa-q">${qa.q}</div>
      <div class="qa-ans-wrap"><span class="qa-check">✅</span><span class="qa-ans-text">${qa.a}</span></div>
      <div class="qa-exp">${qa.e}</div>
      <button class="mark-read-btn${read ? ' done' : ''}" id="rbtn_${sid}_${i}" onclick="toggleRead(${sid},${i})">
        ${read ? '✓ Studiata' : '○ Segna come studiata'}
      </button>
    </div>`;
  });
  h += '</div>';
  document.getElementById('screen-detail').innerHTML = h;
}


// ============================================================
// FLASHCARD
// ============================================================
let fCards = [], fIdx = 0, fRevealed = false, fGood = 0, fBad = 0, fFilter = 'all';

function initFlash() {
  let pool = SECTIONS.flatMap(s => s.qa.map(q => ({ ...q, cat: s.cat, sec: s.name })));
  if (fFilter !== 'all') pool = pool.filter(q => q.cat === fFilter);
  fCards = pool.sort(() => Math.random() - .5);
  fIdx = 0; fGood = 0; fBad = 0; fRevealed = false;
  renderFlash();
}

function setFFilter(f, el) {
  fFilter = f;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  initFlash();
}

function renderFlash() {
  const total = fCards.length;
  if (!total) { document.getElementById('screen-flash').innerHTML = '<div style="padding:40px 16px;text-align:center;color:var(--text3)">Nessuna flashcard.</div>'; return; }
  if (fIdx >= total) { renderFlashSummary(); return; }

  const card = fCards[fIdx];
  const pct  = Math.round(fIdx / total * 100);
  const cats = ['all','sistema','deontologia','regole','didattica','tattica','tecnica'];
  const catL = { all:'Tutte', sistema:'Sistema', deontologia:'Deontol.', regole:'Regole', didattica:'Didattica', tattica:'Tattica', tecnica:'Tecnica' };
  const chips = cats.map(c => `<div class="chip${fFilter === c ? ' active' : ''}" onclick="setFFilter('${c}',this)">${catL[c]}</div>`).join('');

  document.getElementById('screen-flash').innerHTML = `
  <div class="page-header"><div class="page-header-row"><div><div class="page-title">Flashcard</div><div class="page-sub">Tocca per vedere la risposta</div></div></div></div>
  <div class="flash-wrap">
    <div class="flash-filter">${chips}</div>
    <div class="flash-prog-row"><span class="flash-counter">${fIdx+1} / ${total}</span><span class="flash-score">✅ ${fGood} &nbsp; ❌ ${fBad}</span></div>
    <div class="flash-prog-bar"><div class="flash-prog-fill" style="width:${pct}%"></div></div>
    <div class="flash-card-scene">
      <div class="flash-card${fRevealed ? ' flipped' : ''}" id="flash-card-el" onclick="revealFlash()">
        <div>
          <div class="flash-section-tag">${card.sec}</div>
          <div class="flash-question">${card.q}</div>
          ${!fRevealed ? '<div class="flash-tap-hint">👆 Tocca per vedere la risposta</div>' : ''}
        </div>
        ${fRevealed ? `<div class="flash-divider"></div><div><div class="flash-answer">✅ ${card.a}</div><div class="flash-explain">${card.e}</div></div>` : ''}
      </div>
    </div>
    ${fRevealed
      ? `<div class="flash-btns"><button class="flash-btn fbtn-bad" onclick="nextFlash(false)">❌ Da ripassare</button><button class="flash-btn fbtn-good" onclick="nextFlash(true)">✅ Sapevo</button></div>`
      : `<button class="flash-reveal-btn" onclick="revealFlash()">👁 Mostra risposta</button>`
    }
  </div>`;
  animateProgressBars(document.getElementById('screen-flash'));
}

function revealFlash() {
  if (fRevealed) return;
  const cardEl = document.getElementById('flash-card-el');
  animateFlashCardFlip(cardEl, () => { fRevealed = true; renderFlash(); });
}

function nextFlash(knew) {
  if (knew) fGood++; else fBad++;
  fIdx++; fRevealed = false;
  renderFlash();
}

function renderFlashSummary() {
  const tot = fGood + fBad, p = tot > 0 ? Math.round(fGood / tot * 100) : 0;
  document.getElementById('screen-flash').innerHTML = `
  <div class="page-header"><div class="page-header-row"><div><div class="page-title">Flashcard</div></div></div></div>
  <div style="padding:16px">
  <div class="summary-card">
    <div class="summary-icon">${p >= 80 ? '🏆' : p >= 60 ? '💪' : '📚'}</div>
    <div class="summary-title">${p >= 80 ? 'Ottimo lavoro!' : p >= 60 ? 'Buon risultato!' : 'Continua così!'}</div>
    <div class="summary-sub">${p}% di risposte corrette in questa sessione</div>
    <div class="summary-stats">
      <div class="summary-stat"><div class="summary-stat-val" style="color:var(--green)">${fGood}</div><div class="summary-stat-lbl">Sapevo</div></div>
      <div class="summary-stat"><div class="summary-stat-val" style="color:var(--red)">${fBad}</div><div class="summary-stat-lbl">Da ripassare</div></div>
    </div>
    <button class="btn-primary" onclick="initFlash()">Ricomincia 🔁</button>
  </div></div>`;
  animateScreenIn('flash');
}


// ============================================================
// QUIZ
// ============================================================
let quizQs = [], quizIdx = 0, quizAnswered = false, quizCorrect = 0, quizWrong = [], quizFilter = 'all';

function renderQuizStart() {
  const hist = getHistory();
  const cats = ['all','sistema','deontologia','regole','didattica','tattica','tecnica'];
  const catL = { all:'Tutte le categorie', sistema:'Sistema & Bandi', deontologia:'Deontologia', regole:'Campo & Regole', didattica:'Didattica', tattica:'Tattica', tecnica:'Tecnica' };
  const catBtns = cats.map(c => `<button class="quiz-cat-btn${quizFilter === c ? ' active' : ''}" onclick="setQuizCat('${c}',this)">${catL[c]}</button>`).join('');

  let h = `
  <div class="page-header">
    <div class="page-header-row"><div><div class="page-title">Quiz</div><div class="page-sub">20 domande · risposte multiple</div></div></div>
  </div>
  <div class="quiz-wrap">
    <div class="quiz-start-card">
      <div class="quiz-start-title">Mettiti alla prova</div>
      <div class="quiz-start-sub">Seleziona una categoria e rispondi a 20 domande. Vedrai le spiegazioni per ogni errore.</div>
      <div class="quiz-cat-grid">${catBtns}</div>
      <button class="start-quiz-btn" onclick="startQuiz()">🧠 Inizia il Quiz</button>
    </div>`;

  if (hist.length > 0) {
    h += `<div class="section-label" style="margin-top:8px">Storico risultati (${hist.length})</div>`;
    hist.forEach((r, i) => {
      const p   = Math.round(r.correct / r.total * 100);
      const cls = p >= 80 ? 'good' : p >= 60 ? 'mid' : 'bad';
      const lbl = p >= 80 ? 'Ottimo' : p >= 60 ? 'Buono' : 'Da ripassare';
      h += `<div class="history-card" onclick="showHistoryDetail(${i})">
        <div class="history-top">
          <span class="history-score ${cls}">${r.correct}/${r.total}</span>
          <span class="history-badge ${cls}">${lbl} · ${p}%</span>
        </div>
        <div class="history-meta">${r.date} · ${r.cat === 'all' ? 'Tutte le categorie' : r.cat} · ${r.wrong.length} errori</div>
        <div class="history-prog-bar"><div class="history-prog-fill" style="width:${p}%;background:${cls === 'good' ? 'var(--green)' : cls === 'mid' ? 'var(--amber)' : 'var(--red)'}"></div></div>
      </div>`;
    });
  } else {
    h += `<div class="no-history">Nessun quiz completato ancora.<br>Inizia il tuo primo quiz! 🎯</div>`;
  }
  h += '</div>';
  document.getElementById('screen-quiz').innerHTML = h;
  document.getElementById('screen-quiz').scrollTop = 0;
  animateProgressBars(document.getElementById('screen-quiz'));
}

function setQuizCat(f, el) {
  quizFilter = f;
  document.querySelectorAll('.quiz-cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function startQuiz() {
  let pool = SECTIONS.flatMap(s => s.qa.map(q => ({ ...q, cat: s.cat, sec: s.name })));
  if (quizFilter !== 'all') pool = pool.filter(q => q.cat === quizFilter);
  pool = pool.sort(() => Math.random() - .5);
  quizQs = pool.slice(0, Math.min(20, pool.length));
  quizIdx = 0; quizCorrect = 0; quizWrong = []; quizAnswered = false;
  renderQuizQ();
}

function renderQuizQ() {
  if (quizIdx >= quizQs.length) { renderQuizResult(); return; }
  const q   = quizQs[quizIdx];
  const pct = Math.round(quizIdx / quizQs.length * 100);
  const opts    = [q.a, ...(q.wrong || []).slice(0, 3)].sort(() => Math.random() - .5);
  const optBtns = opts.map((o, i) => `<button class="quiz-option" id="qopt_${i}" onclick="answerQuiz('${escQ(o)}','${escQ(q.a)}')">${o}</button>`).join('');

  document.getElementById('screen-quiz').innerHTML = `
  <div class="page-header">
    <div class="page-header-row">
      <div><div class="page-title">Quiz</div></div>
      <button class="theme-toggle" onclick="renderQuizStart()" style="font-size:13px;width:auto;padding:0 12px;border-radius:20px">✕ Esci</button>
    </div>
  </div>
  <div class="quiz-wrap">
    <div class="quiz-header-card">
      <div class="quiz-header-top">
        <span class="quiz-q-num">Domanda ${quizIdx+1} di ${quizQs.length}</span>
        <span class="quiz-score-badge" id="quiz-score-badge">✅ ${quizCorrect} · ❌ ${quizIdx - quizCorrect}</span>
      </div>
      <div class="quiz-prog-bar-wrap"><div class="quiz-prog-bar" style="width:${pct}%"></div></div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-section-tag">${q.sec}</div>
    </div>
    <div class="quiz-options">${optBtns}</div>
    <div class="quiz-exp-box" id="quiz-exp">
      <div class="quiz-exp-title">💡 Spiegazione</div>
      <span id="quiz-exp-text"></span>
    </div>
    <button class="quiz-next-btn" id="quiz-next" onclick="nextQuizQ()">
      ${quizIdx+1 < quizQs.length ? 'Prossima domanda →' : 'Vedi risultato 🏁'}
    </button>
  </div>`;
  quizAnswered = false;

  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.quiz-option',
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, stagger: { each: 0.06, ease: 'power1.out' }, duration: 0.22, ease: 'power2.out' }
    );
  }
  animateProgressBars(document.getElementById('screen-quiz'));
}

function escQ(s) { return (s || '').replace(/'/g, "\\'"); }

function answerQuiz(chosen, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQs[quizIdx];
  const isCorrect = chosen === correct;

  // Immediate tap press on chosen button
  const tappedBtn = [...document.querySelectorAll('.quiz-option')].find(b => b.textContent.trim() === chosen);
  if (tappedBtn && typeof gsap !== 'undefined') {
    gsap.to(tappedBtn, { scale: 0.96, duration: 0.08, ease: 'power2.in', yoyo: true, repeat: 1 });
  }

  if (isCorrect) quizCorrect++;
  else quizWrong.push({ q: q.q, chosen, correct, e: q.e, sec: q.sec });

  // Reveal correct/wrong states on all buttons
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = true;
    const t = btn.textContent.trim();
    if (t === correct)              btn.classList.add('correct');
    else if (t === chosen && !isCorrect) btn.classList.add('wrong');
    else btn.style.opacity = '0.4';
  });

  if (isCorrect) {
    vibrateCorrect();
    flashScreen('rgba(0,212,168,0.07)');
    const badge = document.getElementById('quiz-score-badge');
    if (badge && typeof gsap !== 'undefined') {
      gsap.fromTo(badge,
        { scale: 1.25 },
        { scale: 1, duration: 0.3, ease: 'elastic.out(1.1, 0.4)' }
      );
    }
  } else {
    vibrateWrong();
    flashScreen('rgba(255,77,106,0.07)');
    const header = document.querySelector('.quiz-header-card');
    if (header) shakeElement(header);

    const exp  = document.getElementById('quiz-exp');
    const et   = document.getElementById('quiz-exp-text');
    if (exp && et) {
      exp.classList.add('show');
      et.textContent = q.e;
      if (typeof gsap !== 'undefined') gsap.fromTo(exp, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
    }
  }

  const nb = document.getElementById('quiz-next');
  if (nb) {
    nb.classList.add('show');
    if (typeof gsap !== 'undefined') gsap.fromTo(nb, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.22, ease: 'expo.out' });
  }
}

function nextQuizQ() { quizIdx++; quizAnswered = false; renderQuizQ(); }

function renderQuizResult() {
  const p   = Math.round(quizCorrect / quizQs.length * 100);
  const now  = new Date();
  const date = now.toLocaleDateString('it-IT', { day:'2-digit', month:'2-digit', year:'numeric' }) +
               ' ' + now.toLocaleTimeString('it-IT', { hour:'2-digit', minute:'2-digit' });
  saveQuizResult({ correct: quizCorrect, total: quizQs.length, date, cat: quizFilter, wrong: quizWrong });

  let h = `
  <div class="page-header"><div class="page-header-row"><div><div class="page-title">Risultato Quiz</div></div></div></div>
  <div style="padding:14px 16px">
  <div class="summary-card">
    <div class="summary-icon">${p >= 80 ? '🏆' : p >= 60 ? '💪' : '📚'}</div>
    <div class="summary-title">${p >= 80 ? 'Ottimo!' : p >= 60 ? 'Buon lavoro!' : 'Hai bisogno di ripassare'}</div>
    <div class="summary-sub">${p}% di risposte corrette</div>
    <div class="summary-stats">
      <div class="summary-stat"><div class="summary-stat-val" style="color:var(--green)">${quizCorrect}</div><div class="summary-stat-lbl">Corrette</div></div>
      <div class="summary-stat"><div class="summary-stat-val" style="color:var(--red)">${quizQs.length - quizCorrect}</div><div class="summary-stat-lbl">Sbagliate</div></div>
      <div class="summary-stat"><div class="summary-stat-val" style="color:var(--accent)">${quizQs.length}</div><div class="summary-stat-lbl">Totale</div></div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
      <button class="btn-primary" onclick="startQuiz()">🔁 Nuovo Quiz</button>
      <button class="btn-primary" style="background:var(--bg3);color:var(--text2);border:0.5px solid var(--border2);box-shadow:none" onclick="renderQuizStart()">📋 Storico</button>
    </div>
  </div>`;

  if (quizWrong.length > 0) {
    h += `<div class="section-label" style="margin-top:8px">❌ Risposte sbagliate (${quizWrong.length})</div>`;
    quizWrong.forEach(w => {
      h += `<div class="result-detail-card">
        <div class="result-q-header"><span class="result-icon">❌</span><span class="result-q-text">${w.q}</span></div>
        <div class="result-ans wrong" style="padding:0 14px 6px">Tua risposta: ${w.chosen}</div>
        <div class="result-ans correct" style="padding:0 14px 8px">✅ Risposta corretta: ${w.correct}</div>
        <div class="result-exp">${w.e}</div>
      </div>`;
    });
  } else {
    h += `<div style="padding:20px;text-align:center;color:var(--green);font-size:15px;font-weight:600">🎉 Nessun errore! Perfetto!</div>`;
  }
  h += '</div>';
  document.getElementById('screen-quiz').innerHTML = h;
  document.getElementById('screen-quiz').scrollTop = 0;
  animateScreenIn('quiz');
  if (p >= 80) setTimeout(() => burstParticles(document.querySelector('.summary-icon'), 'accent'), 300);
}

function showHistoryDetail(idx) {
  const hist = getHistory();
  const r = hist[idx];
  const p = Math.round(r.correct / r.total * 100);
  let h = `
  <div class="page-header">
    <div class="page-header-row">
      <div><div class="page-title">Dettaglio Quiz</div><div class="page-sub">${r.date}</div></div>
      <button class="theme-toggle" onclick="renderQuizStart()" style="font-size:13px;width:auto;padding:0 12px;border-radius:20px">‹ Indietro</button>
    </div>
  </div>
  <div style="padding:14px 16px">
  <div class="summary-card" style="margin:0 0 14px">
    <div class="summary-icon">${p >= 80 ? '🏆' : p >= 60 ? '💪' : '📚'}</div>
    <div class="summary-title">${p}% · ${r.correct}/${r.total} corrette</div>
    <div class="summary-sub">${r.cat === 'all' ? 'Tutte le categorie' : r.cat} · ${r.wrong.length} errori</div>
  </div>`;
  if (r.wrong && r.wrong.length > 0) {
    h += `<div class="section-label">Errori commessi</div>`;
    r.wrong.forEach(w => {
      h += `<div class="result-detail-card">
        <div class="result-q-header"><span class="result-icon">❌</span><span class="result-q-text">${w.q}</span></div>
        <div class="result-ans wrong" style="padding:0 14px 6px">Risposta data: ${w.chosen}</div>
        <div class="result-ans correct" style="padding:0 14px 8px">✅ Corretta: ${w.correct}</div>
        <div class="result-exp">${w.e}</div>
      </div>`;
    });
  } else {
    h += `<div style="padding:20px;text-align:center;color:var(--green);font-size:15px">🎉 Nessun errore in questo quiz!</div>`;
  }
  h += '</div>';
  document.getElementById('screen-quiz').innerHTML = h;
  document.getElementById('screen-quiz').scrollTop = 0;
  animateScreenIn('quiz');
}


// ============================================================
// NUMERI
// ============================================================
function renderNumeri() {
  let h = `<div class="page-header"><div class="page-header-row"><div><div class="page-title">Numeri chiave</div><div class="page-sub">Da memorizzare per l'esame</div></div></div></div><div class="nums-grid">`;
  NUMBERS_DATA.forEach(n => {
    h += `<div class="num-card"><div class="num-val">${n.val}</div><div class="num-lbl">${n.lbl}</div><div class="num-ctx">${n.ctx}</div></div>`;
  });
  h += '</div>';
  document.getElementById('screen-numeri').innerHTML = h;
}


// ============================================================
// APP ICON
// ============================================================
(function generateIcon() {
  const s = 512, cv = document.createElement('canvas');
  cv.width = s; cv.height = s;
  const c = cv.getContext('2d');
  const bg = c.createLinearGradient(0, 0, s, s);
  bg.addColorStop(0, '#111720'); bg.addColorStop(1, '#0a0e14');
  c.fillStyle = bg;
  c.beginPath(); c.roundRect(0, 0, s, s, s * 0.22); c.fill();
  const glow = c.createRadialGradient(s/2, s*0.42, 0, s/2, s*0.42, s*0.38);
  glow.addColorStop(0, 'rgba(198,241,53,0.22)'); glow.addColorStop(1, 'rgba(198,241,53,0)');
  c.fillStyle = glow; c.fillRect(0, 0, s, s);
  const cx = s/2, hcy = s*0.37, hrx = s*0.24, hry = s*0.28;
  c.fillStyle = 'rgba(255,255,255,0.95)';
  c.beginPath(); c.ellipse(cx, hcy, hrx, hry, 0, 0, Math.PI*2); c.fill();
  c.fillStyle = '#111720';
  c.beginPath(); c.ellipse(cx, hcy, hrx - s*0.025, hry - s*0.025, 0, 0, Math.PI*2); c.fill();
  c.strokeStyle = 'rgba(198,241,53,0.9)'; c.lineWidth = s * 0.018; c.lineCap = 'round';
  const ls = s * 0.072;
  for (let dx = -2; dx <= 2; dx++) {
    const lx = cx + dx * ls, dy = Math.sqrt(Math.max(0, 1 - Math.pow((lx-cx)/hrx, 2))) * hry;
    c.beginPath(); c.moveTo(lx, hcy - dy + s*0.02); c.lineTo(lx, hcy + dy - s*0.02); c.stroke();
  }
  for (let dy2 = -2; dy2 <= 2; dy2++) {
    const ly = hcy + dy2 * ls, dx2 = Math.sqrt(Math.max(0, 1 - Math.pow((ly-hcy)/hry, 2))) * hrx;
    c.beginPath(); c.moveTo(cx - dx2 + s*0.02, ly); c.lineTo(cx + dx2 - s*0.02, ly); c.stroke();
  }
  const hndW = s*0.1, hndX = cx - hndW/2, hndY = hcy + hry - s*0.015, hndH = s*0.26;
  c.fillStyle = 'rgba(255,255,255,0.95)';
  c.beginPath(); c.roundRect(hndX, hndY, hndW, hndH, s*0.025); c.fill();
  c.strokeStyle = 'rgba(198,241,53,0.7)'; c.lineWidth = s * 0.012;
  for (let i = 0; i < 4; i++) {
    const ly2 = hndY + s*0.06 + i * s*0.045;
    c.beginPath(); c.moveTo(hndX + s*0.01, ly2); c.lineTo(hndX + hndW - s*0.01, ly2); c.stroke();
  }
  c.fillStyle = '#c6f135';
  c.beginPath(); c.roundRect(hndX + s*0.005, hndY + hndH - s*0.04, hndW - s*0.01, s*0.045, s*0.02); c.fill();
  const url = cv.toDataURL('image/png');
  const fav = document.createElement('link'); fav.rel = 'icon'; fav.type = 'image/png'; fav.href = url;
  document.head.appendChild(fav);
  const ati = document.createElement('link'); ati.rel = 'apple-touch-icon'; ati.href = url;
  document.head.appendChild(ati);
})();


// ============================================================
// INIT
// ============================================================
if (!CSS.supports('height', '1dvh')) {
  const setH = () => document.querySelector('.app').style.height = window.innerHeight + 'px';
  setH(); window.addEventListener('resize', setH);
}

load();
applyTheme();
renderHome();
renderNumeri();

if (typeof gsap !== 'undefined') {
  gsap.fromTo('#screen-home', { opacity: 0 }, { opacity: 1, duration: 0.45, delay: 0.1 });
  setTimeout(() => animateScreenIn('home'), 120);
  setTimeout(() => animateProgressBars(document.getElementById('screen-home')), 200);
}
