/* Field-marketing content for Mecka. Every conference and external event is about robotics, physical AI or
   egocentric data (see eventImports.js). Budgets, costs, meetings and scores
   below are planning estimates to adjust, not quotes. */

/* ---------- Events pages ---------- */

export const EVENT_FORMATS = ['Conference', 'Demo Day', 'Founder Dinner', 'Meetup / Talk', 'Hackathon / Build Night'];

const FORMAT_FIELD = { key: 'format', label: 'Format', type: 'select', options: ['', ...EVENT_FORMATS] };
// Mecka's own events are never conferences, so Internal Events has no Conference format (or group).
const INTERNAL_FORMAT_FIELD = { ...FORMAT_FIELD, options: FORMAT_FIELD.options.filter((f) => f !== 'Conference') };
const CO_HOST_FIELDS = [
  { key: 'coHost', label: 'Co-host', width: 150 },
  { key: 'coHostIncentive', label: 'Co-host Incentive', width: 300 },
  { key: 'poc', label: 'Potential POC', width: 200 },
];
// Leads and Meetings Booked are counted from Lead Lists rows whose Source Event matches the Event Name.
const FUNNEL_FIELDS = [
  { key: 'expectedAttendees', label: 'Number of Attendees Expected' },
  { key: 'currentAttendees', label: 'Current Number of Attendees' },
  { key: 'attended', label: 'Attended' },
  { key: 'leadsFromEvent', label: 'Leads (from Lead Lists)', type: 'computed' },
  { key: 'meetingsFromEvent', label: 'Meetings Booked (from Lead Lists)', type: 'computed' },
  { key: 'pipeline', label: 'Pipeline ($)' },
];

export const EXTERNAL_EVENT_FIELDS = [
  { key: 'eventName', label: 'Event Name', width: 260 },
  FORMAT_FIELD,
  { key: 'date', label: 'Date', width: 200 },
  { key: 'companyName', label: 'Company Name', width: 180 },
  { key: 'targetAudience', label: 'Target Audience', width: 420 },
  { key: 'lumaLink', label: 'Link to Luma' },
  ...FUNNEL_FIELDS,
  ...CO_HOST_FIELDS,
  { key: 'checklistLink', label: 'Event Checklist Link' },
];

export const INTERNAL_EVENT_FIELDS = [
  { key: 'eventName', label: 'Event Name', width: 230 },
  { key: 'pitch', label: 'One-line Pitch', width: 420 },
  INTERNAL_FORMAT_FIELD,
  { key: 'date', label: 'Date', width: 140 },
  ...CO_HOST_FIELDS,
  { key: 'budget', label: 'Budget (est.)', width: 200 },
  { key: 'goal', label: 'Goal', width: 260 },
  { key: 'targetAudience', label: 'Target Audience', width: 260 },
  { key: 'lumaLink', label: 'Link to Luma' },
  ...FUNNEL_FIELDS,
  { key: 'checklistLink', label: 'Event Checklist Link' },
];

// Format for each external event.
export const EXTERNAL_EVENT_FORMATS = {
  'nyc-rob-1': 'Meetup / Talk', 'nyc-rob-2': 'Meetup / Talk', 'nyc-rob-3': 'Meetup / Talk', 'nyc-rob-4': 'Conference',
  'nyc-rob-5': 'Conference', 'nyc-rob-6': 'Meetup / Talk',
  'sf-rob-1': 'Conference', 'sf-rob-2': 'Meetup / Talk', 'sf-rob-3': 'Conference', 'sf-rob-4': 'Conference',
  'sf-rob-5': 'Conference', 'sf-rob-6': 'Conference', 'sf-rob-7': 'Conference', 'sf-rob-8': 'Meetup / Talk',
  'sf-rob-9': 'Meetup / Talk',
};

// Rows from the Extend copy (developer and web conferences), replaced in fieldMarketingVersion 10.
export const EXTEND_ROWS = {
  events: /^(nyc|sf)-ext-\d+$/,
  scorecard: /^sc-\d+$/,
  social: ['soc-1', 'soc-2', 'soc-3'],
  tasks: ['rt-1', 'rt-2', 'rt-3', 'rt-4', 'rt-5', 'rt-6', 'rt-7', 'rt-11'],
  milestones: ['ms-github', 'ms-aie', 'ms-aidev'],
};

