

const ICONS = {
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/>',
  linkedin: '<path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.5h3.6V21H3.3V8.5Zm6.2 0h3.45v1.7h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.53V21h-3.6v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.4V21H9.5V8.5Z"/>',
  twitter: '<path d="M22 5.9c-.67.3-1.4.5-2.15.6a3.75 3.75 0 0 0 1.65-2.07c-.73.43-1.53.75-2.39.92A3.74 3.74 0 0 0 12.7 8.9c0 .3.03.58.1.85A10.6 10.6 0 0 1 5.14 4.6a3.74 3.74 0 0 0 1.16 5c-.6-.02-1.18-.19-1.68-.46v.05a3.75 3.75 0 0 0 3 3.67c-.55.15-1.14.17-1.7.06a3.75 3.75 0 0 0 3.5 2.6A7.5 7.5 0 0 1 2 17.54a10.6 10.6 0 0 0 5.72 1.68c6.86 0 10.6-5.68 10.6-10.6l-.01-.48A7.55 7.55 0 0 0 22 5.9Z"/>',
  dribbble: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6a8.3 8.3 0 0 1 1.9 5.15c-.28-.06-3.06-.62-5.86-.27-.06-.15-.12-.3-.19-.46-.17-.4-.36-.8-.56-1.19 3.1-1.27 4.5-3.08 4.71-3.23ZM12 3.7c1.94 0 3.72.7 5.1 1.86-.18.13-1.44 1.83-4.4 3-.14-.24-.28-.48-.42-.72-1.1-1.9-2.3-3.45-2.5-3.7A8.3 8.3 0 0 1 12 3.7ZM8.3 4.7c.19.24 1.4 1.8 2.5 3.65-3.16 1.03-5.95 1-6.25 1a8.4 8.4 0 0 1 3.75-4.65ZM4.3 12v-.3c.3.01 3.6.06 6.95-1.05.2.36.38.72.55 1.08l-.28.09C8.5 12.85 5.9 15.5 5.7 15.7A8.3 8.3 0 0 1 4.3 12Zm2.2 5.5c.16-.17 2.4-2.62 5.7-3.7.98 2.7 1.38 4.95 1.48 5.55a8.3 8.3 0 0 1-7.18-1.85Zm8.5 1.2c-.08-.5-.44-2.6-1.36-5.24 2.63-.42 4.94.27 5.22.36a8.3 8.3 0 0 1-3.86 4.88Z"/>',
  mail: '<path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  phone: '<path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.25-.25.6-.35.93-.25 1.03.34 2.14.53 3.27.53.5 0 .9.4.9.9V19.5c0 .5-.4.9-.9.9C10.6 20.4 3.6 13.4 3.6 4.2c0-.5.4-.9.9-.9H8c.5 0 .9.4.9.9 0 1.13.19 2.24.53 3.27.1.33 0 .68-.25.93l-2.6 2.5Z" fill="currentColor"/>',
  location: '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
  link: '<path d="M9 15 15 9" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M10.5 7.5 12 6a4 4 0 1 1 5.66 5.66L16 13.2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M13.5 16.5 12 18a4 4 0 1 1-5.66-5.66L8 10.8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
};

