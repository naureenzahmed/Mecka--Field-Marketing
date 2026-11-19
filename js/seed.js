import { seedTalentPipeline, TALENT_PIPELINE_NOTE } from './talentPipelineData.js';
import { NYC_EXTERNAL_EVENTS, SF_EXTERNAL_EVENTS, ASIA_EXTERNAL_EVENTS } from './eventImports.js';
import {
  EXTERNAL_EVENT_FIELDS, INTERNAL_EVENT_FIELDS, EXTERNAL_EVENT_FORMATS, NYC_INTERNAL_EVENTS, SF_INTERNAL_EVENTS,
  ASIA_EXTERNAL_EVENT_FIELDS, ASIA_INTERNAL_EVENT_FIELDS, ASIA_INTERNAL_EVENTS,
  eventFunnelMetrics, partnershipFunnelMetrics, NON_TECHNICAL, SCORECARD_FIELDS, SCORECARD_ROWS,
  SOCIAL_FIELDS, SOCIAL_PLAN, COMPANY_GOAL, ROADMAP_INITIATIVES, ROADMAP_TASKS, ROADMAP_MILESTONES, ROADMAP_OKRS,
} from './fieldMarketing.js';

// Home's "Why I Built This" text. Paragraphs follow the order of the tabs.
export const HOME_WHY = [
  'This gives you an overall, generalized idea of how I’m thinking about field marketing, and marketing as a whole, at Mecka, and what I would do in my first two months here.',
  'Lead Lists track every single lead and its source, so we can see what is bringing us better customers and invest more in those verticals.',
  'My first priority is External Conferences for customers: setting up a sales funnel that scales as Mecka goes to more and more conferences, so we reach a higher ROI.',
  'Events in New York, SF and Asia focus on recruitment in these locations, as well as finding new lead sources.',
  'Partnerships take advantage of borrowed trust from the large companies in the ecosystem. This will be necessary as we build up the Mecka brand, so we can skip the cringy part and go straight to being a well-perceived company in the research, physical AI and startup world.',
].join('\n\n');

// Default notes at the top of these pages (they fill any empty notes box, and stay editable).
const eventsNote = (place, market) => `We host events in ${place} to capture the ${market} market for sales, but more importantly to build a strong brand name so we can recruit the best talent.`;
export const DEFAULT_PAGE_NOTES = {
  documentation: 'This page holds all of the documentation: every link, drive, spreadsheet and piece of software, so we can keep track of everything.',
  leadLists: 'Lead Lists track every sales lead with its source and revenue, so we have a better idea of what is working for sales and what is not, and what to invest in.',
  eventsNyc: eventsNote('New York', 'New York'),
  eventsSf: eventsNote('San Francisco', 'San Francisco'),
  eventsAsia: eventsNote('Asia', 'Asian'),
  partnerships: 'Partnerships let us borrow credibility from established companies, so we can build a reputable name quickly and be associated with the top companies from day one.',
  socialPlan: 'Social & Content tracks what goes on our social media pages, so we cover and make the most of all our efforts in events and in marketing as a whole.',
};

// Same columns as the ElevenLabs Inbound Leads table, with "User Name" as "Lead Name".
const YES_NO_OPTIONS = ['', 'Yes', 'No'];