function idea(id, eventName, pitch, format, coHost, coHostIncentive, poc, budget, goal, targetAudience, companyName = '') {
  return {
    id, eventName, pitch, format, coHost, coHostIncentive, poc, budget, goal, targetAudience, companyName,
    date: '', lumaLink: '', expectedAttendees: '', currentAttendees: '', attended: '', pipeline: '', checklistLink: '',
  };
}

// Co-hosts are suggestions from the Partnerships page; POCs are the role to reach, not a named person.
export const SF_INTERNAL_EVENTS = [
  idea('sf-int-8', 'Board Games + Late-Night Build', 'Board games early, then heads-down building until late, with demos at the end.', 'Hackathon / Build Night',
    'Supabase', 'Developers building on their stack; credits as prizes', 'Developer relations lead', '$1,200 (venue, food, prizes)', '40 builders · 15 signups · 3 meetings', 'Developers and technical founders'),
  idea('sf-int-11', 'Design Your Own Mechanical Keyboard', 'Build-your-own keyboard night with a wall of unique keycaps to customize with.', 'Hackathon / Build Night',
    'Vercel', 'Developer brand moment; splits the mid-size budget', 'Developer relations lead', '$3,000, split with co-host (kits, keycaps)', '30 builders · 12 signups · 3 meetings', 'Developers and technical founders'),
];

export const NYC_INTERNAL_EVENTS = [
  idea('nyc-int-2', 'Raspberry Pi Night', 'Builders night: 3 hours building with Raspberry Pis (about $40 per unit on average), 1 hour of demos, 2 hours networking with berry pies.', 'Hackathon / Build Night',
    'Betaworks', 'Builder programming for their studio space', 'Programming / events lead', '$2,500 (40 Pis at ~$40, food, pies)', '40 builders · 15 signups · 4 meetings', 'Builders'),
];

// Internal event ids that were removed from the plan.
export const REMOVED_INTERNAL_EVENT_IDS = ['sf-int-6']; // Dinner at the Computer History Museum (Mountain View)

// Everything whose main audience isn't technical / software people (investors, enterprise buyers,
// general founders and operators) is out of the plan.
export const NON_TECHNICAL = {
  events: [
    'nyc-ext-4', 'nyc-ext-11', 'nyc-ext-12', 'sf-ext-1', 'sf-ext-2', 'sf-ext-3', 'sf-ext-8', 'sf-ext-11',
    'sf-int-1', 'sf-int-2', 'sf-int-3', 'sf-int-4', 'sf-int-5', 'sf-int-7', 'sf-int-9', 'sf-int-10',
    'nyc-int-1', 'nyc-int-3', 'nyc-int-4',
  ],
  scorecard: ['sc-5', 'sc-14'],
  social: ['soc-5', 'soc-6', 'soc-7'],
  tasks: ['rt-9', 'rt-10'],
  milestones: ['ms-yc'],
};

/* Weekly metrics for Event Attendance and Partnerships (replacing recruiting metrics). */
export function eventFunnelMetrics() {
  return [
    { id: 'rsvps', label: 'RSVPs', target: 100, values: {} },
    { id: 'attended', label: 'Attended', target: 60, values: {} },
    { id: 'signups', label: 'Product Signups', target: 20, values: {} },
    { id: 'meetings', label: 'Meetings Booked', target: 5, values: {} },
    { id: 'cpm', label: 'Cost per Meeting ($)', target: '< $300', values: {} },
  ];
}

export function partnershipFunnelMetrics() {
  return [
    { id: 'cohosted', label: 'Co-hosted Events', target: '1 per quarter', values: {} },
    { id: 'attendees', label: 'Attendees', target: 60, values: {} },
    { id: 'signups', label: 'Product Signups', target: 15, values: {} },
    { id: 'meetings', label: 'Meetings Booked', target: 4, values: {} },
  ];
}

/* ---------- External Conferences: scorecard ---------- */