function iconSvg(name, filled = true) {
  const path = ICONS[name] || ICONS.link;
  return `<svg viewBox="0 0 24 24" ${filled ? 'fill="currentColor"' : ''}>${path}</svg>`;
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

async function loadData() {
  try {
    const res = await fetch('data/data.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Could not load data/data.json — is this being served over http(s)?', err);
    document.getElementById('app').innerHTML = `
      <div class="panel" style="text-align:center;">
        <p style="color:#f87171;">Couldn't load <code>data/data.json</code>.</p>
        <p style="color:var(--text-dim);font-size:13px;">
          If you opened this file directly (file://), browsers block local JSON fetches.
          Run a local server instead, e.g. <code>npx serve</code> or <code>python3 -m http.server</code>,
          then open the site over http://localhost.
        </p>
      </div>`;
    return null;
  }
}

function renderHome(data) {
  const p = data.profile || {};
  const photo = document.getElementById('profilePhoto');
  photo.src = p.photo || '';
  photo.alt = p.name ? `Photo of ${p.name}` : 'Profile photo';
  photo.onerror = () => { photo.style.display = 'none'; };

  document.getElementById('profileName').textContent = p.name || 'Your Name';
  document.getElementById('profileTitle').textContent = p.title || '';
  document.getElementById('profileTagline').textContent = p.tagline || '';
  document.getElementById('profileSubtext').textContent = p.subtext || '';

  const primary = document.getElementById('ctaPrimary');
  const secondary = document.getElementById('ctaSecondary');

  if (p.ctaPrimary) {
    primary.textContent = p.ctaPrimary.label || 'View My Work';
    primary.addEventListener('click', () => switchView(p.ctaPrimary.target || 'projects'));
  } else {
    primary.style.display = 'none';
  }

  if (p.ctaSecondary && p.ctaSecondary.href) {
    secondary.textContent = p.ctaSecondary.label || 'Download CV';
    secondary.href = p.ctaSecondary.href;
  } else {
    secondary.style.display = 'none';
  }
}

function renderProjects(data) {
  const grid = document.getElementById('projectGrid');
  const projects = Array.isArray(data.projects) ? data.projects : [];

  if (projects.length === 0) {
    grid.innerHTML = `<p class="empty-state">No projects added yet — add entries to the "projects" array in data/data.json.</p>`;
    return;
  }

  grid.innerHTML = '';
  projects.forEach((proj) => {
    const title = escapeHtml(proj.title || 'Untitled Project');
    const desc = escapeHtml(proj.description || '');
    const tags = Array.isArray(proj.tags) ? proj.tags : [];
    const link = proj.link || '#';
    const thumb = proj.thumbnail;

    const card = el(`
      <a class="project-card" href="${link}" target="_blank" rel="noopener noreferrer">
        <div class="project-thumb-wrap">
          ${thumb ? `<img loading="lazy" src="${thumb}" alt="${title} thumbnail">` : ''}
        </div>
        <div class="project-body">
          <h3 class="project-title">${title}</h3>
          ${desc ? `<p class="project-desc">${desc}</p>` : ''}
          ${tags.length ? `<div class="project-tags">${tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
          <span class="project-link">View Project</span>
        </div>
      </a>
    `);

    const img = card.querySelector('img');
    if (img) img.onerror = () => { img.style.display = 'none'; };

    grid.appendChild(card);
  });
}

function renderSkillBars(container, items, { nameKey = 'name', levelKey = 'level' } = {}) {
  container.innerHTML = '';
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = `<p class="empty-state">No entries yet.</p>`;
    return;
  }
  items.forEach((item) => {
    const level = Math.max(0, Math.min(100, Number(item[levelKey]) || 0));
    const row = el(`
      <div class="skill-row">
        <div class="skill-row-top">
          <span class="skill-name">${escapeHtml(item[nameKey])}${item.code ? ` <span style="color:var(--text-faint);font-family:var(--font-mono);font-size:11px;">(${escapeHtml(item.code)})</span>` : ''}</span>
          <span class="skill-pct">${level}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:0%" data-level="${level}"></div></div>
      </div>
    `);
    container.appendChild(row);
  });
}

function renderEntryList(container, items, primaryKey, secondaryKey, periodKey) {
  container.innerHTML = '';
  if (!Array.isArray(items) || items.length === 0) {
    container.innerHTML = `<p class="empty-state">No entries yet.</p>`;
    return;
  }
  items.forEach((item) => {
    const row = el(`
      <div class="entry-item">
        <p class="entry-title">${escapeHtml(item[primaryKey])}</p>
        ${item[secondaryKey] ? `<p class="entry-sub">${escapeHtml(item[secondaryKey])}</p>` : ''}
        ${item[periodKey] ? `<p class="entry-period">${escapeHtml(item[periodKey])}</p>` : ''}
      </div>
    `);
    container.appendChild(row);
  });
}

function renderExperience(data) {
  const container = document.getElementById('experienceGroups');
  const items = (data.about && Array.isArray(data.about.experience)) ? data.about.experience : [];
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = `<p class="empty-state">No experience entries yet — add items to about.experience in data/data.json.</p>`;
    return;
  }

  const groups = new Map();
  items.forEach((item) => {
    const cat = item.category || 'Other';
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(item);
  });

  groups.forEach((entries, category) => {
    const group = el(`
      <div class="experience-group">
        <p class="experience-group-title">${escapeHtml(category)}</p>
        <div class="experience-cards"></div>
      </div>
    `);
    const cardsWrap = group.querySelector('.experience-cards');
    entries.forEach((entry) => {
      cardsWrap.appendChild(el(`
        <div class="experience-card">
          <h4>${escapeHtml(entry.title)}</h4>
          ${entry.organization ? `<p class="experience-org">${escapeHtml(entry.organization)}</p>` : ''}
          ${entry.period ? `<p class="experience-period">${escapeHtml(entry.period)}</p>` : ''}
          ${entry.description ? `<p class="experience-desc">${escapeHtml(entry.description)}</p>` : ''}
        </div>
      `));
    });
    container.appendChild(group);
  });
}

function renderAbout(data) {
  const about = data.about || {};
  document.getElementById('aboutBio').textContent = about.bio || '';

  renderSkillBars(document.getElementById('skillList'), about.skills);
  renderSkillBars(document.getElementById('languageList'), about.languages);
  renderEntryList(document.getElementById('educationList'), about.education, 'degree', 'institution', 'period');
  renderEntryList(document.getElementById('certificationList'), about.trainings, 'name', 'issuer', 'year');
  renderExperience(data);

  [
    ['skillsCard', about.skills],
    ['languagesCard', about.languages],
    ['educationCard', about.education],
    ['trainingsCard', about.trainings],
  ].forEach(([id, arr]) => {
    const card = document.getElementById(id);
    if (!Array.isArray(arr) || arr.length === 0) card.style.display = 'none';
  });
}

function renderContact(data) {
  const contact = data.contact || {};
  const infoList = document.getElementById('contactInfoList');
  infoList.innerHTML = '';

  const rows = [
    { key: 'email', icon: 'mail', href: contact.email ? `mailto:${contact.email}` : null },
    { key: 'phone', icon: 'phone', href: contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, '')}` : null },
    { key: 'location', icon: 'location', href: null },
  ];

  rows.forEach(({ key, icon, href }) => {
    if (!contact[key]) return;
    const content = href ? `<a href="${href}">${escapeHtml(contact[key])}</a>` : escapeHtml(contact[key]);
    infoList.appendChild(el(`
      <li><span class="info-icon">${iconSvg(icon, false)}</span><span>${content}</span></li>
    `));
  });

  if (contact.availability) {
    infoList.appendChild(el(`
      <li><span class="info-icon">${iconSvg('link', false)}</span><span>${escapeHtml(contact.availability)}</span></li>
    `));
  }

  const socialRow = document.getElementById('socialRow');
  socialRow.innerHTML = '';
  const socials = Array.isArray(contact.socials) ? contact.socials : [];
  socials.forEach((s) => {
    socialRow.appendChild(el(`
      <a class="social-btn" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(s.platform || 'Social link')}">
        ${iconSvg((s.icon || '').toLowerCase())}
      </a>
    `));
  });

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      note.textContent = 'Please fill in every field before sending.';
      note.className = 'form-note error';
      return;
    }

    const to = contact.email || '';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    note.textContent = 'Opening your email client…';
    note.className = 'form-note success';
  });
}