export const LEAD_FIELDS = [
  { key: 'company', label: 'Company' },
  { key: 'leadName', label: 'Lead Name' },
  { key: 'source', label: 'Source', type: 'select', options: ['', 'Event', 'Conference', 'Email', 'LinkedIn Ads', 'Google Ads', 'SEO/AEO', 'Reddit', 'Newsletter', 'Referral', 'Website', 'Other'] },
  // Links a lead to an event; the events pages count Leads and Meetings Booked from this.
  { key: 'sourceEvent', label: 'Source Event', list: 'event-names', width: 240 },
  { key: 'title', label: 'Title' },
  { key: 'stage', label: 'Stage', type: 'select', options: ['', 'New', 'Contacted', 'Demo Booked', 'Demo Completed', 'Negotiation', 'Won', 'Lost'] },
  { key: 'positiveAnswer', label: 'Positive Answer', type: 'select', options: YES_NO_OPTIONS },
  { key: 'demoBookedDate', label: 'Demo Booked Date', type: 'date' },
  { key: 'demoHappenedDate', label: 'Demo Happened Date', type: 'date' },
  { key: 'lostLead', label: 'Lost Lead', type: 'select', options: YES_NO_OPTIONS },
  { key: 'meetingWithAeDate', label: 'Meeting with AE date', type: 'date' },
  { key: 'estimatedQuantity', label: 'Estimated Quantity' },
  { key: 'estimatedRevenue', label: 'Estimated Revenue' },
  { key: 'note', label: 'Note' },
];