export const SCORECARD_FIELDS = [
  { key: 'conference', label: 'Conference', width: 230 },
  { key: 'city', label: 'City' },
  { key: 'dates', label: 'Dates', width: 170 },
  { key: 'expectedAttendees', label: 'Expected Attendees' },
  { key: 'estDevelopers', label: 'Est. Developers' },
  { key: 'icpFit', label: 'ICP Fit (1–5)', type: 'select', options: ['', '1', '2', '3', '4', '5'] },
  { key: 'estCost', label: 'Est. Cost ($)' },
  { key: 'expectedMeetings', label: 'Expected Meetings' },
  { key: 'costPerMeeting', label: 'Cost per Meeting', type: 'computed' },
  { key: 'sponsorshipTier', label: 'Sponsorship Tier', type: 'select', options: ['', 'Attend only', 'Side event', 'Booth', 'Booth + talk', 'Speaking'] },
  { key: 'cfpDeadline', label: 'Speaking CFP Deadline' },
  { key: 'score', label: 'Score (/10)', type: 'computed' },
  { key: 'decision', label: 'Decision', type: 'select', options: ['', 'Go', 'Maybe', 'No'] },
];

export const SCORECARD_NOTE = 'EXAMPLE Score (/10) = ICP fit (1–5) + cost per meeting (≤ $300: 3, ≤ $600: 2, ≤ $1,200: 1) + reach (≥ 2,000 developers: 2, ≥ 700: 1). ICP fit, cost and meetings are planning estimates.';

function scored(id, conference, city, dates, expectedAttendees, estDevelopers, icpFit, estCost, expectedMeetings, sponsorshipTier, decision) {
  return { id, conference, city, dates, expectedAttendees, estDevelopers, icpFit, estCost, expectedMeetings, sponsorshipTier, cfpDeadline: '', decision };
}

// Robotics and physical AI conferences in the SF Bay Area and NYC (same list as the events pages).
// Attendees are from the organizers where published; ICP fit, cost, meetings, tier and decision are planning estimates.
export const SCORECARD_ROWS = [
  scored('sc-r1', 'Humanoids Summit Silicon Valley 2026', 'San Mateo', 'Dec 1–2', '', '', '5', '15,000', '30', 'Booth', 'Go'),
  scored('sc-r2', 'IEEE Humanoids 2026', 'Santa Clara', 'Dec 6–9', '1,200+', '', '5', '6,000', '15', 'Attend only', 'Go'),
  scored('sc-r3', 'HRI 2027', 'Santa Clara', 'Mar 8–12, 2027', '', '', '3', '3,000', '5', 'Attend only', 'Maybe'),
  scored('sc-r4', 'NVIDIA GTC 2027', 'San Jose', 'Mar 15–18, 2027', '', '', '5', '25,000', '40', 'Booth + talk', 'Go'),
  scored('sc-r5', 'AUTONOMOUS 2027', 'San Francisco', 'Apr 13–14, 2027', '1,500+', '', '5', '12,000', '30', 'Booth', 'Go'),
  scored('sc-r6', 'Physical AI Expo North America 2027', 'San Jose', 'Jun 16–17, 2027 (confirm)', '', '', '4', '8,000', '12', 'Attend only', 'Maybe'),
  scored('sc-r7', 'Construction Robotics Summit 2027', 'New York', 'Apr 14, 2027 (confirm)', '', '', '3', '2,000', '5', 'Attend only', 'Maybe'),
  scored('sc-r8', 'Agent Conference 2027 (Physical AI track)', 'New York', 'May 17–18, 2027', '', '', '2', '3,000', '4', 'Attend only', 'No'),
];

// Owns all content: social teasers, swag, live clips and recap posts, at every event.
export const HEAD_OF_CONTENT = 'Bo';

/* ---------- Social & Content ---------- */

export const SOCIAL_FIELDS = [
  { key: 'eventName', label: 'Event', width: 240 },
  { key: 'date', label: 'Date', width: 150 },
  // The week before the event, when promo posts go out.
  { key: 'postingPeriod', label: 'Posting Period', width: 170 },
  { key: 'channels', label: 'Channels', width: 170 },
  { key: 'teaser', label: 'Pre-Event Teaser', width: 380 },
  // A window one to two weeks before the event.
  { key: 'teaserDate', label: 'Teaser Date', width: 220 },
  { key: 'lumaPage', label: 'Luma Page' },
  { key: 'contentToFilm', label: 'Content to Film', width: 340 },
  { key: 'whoPosts', label: 'Who Posts', width: 200 },
  { key: 'postLinks', label: 'Post Links' },
  { key: 'impressions', label: 'Impressions' },
  { key: 'follows', label: 'Follows' },
  { key: 'signupsFromPosts', label: 'Signups from Posts' },
];