function setActiveNav(target) {
  document.querySelectorAll('.nav-btn').forEach((b) => {
    const isActive = b.dataset.target === target;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function animateBars(scope) {
  scope.querySelectorAll('.bar-fill').forEach((bar) => {
    bar.style.width = bar.dataset.level + '%';
  });
}

// Kept for the CTA button, which still needs to jump to a section —
// now it smooth-scrolls to that section instead of swapping views.
function switchView(target) {
  const section = document.getElementById(target);
  if (!section) return;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${target}`);
}

function initNav() {
  const sections = ['home', 'projects', 'about', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchView(btn.dataset.target));
  });

  const animatedSections = new WeakSet();

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setActiveNav(entry.target.id);
      if (entry.target.id === 'about' && !animatedSections.has(entry.target)) {
        animatedSections.add(entry.target);
        requestAnimationFrame(() => animateBars(entry.target));
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach((section) => spy.observe(section));

  const initial = (location.hash || '').slice(1);
  const valid = ['home', 'projects', 'about', 'contact'].includes(initial) ? initial : 'home';

  requestAnimationFrame(() => {
    document.getElementById(valid).scrollIntoView({ behavior: 'auto', block: 'start' });
    setActiveNav(valid);
  });
}

(async function init() {
  const data = await loadData();
  if (!data) return;

  renderHome(data);
  renderProjects(data);
  renderAbout(data);
  renderContact(data);
  initNav();
})();