function sections(prefix, titles, fields) {
  return titles.map((title) => ({
    id: `${prefix}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
    title,
    fields,
    entries: [],
  }));
}

/* Retitles a section while keeping the id it was created with (ids come from the original title). */
function renameSection(pageSections, id, title) {
  pageSections.find((s) => s.id === id).title = title;
  return pageSections;
}

/* Fills an events page's External and Internal Events sections (each with its own columns). */
function withEvents(pageSections, external, internal = [], externalFields = EXTERNAL_EVENT_FIELDS, internalFields = INTERNAL_EVENT_FIELDS) {
  const blank = (fields) => Object.fromEntries(fields.filter((f) => f.type !== 'computed').map((f) => [f.key, '']));
  pageSections[0].fields = externalFields;
  pageSections[0].entries = external.filter((e) => !NON_TECHNICAL.events.includes(e.id)).map((e) => ({ ...blank(externalFields), ...e, format: EXTERNAL_EVENT_FORMATS[e.id] || '' }));
  pageSections[1].fields = internalFields;
  pageSections[1].entries = internal.map((e) => ({ ...blank(internalFields), ...e }));
  return pageSections;
}

function docList(id, title, titles) {
  return {
    id, title,
    entries: titles.map((t, i) => ({ id: `${id}-${i + 1}`, title: t, url: '', notes: '' })),
  };
}

const INSPIRATION = [
  { title: 'Long Journey Ventures', linkedin: 'https://www.linkedin.com/company/longjourney', x: 'https://x.com/LongJourneyVC', instagram: '' },
  { title: 'Gumloop', linkedin: '', x: 'https://x.com/gumloop', instagram: '' },
  { title: 'New York Startup Week', linkedin: '', x: '', instagram: '' },
  { title: 'Verci', linkedin: '', x: '', instagram: '' },
];

export function seedInspiration() {
  return {
    ...docList('docs-inspiration', 'Inspiration', INSPIRATION.map((i) => i.title)),
    socials: true,
    entries: INSPIRATION.map((i, n) => ({ id: `docs-inspiration-${n + 1}`, url: '', notes: '', ...i })),
  };
}

function seedDocs() {
  return [
    {
      id: 'docs-logins', title: 'Software Login',
      fields: [
        { key: 'name', label: 'Software Name' },
        { key: 'loginProcess', label: 'Login Process' },
        { key: 'adminAccess', label: 'Admin Access' },
        { key: 'useCases', label: 'Use Cases' },
      ],
      entries: [],
    },
    docList('docs-brand', 'Brand & Messaging', ['Brand Guidelines', 'Messaging Document', 'Pitch Deck', 'One Pager']),
    docList('docs-playbooks', 'Event Playbooks', ['Event Planning Checklist', 'Booth Setup Guide', 'Post-Event Follow-Up Sequence', 'Swag & Materials Inventory']),
    docList('docs-templates', 'Templates', ['Event Invite Email', 'Event Follow-Up Email', 'Event Landing Page']),
    docList('docs-attendee-lists', 'Attendee Lists', ['Event 1', 'Event 2', 'Event 3']),
    docList('docs-event-checklists', 'Event Checklists', ['Event 1', 'Event 2', 'Event 3']),
    seedInspiration(),
  ];
}

/* ---------- Weeks for the weekly-metric sections on the events pages ---------- */

function seedWeeks() {
  const today = new Date();
  const day = today.getDay();
  const diffToMonday = (day === 0 ? -6 : 1) - day;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);
  const weeks = [];
  for (let i = -2; i < 6; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i * 7);
    weeks.push({
      key: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      isCurrent: i === 0,
    });
  }
  return weeks;
}

/* Partnership Events companies per city. */
const PARTNERS = {
  nyc: ['Corgi', 'Verci', 'General Intelligence Company of New York', 'Ramp', 'Clay', 'Brex', 'Betaworks', 'Rho'],
  sf: ['Corgi', 'Circleback', 'Gumloop', 'Mintlify', 'Vercel', 'Discord', 'Rentahuman AI', 'PostHog', 'Solo Founders'],
};

/* Event Attendance (weekly metrics); NYC and SF each get their own copy. */
function seedEventsFunnel(prefix) {
  return [
    {
      id: `${prefix}-attendance`,
      title: 'Event Attendance',
      entities: [
        { name: 'Event 1', links: [] },
        { name: 'Event 2', links: [] },
        { name: 'Event 3', links: [] },
        { name: 'Event 4', links: [] },
      ],
      metrics: eventFunnelMetrics(),
    },
  ];
}

/* ---------- Partnerships page: one section per industry ---------- */

export const PARTNERSHIP_INDUSTRIES = [
  'Documentation Software', 'HR Software', 'Finance & Banking', 'Community',
  'Cybersecurity', 'Health Care', 'AI', 'Dev Tools', 'Sales Tools', 'Others',
];

// Industry for companies we could place; anything else starts in Unassigned.
const PARTNER_INDUSTRY = {
  Corgi: 'Others',
  Ramp: 'Finance & Banking',
  Brex: 'Finance & Banking',
  Rho: 'Finance & Banking',
  Clay: 'Sales Tools',
  Betaworks: 'Community',
  Discord: 'Community',
  'Solo Founders': 'Community',
  Vercel: 'Dev Tools',
  PostHog: 'Dev Tools',
  Gumloop: 'AI',
  Mintlify: 'Documentation Software',
  Circleback: 'Documentation Software',
};

// Industries used on the events pages that map onto a Partnerships section.
const INDUSTRY_ALIASES = { Pharmaceuticals: 'Pharmaceutical', Finance: 'Finance & Banking', Banking: 'Finance & Banking' };

// Further companies per industry (no city yet); skipped if the name is already on the page.
export const PARTNER_ADDITIONS = {
  'Documentation Software': ['Notion', 'Atlassian (Confluence)', 'Mintlify', 'GitBook', 'Grammarly / Superhuman (owns Coda)'],
  'HR Software': ['Rippling', 'Deel', 'Gusto', 'Lattice', 'Ashby'],
  'Finance & Banking': ['Stripe', 'Ramp', 'Brex', 'Plaid', 'Mercury', 'Revolut', 'Nubank', 'Monzo', 'Chime', 'Wise', 'JPMorgan Chase (kept for its large AI investment)'],
  Community: ['Discord', 'Reddit', 'Circle', 'Skool'],
  Cybersecurity: ['CrowdStrike', 'Cloudflare', 'Vanta', '1Password', 'Snyk'],
  'Health Care': ['Abridge', 'Hippocratic AI', 'Tempus AI', 'Oscar Health', 'Hinge Health', 'Dialogue'],
  AI: ['OpenAI', 'Anthropic', 'Cursor (SpaceX)', 'Gumloop'],
  'Dev Tools': ['Vercel', 'Supabase', 'Linear', 'Replit', 'Retool', 'PostHog', 'MongoDB'],
  'Sales Tools': ['Clay', 'Gong', 'Apollo.io', 'Attio', 'HubSpot'],
  Others: ['Harvey', 'Recursion', 'Novo Nordisk'],
};

/* Appends PARTNER_ADDITIONS to the matching industry sections, skipping names already anywhere on the page. */
export function addPartnerAdditions(sections) {
  const known = new Set(sections.flatMap((s) => (s.entities || []).map((e) => e.name.toLowerCase())));
  for (const [industry, names] of Object.entries(PARTNER_ADDITIONS)) {
    const section = sections.find((s) => s.title === industry);
    if (!section) continue;
    section.entities = section.entities || [];
    for (const name of names) {
      if (known.has(name.toLowerCase())) continue;
      section.entities.push({ name, city: '', links: [] });
      known.add(name.toLowerCase());
    }
  }
  return sections;
}

// Headquarters city per company (from public company profiles, Oct 2026). Companies not listed keep their city.
const SF = 'San Francisco, CA';
const NYC = 'New York, NY';
export const PARTNER_HQ = {
  'General Intelligence Company of New York': NYC,
  'Rentahuman AI': SF,
  Circleback: SF,
  Mintlify: SF,
  Notion: SF,
  'Atlassian (Confluence)': 'Sydney, Australia',
  'Grammarly / Superhuman (owns Coda)': SF,
  Rippling: SF,
  Deel: SF,
  Gusto: SF,
  Lattice: SF,
  Ashby: SF,
  Ramp: NYC,
  Brex: SF,
  Stripe: 'South San Francisco, CA and Dublin, Ireland',
  Plaid: SF,
  Mercury: SF,
  Rho: NYC,
  Revolut: 'London, UK',
  Nubank: 'São Paulo, Brazil',
  Monzo: 'London, UK',
  Chime: SF,
  Wise: 'London, UK',
  'JPMorgan Chase (kept for its large AI investment)': NYC,
  Betaworks: NYC,
  Discord: SF,
  Reddit: SF,
  Circle: NYC,
  Skool: 'Los Angeles, CA',
  'Isomorphic Labs (from Google DeepMind)': 'London, UK',
  Recursion: 'Salt Lake City, UT',
  Insitro: 'South San Francisco, CA',
  'Xaira Therapeutics': 'South San Francisco, CA',
  'Novo Nordisk': 'Bagsværd, Denmark',
  CrowdStrike: 'Austin, TX',
  Cloudflare: SF,
  Vanta: SF,
  '1Password': 'Toronto, Canada',
  Snyk: 'Boston, MA',
  Abridge: 'Pittsburgh, PA',
  'Hippocratic AI': 'Palo Alto, CA',
  'Tempus AI': 'Chicago, IL',
  'Oscar Health': NYC,
  'Hinge Health': SF,
  Dialogue: 'Montreal, Canada',
  Gumloop: SF,
  OpenAI: SF,
  Anthropic: SF,
  'Cursor (SpaceX)': SF,
  Vercel: SF,
  PostHog: SF,
  Supabase: SF,
  Linear: SF,
  Replit: 'Foster City, CA',
  Retool: SF,
  MongoDB: NYC,
  Clay: NYC,
  Gong: SF,
  'Apollo.io': SF,
  Attio: 'London, UK',
  HubSpot: 'Cambridge, MA',
  Corgi: SF,
  Lemonade: NYC,
  Coalition: SF,
  Vouch: SF,
  Root: 'Columbus, OH',
  'Next Insurance': 'Palo Alto, CA',
  Harvey: SF,
};

/* Sets each known company's city to its headquarters (only blank cities when onlyBlank). */
export function applyPartnerHQ(sections, { onlyBlank = false } = {}) {
  for (const section of sections) {
    for (const e of section.entities || []) {
      if (PARTNER_HQ[e.name] && (!onlyBlank || !e.city)) e.city = PARTNER_HQ[e.name];
    }
  }
  return sections;
}

export const PARTNERSHIP_UNASSIGNED_ID = 'partner-unassigned';
export const PARTNERSHIP_OTHERS_ID = 'partner-others';

// Industry labels for companies in Others.
export const OTHERS_INDUSTRY_LABELS = { Corgi: 'Insurance', Harvey: 'Law', Recursion: 'Pharmaceutical', 'Novo Nordisk': 'Pharmaceutical' };

// Sections that were dropped, and the companies from each that moved to Others (the rest were removed).
export const DROPPED_SECTIONS = { Insurance: ['Corgi'], Pharmaceutical: ['Recursion', 'Novo Nordisk'] };

// Companies listed in a second section as well.
const ALSO_IN = {};

/* Puts ALSO_IN companies into their extra sections and labels Others companies. */
export function applyPartnerPlacements(sections) {
  for (const [title, names] of Object.entries(ALSO_IN)) {
    const section = sections.find((s) => s.title === title);
    for (const name of names) {
      const source = sections.flatMap((s) => s.entities || []).find((e) => e.name === name);
      if (section && source && !section.entities.some((e) => e.name === name)) section.entities.push({ ...source, links: [] });
    }
  }
  const others = sections.find((s) => s.id === PARTNERSHIP_OTHERS_ID);
  (others?.entities || []).forEach((e) => { if (!e.industryLabel && OTHERS_INDUSTRY_LABELS[e.name]) e.industryLabel = OTHERS_INDUSTRY_LABELS[e.name]; });
  return sections;
}

export function partnershipMetrics() {
  return partnershipFunnelMetrics();
}

/* Sorts companies ({ name, city, links, industry? }) into one section per industry, plus Unassigned. */
export function partnershipSection(title) {
  return { id: `partner-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, title, entities: [], metrics: partnershipMetrics() };
}

export function buildPartnershipSections(companies) {
  const sections = [
    { id: PARTNERSHIP_UNASSIGNED_ID, title: 'Unassigned', entities: [], metrics: partnershipMetrics() },
    ...PARTNERSHIP_INDUSTRIES.map(partnershipSection),
  ];
  for (const company of companies) {
    const industry = INDUSTRY_ALIASES[company.industry] || company.industry || PARTNER_INDUSTRY[company.name];
    const section = sections.find((s) => s.title === industry) || sections[0];
    const { industry: _unused, ...entity } = company;
    section.entities.push(entity);
  }
  return sections;
}

/* Merges per-city company lists ({ NYC: [...], SF: [...] }) so a company in both cities appears once. */
export function mergeCityCompanies(byCity) {
  const merged = [];
  for (const [city, companies] of Object.entries(byCity)) {
    for (const c of companies) {
      const existing = merged.find((m) => m.name === c.name);
      if (existing) {
        existing.city = `${existing.city}, ${city}`;
        existing.links = [...(existing.links || []), ...(c.links || [])];
        existing.industry = existing.industry || c.industry;
      } else {
        merged.push({ ...c, city, links: c.links || [] });
      }
    }
  }
  return merged;
}

/* Partnerships (partnershipsVersion 8): companies whose borrowed trust helps the Mecka brand, by group.
   City is the headquarters (public profiles, Nov 2026); blank where it could not be confirmed. */
export const PARTNER_GROUPS = [
  ['Big Tech', [
    ['Meta', 'Menlo Park, CA'], ['Apple', 'Cupertino, CA'], ['Amazon', 'Seattle, WA'], ['Netflix', 'Los Gatos, CA'],
    ['Google', 'Mountain View, CA'], ['Microsoft', 'Redmond, WA'],
  ]],
  ['Compute & Chips', [
    ['NVIDIA', 'Santa Clara, CA'], ['AMD', 'Santa Clara, CA'],
  ]],
  ['AI Research Labs', [
    ['Google DeepMind', 'London, UK'], ['World Labs', SF], ['AMI Labs', 'Paris, France'],
    ['Thinking Machines Lab', SF], ['Mila', 'Montreal, Canada'],
  ]],
  ['Robotics Startups', [
    ['Antioch', NYC], ['Normal Factory', ''], ['Physical Intelligence', SF], ['Skild AI', 'Pittsburgh, PA'],
    ['Figure AI', 'San Jose, CA'], ['1X Technologies', 'Palo Alto, CA'], ['Apptronik', 'Austin, TX'],
    ['Dyna Robotics', 'Redwood City, CA'], ['The Bot Company', SF],
  ]],
  ['Robotics', [
    ['Pudu Robotics', 'Shenzhen, China'], ['Boston Dynamics', 'Waltham, MA'], ['Agility Robotics', 'Salem, OR'],
    ['Unitree Robotics', 'Hangzhou, China'], ['UBTech Robotics', 'Shenzhen, China'], ['AgiBot', 'Shanghai, China'],
    ['Universal Robots', 'Odense, Denmark'], ['ABB Robotics', 'Zürich, Switzerland'], ['FANUC', 'Oshino, Japan'],
  ]],
  ['Automotive', [
    ['Tesla', 'Austin, TX'], ['Rivian', 'Irvine, CA'], ['Waymo', 'Mountain View, CA'], ['Zoox', 'Foster City, CA'],
    ['Toyota Research Institute', 'Los Altos, CA'], ['Hyundai Motor Group (owns Boston Dynamics)', 'Seoul, South Korea'],
    ['BYD', 'Shenzhen, China'],
  ]],
  ['Space', [
    ['SpaceX', 'Starbase, TX'], ['Blue Origin', 'Kent, WA'], ['Rocket Lab', 'Long Beach, CA'],
    ['Relativity Space', 'Long Beach, CA'], ['Varda Space Industries', 'El Segundo, CA'], ['Axiom Space', 'Houston, TX'],
  ]],
  ['Manufacturing & Factories', [
    ['Foxconn', 'New Taipei, Taiwan'], ['Siemens', 'Munich, Germany'], ['Hadrian', 'Torrance, CA'],
    ['Machina Labs', 'Los Angeles, CA'], ['Bright Machines', 'Burlingame, CA'], ['Formic', 'Bolingbrook, IL'],
    ['Mind Robotics (Rivian spinout)', ''],
  ]],
  ['AI & Dev Tools Startups', [
    ['21st.dev', SF], ['turbopuffer', ''], ['General Intelligence Company', NYC],
  ]],
  ['Community', [
    ['Betaworks', NYC], ['Discord', SF], ['Solo Founders', SF], ['Reddit', SF], ['Circle', NYC], ['Skool', 'Los Angeles, CA'],
  ]],
];

// Notes shown under a group's title.
const PARTNER_GROUP_NOTES = {
  Community: 'For recruitment: these communities help us reach engineers, researchers and builders to hire, rather than customers.',
};

function seedPartnerships() {
  return [
    { id: PARTNERSHIP_UNASSIGNED_ID, title: 'Unassigned', entities: [], metrics: partnershipMetrics() },
    ...PARTNER_GROUPS.map(([title, companies]) => ({
      ...partnershipSection(title),
      ...(PARTNER_GROUP_NOTES[title] ? { note: PARTNER_GROUP_NOTES[title] } : {}),
      entities: companies.map(([name, city]) => ({ name, city, links: [] })),
    })),
  ];
}

/* ---------- Roadmap (opened from the header target) ---------- */

export const TEAMS = [
  { id: 'team-a', name: 'Conference A', color: '#6c8cff' },
  { id: 'team-b', name: 'Conference B', color: '#ef6f6c' },
  { id: 'team-c', name: 'Conference C', color: '#57c785' },
  { id: 'team-d', name: 'Conference D', color: '#f2994a' },
];

// Mecka team, dealt round-robin across the conferences.
const TEAM_NAMES = [
  'Andrew', 'Bo', 'Jing', 'Sydney', 'Sophia', 'Victor', 'Scott', 'Sasha', 'James', 'Harvey', 'Addison',
  'Mike', 'Shruthi', 'Devin', 'Matthew', 'Aiden', 'Joseph', 'Jack', 'Joon', 'Veerpartap', 'Richard',
];

export const PEOPLE = TEAM_NAMES.map((name, i) => ({
  id: `p${i + 1}`, name, role: '', teamId: TEAMS[i % TEAMS.length].id,
}));

// Shown in the notes box on External Conferences, the page with the scorecard estimates.
export const ESTIMATES_NOTE = 'All numbers are estimates and based on online information from blogs and substacks.';

// Companies taken off the Partnerships page.
export const REMOVED_PARTNERS = ['Anti Roch', 'Wiz (being acquired by Google)'];

export function seedData() {
  return {
    fieldMarketingVersion: 10,
    companyGoal: { ...COMPANY_GOAL },
    schemaVersions: { events: 3, conferences: 4, leads: 2 },
    peopleVersion: 1,
    teams: TEAMS,
    people: PEOPLE,
    initiatives: ROADMAP_INITIATIVES,
    milestones: ROADMAP_MILESTONES,
    okrs: ROADMAP_OKRS,
    tasks: ROADMAP_TASKS,
    slackWebhookUrl: '',
    weeks: seedWeeks(),
    docs: seedDocs(),
    docsVersion: 4,
    titlesVersion: 1,
    leadLists: renameSection(sections('leads', ['Conference Attendee Lists', 'Event RSVPs', 'Target Accounts'], LEAD_FIELDS), 'leads-target-accounts', 'Target Accounts with Interaction'),
    conferenceScorecard: [{ id: 'conf-scorecard', title: 'Conference Scorecard', fields: SCORECARD_FIELDS, entries: SCORECARD_ROWS }],
    externalConferences: [],
    socialPlan: [{ id: 'social-events', title: 'Event Social Plan', fields: SOCIAL_FIELDS, entries: SOCIAL_PLAN }],
    eventsImportVersion: 4,
    industryVersion: 1,
    eventsNyc: withEvents(sections('nyc', ['External Events', 'Internal Events'], EXTERNAL_EVENT_FIELDS), NYC_EXTERNAL_EVENTS, NYC_INTERNAL_EVENTS),
    eventsFunnelVersion: 7,
    eventsNycFunnel: seedEventsFunnel('nyc'),
    eventsSfFunnel: seedEventsFunnel('sf'),
    partnershipsVersion: 8,
    partnerships: seedPartnerships(),
    eventsSf: withEvents(sections('sf', ['External Events', 'Internal Events'], EXTERNAL_EVENT_FIELDS), SF_EXTERNAL_EVENTS, SF_INTERNAL_EVENTS),
    eventsAsia: withEvents(sections('asia', ['External Events', 'Internal Events'], ASIA_EXTERNAL_EVENT_FIELDS), ASIA_EXTERNAL_EVENTS, ASIA_INTERNAL_EVENTS, ASIA_EXTERNAL_EVENT_FIELDS, ASIA_INTERNAL_EVENT_FIELDS),
    eventsAsiaFunnel: seedEventsFunnel('asia'),
    talentPipeline: seedTalentPipeline(),
    home: { why: HOME_WHY },
    pageNotes: {
      documentation: DEFAULT_PAGE_NOTES.documentation,
      partnerships: DEFAULT_PAGE_NOTES.partnerships,
      leadLists: DEFAULT_PAGE_NOTES.leadLists,
      externalConferences: ESTIMATES_NOTE,
      eventsNyc: DEFAULT_PAGE_NOTES.eventsNyc,
      eventsSf: DEFAULT_PAGE_NOTES.eventsSf,
      eventsAsia: DEFAULT_PAGE_NOTES.eventsAsia,
      roadmap: '',
      socialPlan: DEFAULT_PAGE_NOTES.socialPlan,
      talentPipeline: TALENT_PIPELINE_NOTE,
    },
  };
}