function social(id, eventName, date, postingPeriod, channels, teaser, teaserDate, contentToFilm, whoPosts) {
  return { id, eventName, date, postingPeriod, channels, teaser, teaserDate, lumaPage: '', contentToFilm, whoPosts, postLinks: '', impressions: '', follows: '', signupsFromPosts: '' };
}

export const SOCIAL_PLAN = [
  social('soc-r1', 'Humanoids Summit Silicon Valley 2026', 'Dec 1–2', 'Nov 24 – Nov 30', 'X, LinkedIn', 'Put on a Mecka capture rig at our booth and see your own hand-pose data in under a minute.', 'Nov 17 – Nov 24',
    'Capture-rig try-ons; human video next to the robot replay; founder dinner moments', 'Shruthi (Mecka), Andrew (personal)'),
  social('soc-r2', 'NVIDIA GTC 2027', 'Mar 15–18, 2027', 'Mar 8 – Mar 14', 'X, LinkedIn, YouTube', 'Talk announcement: how egocentric human data trains robots, plus live EgoVerse demos.', 'Mar 1 – Mar 8',
    'Talk recording; booth demo clips; partner shout-outs', 'Devin (Mecka), Harvey (speaker)'),
  social('soc-r3', 'AUTONOMOUS 2027', 'Apr 13–14, 2027', 'Apr 6 – Apr 12', 'X, LinkedIn', 'SF robotics builders: record a task with us at Pier 27, then watch a robot learn it.', 'Mar 30 – Apr 6',
    'Booth demos; happy hour photos; one customer quote on video', 'Addison (Mecka), Jing (personal)'),
  social('soc-4', 'Raspberry Pi Night (NYC)', '', 'Week before the event', 'X, Instagram, LinkedIn', 'Three hours, forty Raspberry Pis, one hour of demos. And pie.', '1–2 weeks before the event',
    'Build timelapse; demo highlight reel; co-host shout-out with Betaworks', 'Sydney (Mecka), co-host account'),
];

/* ---------- Roadmap (opened from the header target) ---------- */

export const COMPANY_GOAL = { title: 'Meetings from events', current: 0, target: 150, unit: '', targetDate: '2026-12-31' };

export const ROADMAP_INITIATIVES = [
  { id: 'init-1', name: 'Conferences', teamId: 'team-a', goalLabel: 'Meetings booked at conferences', current: 0, target: 95, unit: '' },
  { id: 'init-2', name: 'Startup Community Events', teamId: 'team-b', goalLabel: 'Signups from community events', current: 0, target: 150, unit: '' },
  { id: 'init-3', name: 'Social & Content', teamId: 'team-c', goalLabel: 'Event post impressions (k)', current: 0, target: 100, unit: 'k' },
  { id: 'init-4', name: 'Partnerships & Co-hosting', teamId: 'team-d', goalLabel: 'Co-hosted events', current: 0, target: 6, unit: '' },
];

function task(id, title, sectionId, teamId, assigneeId, startDate, endDate, status, description, impact, blockedBy = []) {
  return {
    id, title, description, impact, status, assigneeId, startDate, endDate, designDeadline: '', sectionId, teamId,
    client: '', createdBy: 'You', blockedBy, subtasks: [], comments: [],
  };
}

