import { getData, commit } from './store.js';
import { LEAD_FIELDS } from './seed.js';
import { EXTERNAL_EVENT_FIELDS, ASIA_EXTERNAL_EVENT_FIELDS, EVENT_FORMATS, SOCIAL_FIELDS } from './fieldMarketing.js';
import { startNotesSync } from './notesBox.js';
import { renderCover } from './pages/cover.js';
import { renderDocumentation } from './pages/documentation.js';
import { renderTableSectionsPage } from './pages/tableSections.js';
import { renderExternalConferences } from './pages/externalConferences.js';
import { renderRoadmap } from './pages/roadmap.js';
import { renderPartnerships } from './pages/partnerships.js';
import { renderExport } from './pages/exportData.js';
import { renderTalentPipeline, TALENT_PIPELINE_TITLE } from './pages/talentPipeline.js';

const HOUSE_ICON = '<svg class="tab-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9.2 10 3.5l7 5.7"/><path d="M5 8v8.5h3.8v-4.6h2.4v4.6H15V8"/></svg>';
const FOLDER_ICON = '<svg class="tab-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M1.5 3.5A1.5 1.5 0 0 1 3 2h3.2c.4 0 .78.16 1.06.44L8.4 3.6H13A1.5 1.5 0 0 1 14.5 5.1V12.5A1.5 1.5 0 0 1 13 14H3a1.5 1.5 0 0 1-1.5-1.5v-9Z"/></svg>';

// Events pages split every section by event format.
const BY_FORMAT = { key: 'format', groups: EVENT_FORMATS };

// Every event and conference name, suggested in Lead Lists' Source Event column.
function eventNames() {
  const data = getData();
  const events = ['eventsNyc', 'eventsSf', 'eventsAsia'].flatMap((k) => data[k].flatMap((s) => s.entries.map((e) => e.eventName)));
  const conferences = data.conferenceScorecard.flatMap((s) => s.entries.map((e) => e.conference));
  return [...new Set([...events, ...conferences].filter(Boolean))];
}

const tablePage = (key, title, fields, rowLabel, extra = {}) => (c) => renderTableSectionsPage(c, key, { title, fields, rowLabel, ...extra });

const PAGES = {
  home: { label: 'Home', render: (c) => renderCover(c, PAGES) },
  documentation: { label: 'Documentation', dataKey: 'docs', render: renderDocumentation },
  leadLists: { label: 'Lead Lists', dataKey: 'leadLists', render: tablePage('leadLists', 'Lead Lists', LEAD_FIELDS, 'Add lead', { datalists: { 'event-names': eventNames } }) },
  externalConferences: { label: 'External Conferences', dataKey: 'conferenceScorecard', render: renderExternalConferences },
  eventsNyc: { label: 'Events NYC', dataKey: 'eventsNyc', extraDataKey: 'eventsNycFunnel', render: tablePage('eventsNyc', 'Events NYC', EXTERNAL_EVENT_FIELDS, 'Add event', { showEmptyTable: true, trackerKey: 'eventsNycFunnel', groupBy: BY_FORMAT }) },
  eventsSf: { label: 'Events SF', dataKey: 'eventsSf', extraDataKey: 'eventsSfFunnel', render: tablePage('eventsSf', 'Events SF', EXTERNAL_EVENT_FIELDS, 'Add event', { showEmptyTable: true, trackerKey: 'eventsSfFunnel', groupBy: BY_FORMAT }) },
  eventsAsia: { label: 'Events Asia', dataKey: 'eventsAsia', extraDataKey: 'eventsAsiaFunnel', render: tablePage('eventsAsia', 'Events Asia', ASIA_EXTERNAL_EVENT_FIELDS, 'Add event', { showEmptyTable: true, trackerKey: 'eventsAsiaFunnel', groupBy: BY_FORMAT }) },
  partnerships: { label: 'Partnerships', dataKey: 'partnerships', render: (c) => renderPartnerships(c, { title: 'Partnerships' }) },
  socialPlan: { label: 'Social & Content', dataKey: 'socialPlan', render: tablePage('socialPlan', 'Social & Content', SOCIAL_FIELDS, 'Add event', { showEmptyTable: true }) },
  talentPipeline: { label: TALENT_PIPELINE_TITLE, dataKey: 'talentPipeline', render: renderTalentPipeline },
  // Not in the nav: opened by clicking the target in the header.
  roadmap: { label: 'Roadmap', hidden: true, render: renderRoadmap },
  // Not in the nav: downloads this browser's data to become the first-visit default.
  export: { label: 'Export', hidden: true, render: renderExport },
};

function currentRoute() {
  const hash = location.hash.replace('#/', '').split('?')[0];
  return PAGES[hash] ? hash : 'home';
}

function currentAnchor() {
  const qIdx = location.hash.indexOf('?');
  if (qIdx === -1) return null;
  return new URLSearchParams(location.hash.slice(qIdx + 1)).get('anchor');
}

export function rerender() {
  const route = currentRoute();
  renderHeader(route);
  const page = document.getElementById('app-page');
  page.innerHTML = '';
  PAGES[route].render(page);

  const anchor = currentAnchor();
  if (anchor) {
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  } else {
    window.scrollTo(0, 0);
  }
}

function renderHeader(route) {
  const data = getData();
  const header = document.getElementById('app-header');
  const pct = data.companyGoal.target ? Math.round((data.companyGoal.current / data.companyGoal.target) * 100) : 0;

  // Top row: logo and the target. Below it, one folder tab per page; the open page's tab joins the page.
  header.innerHTML = `
    <div class="header-top">
      <a class="wordmark" href="#/home" title="Home"><img src="assets/mecka-logo.svg" alt="Mecka" /></a>
      <a class="header-goal ${route === 'roadmap' ? 'active' : ''}" id="header-goal" href="#/roadmap" title="Open roadmap">
        <div>
          <div class="goal-sub">${escapeAttr(data.companyGoal.title)}</div>
          <div class="goal-value">${data.companyGoal.current}${data.companyGoal.unit} <span class="goal-sub">/ ${data.companyGoal.target}${data.companyGoal.unit}</span></div>
        </div>
        <span class="pill">${pct}%</span>
      </a>
    </div>
    <nav class="folder-tabs" aria-label="Pages">
      ${Object.entries(PAGES).filter(([, p]) => !p.hidden).map(([key, p]) => `
        <a class="folder-tab ${key === route ? 'active' : ''}" href="#/${key}" ${key === route ? 'aria-current="page"' : ''}>${key === 'home' ? HOUSE_ICON : FOLDER_ICON}<span>${p.label}</span></a>
      `).join('')}
    </nav>
  `;
  header.querySelector('.folder-tab.active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

/* Edit the header target; used from the roadmap page. */
export function editCompanyGoal() {
  const data = getData();
  const title = prompt('Goal title', data.companyGoal.title);
  if (title === null) return;
  const current = Number(prompt('Current value', data.companyGoal.current));
  const target = Number(prompt('Target value', data.companyGoal.target));
  data.companyGoal.title = title;
  if (!Number.isNaN(current)) data.companyGoal.current = current;
  if (!Number.isNaN(target)) data.companyGoal.target = target;
  commit();
  rerender();
}

function escapeAttr(s) {
  return String(s ?? '').replace(/"/g, '&quot;');
}

window.addEventListener('hashchange', rerender);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/home';
  startNotesSync();
  rerender();
});
