import { getData, commit } from '../store.js';
import { notesBoxHtml } from '../notesBox.js';
import { escapeHtml } from '../utils.js';

export function renderCover(container, pages) {
  const data = getData();
  data.home = data.home || { why: '' };
  const home = data.home;
  const manifest = Object.entries(pages)
    .filter(([, p]) => p.dataKey)
    .map(([key, p]) => ({
      key,
      label: p.label,
      subsections: [...data[p.dataKey], ...(p.extraDataKey ? data[p.extraDataKey] : [])].map((s) => ({ id: s.id, label: s.title })),
    }));

  container.innerHTML = `
    <div class="page-title">Field Marketing at Mecka</div>

    <div class="card doc-card home-about" id="home-why">
      <h4 style="margin:0 0 4px;">Why I Built This</h4>
      <textarea class="notes-box" data-home="why" placeholder="What this site is for and why I made it.">${escapeHtml(home.why || '')}</textarea>
    </div>

    <div class="section-desc" style="margin: 24px 0 12px;">Jump to any page or section below.</div>
    <div class="cover-grid">
      ${manifest.map((p) => `
        <div class="card cover-card">
          <a class="cover-page-title" href="#/${p.key}">${escapeHtml(p.label)}</a>
          ${notesBoxHtml(p.key, { compact: true })}
          ${p.subsections.length ? `
            <ul class="cover-sublist">
              ${p.subsections.map((s) => `<li><a href="#/${p.key}?anchor=${encodeURIComponent(s.id)}">${escapeHtml(s.label)}</a></li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;

  // Saves as you type. The box grows to fit its text, so nothing hides behind a scrollbar.
  const why = container.querySelector('#home-why [data-home]');
  const fit = () => {
    if (!why.isConnected) return;
    why.style.height = 'auto';
    why.style.height = `${Math.max(110, why.scrollHeight + 2)}px`;
  };
  fit();
  requestAnimationFrame(fit);
  document.fonts?.ready.then(fit);
  window.addEventListener('resize', fit);
  container.querySelectorAll('[data-home]').forEach((el) => {
    el.addEventListener('input', () => { home[el.dataset.home] = el.value; commit(); fit(); });
  });
}