export const ROADMAP_TASKS = [
  task('rt-1', 'Humanoids Summit: booth kit + capture rigs', 'init-1', 'team-a', 'p1', '2026-11-16', '2026-11-25', 'In progress',
    'Confirm the booth vendor, ship the kit and two capture rigs by Nov 25, order power.', 'Booth is ready on build day; nothing figured out on site.'),
  task('rt-2', 'Humanoids Summit: pre-book 30 meetings', 'init-1', 'team-a', 'p5', '2026-11-16', '2026-11-30', 'In progress',
    'Outreach to Target Accounts with Interaction attending the Humanoids Summit.', 'Most conference meetings are booked before the doors open.'),
  task('rt-3', 'Humanoids Summit Silicon Valley (Dec 1–2)', 'init-1', 'team-a', 'p9', '2026-12-01', '2026-12-02', 'Committed',
    'Run the booth, capture-rig demos, meeting block and founder dinner.', 'First conference of the plan; sets the cost-per-meeting baseline.', ['rt-1', 'rt-2']),
  task('rt-4', 'NVIDIA GTC: talk submission + booth plan', 'init-1', 'team-b', 'p2', '2026-12-01', '2027-01-15', 'Ready',
    'Submit the egocentric-data talk, choose a booth or a partner-pavilion spot, and lock the budget.', 'Highest ICP fit conference; NVIDIA is an investor.'),
  task('rt-5', 'NVIDIA GTC 2027 (Mar 15–18)', 'init-1', 'team-b', 'p6', '2027-03-15', '2027-03-18', 'Backlog',
    'Booth, talk (if accepted), meetings and an evening event.', '40 meetings target.', ['rt-4']),
  task('rt-6', 'AUTONOMOUS: booth + side event', 'init-1', 'team-c', 'p3', '2027-02-15', '2027-04-01', 'Backlog',
    'Book the booth and an SF happy hour near Pier 27.', 'Robotics-only audience in San Francisco.'),
  task('rt-7', 'AUTONOMOUS 2027 (Apr 13–14)', 'init-1', 'team-c', 'p7', '2027-04-13', '2027-04-14', 'Backlog',
    'Booth, meetings, side event.', '30 meetings target.', ['rt-6']),
  task('rt-8', 'Raspberry Pi Night with Betaworks', 'init-2', 'team-b', 'p10', '2026-10-27', '2026-11-14', 'Ready',
    'Lock date and venue with Betaworks, order 40 Pis, open Luma.', 'Builder audience in NYC; strong content moment.'),
  task('rt-11', 'Teaser + recap posts for the Humanoids Summit', 'init-3', 'team-c', 'p2', '2026-11-17', '2026-12-05', 'In progress',
    'Teaser Nov 17–24, live clips during, recap Dec 4.', 'Turns one booth into reach beyond the hall.'),
  task('rt-12', 'Event recap template + posting cadence', 'init-3', 'team-c', 'p2', '2026-10-20', '2026-10-30', 'Ready',
    'Reusable recap post, clip checklist, and who posts what.', 'Every event gets posted the same way.'),
  task('rt-13', 'Pitch top 10 co-hosts', 'init-4', 'team-d', 'p4', '2026-10-20', '2026-11-06', 'In progress',
    'Use Partnerships and the Co-host columns on the events pages.', 'Co-hosting halves cost and doubles reach.'),
  task('rt-14', 'Sign 2 co-hosted events for November', 'init-4', 'team-d', 'p8', '2026-11-01', '2026-11-15', 'Backlog',
    'Confirm co-host, date, budget split and POC for two events.', 'First co-hosted events on the calendar.', ['rt-13']),
];

export const ROADMAP_MILESTONES = [
  { id: 'ms-humanoids', date: '2026-12-01', title: 'Humanoids Summit Silicon Valley', teamId: 'team-a' },
  { id: 'ms-gtc', date: '2027-03-15', title: 'NVIDIA GTC', teamId: 'team-b' },
  { id: 'ms-autonomous', date: '2027-04-13', title: 'AUTONOMOUS', teamId: 'team-c' },
];

const kr = (id, title, target, deadline, assigneeIds) => ({ id, title, current: 0, target, deadline, assigneeIds });

export const ROADMAP_OKRS = [
  {
    id: 'okr-company', objective: 'Make every startup know and think of Mecka', teamId: null,
    keyResults: [
      kr('kr-co-1', 'Meetings booked from events', 150, '2026-12-31', []),
      kr('kr-co-2', 'Product signups from events', 1000, '2026-12-31', []),
    ],
  },
  {
    id: 'okr-1', objective: 'Run conferences that pay back', teamId: 'team-a',
    keyResults: [kr('kr-1-1', 'Meetings booked at the three planned conferences', 95, '2027-04-14', ['p1', 'p5'])],
  },
  {
    id: 'okr-2', objective: 'Activate the startup community in NYC and SF', teamId: 'team-b',
    keyResults: [kr('kr-2-1', 'Community events hosted', 8, '2026-12-31', ['p2', 'p10']), kr('kr-2-2', 'Founders attending', 300, '2026-12-31', ['p14'])],
  },
  {
    id: 'okr-3', objective: 'Make every event visible online', teamId: 'team-c',
    keyResults: [kr('kr-3-1', 'Event post impressions (thousands)', 100, '2026-12-31', ['p2'])],
  },
  {
    id: 'okr-4', objective: 'Co-host with partners', teamId: 'team-d',
    keyResults: [kr('kr-4-1', 'Co-hosted events', 6, '2026-12-31', ['p4', 'p8'])],
  },
];
