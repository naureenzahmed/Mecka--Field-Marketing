/* Talent Pipeline: copied from the Mecka Office Manager site's "Special Project: Talent Pipeline" page.
   Section ids keep their rec- prefix so the page's column styles still apply. */

// Columns of the Recruitment Tech Stack table.
export const TECH_STACK_FIELDS = [
  { key: 'software', label: 'Software' },
  { key: 'description', label: 'Description', multiline: true },
  { key: 'cost', label: 'Cost' },
];

const TECH_STACK = [
  ['Grokbot', 'Grokbot will reach ideal candidates and automate messages to them. It covers LinkedIn, where sales and ops people spend most of their time, and X, where engineers and technical people are most active. It can also scan new publications and research to find the right people in highly technical fields.', '$30/mo for SuperGrok. Grok Business is $30/user/mo, SuperGrok Lite is $10/mo, SuperGrok Heavy is $300/mo and Enterprise is custom.'],
  ['Apollo', 'Apollo makes it quick to pull email addresses.', '$49–$119/user/mo billed yearly (Basic is $49, Professional is $79 and Organization is $119), or about $59–$149 billed monthly. There is a free plan. Credits, add-ons and overages can raise the total a lot.'],
  ['Juicebox', 'Juicebox searches LinkedIn, GitHub, Google Scholar and 30 more data sources, so we can reach business-oriented profiles just as easily as deep science ones.', 'About $99–$179/seat/mo billed yearly (Starter is $99, or $119 billed monthly, and Growth is $179). The Agents add-on is $199/agent/mo. Searches are unlimited, but contact and export credits are capped at 500/mo on Starter and 1,500/mo on Growth. Prices changed in July 2026.'],
  ['Claude', 'Claude skills can connect all of these tools and automate the handoff of information between them. They can also send each interviewer a short summary and the right interview questions just before the meeting. Gumloop is an alternative.', '$20–$25/user/mo for most people (Pro is $20 and Team Standard is $25). Max 5x is $100/mo, Max 20x is $200/mo and Team Premium is $125/user/mo.'],
  ['Ashby', 'Ashby is an all-in-one recruiting platform: applicant tracking (ATS), sourcing, CRM, scheduling and hiring analytics. Once the ideal process is set up, email, scheduling and communication tracking are all automated.', 'The Foundations plan (up to 100 employees) is about $400/mo, or about $360/mo billed yearly. The Plus and Enterprise plans for larger teams are custom quotes. Add-ons such as AI Notetaker and Advanced Scheduling cost extra.'],
];

// One-line prices for the Tech Stack.
export const TECH_STACK_COSTS = {"Grokbot": "Grokbot: $30/mo", "Apollo": "Apollo: $49–119/user/mo", "Juicebox": "Juicebox: $99–179/seat/mo", "Claude": "Claude: $20–25/user/mo", "Ashby": "Ashby: about $400/mo"};

export function techStackRows() {
  return TECH_STACK.map(([software, description, cost], i) => ({ id: `tech-${i + 1}`, software, description, cost: TECH_STACK_COSTS[software] || cost }));
}

// Columns of the Recruitment School Partnerships table.
export const SCHOOL_FIELDS = [
  { key: 'school', label: 'School', multiline: true },
  { key: 'city', label: 'City' },
  { key: 'strengths', label: 'Strengths', multiline: true },
  { key: 'labs', label: 'Notable Labs', multiline: true },
  { key: 'orgs', label: 'Notable Organizations', multiline: true },
];

// Top schools for robotics, robot learning and computer vision. The first five are EgoVerse research partners.
const TOP_SCHOOLS = [
  ['Georgia Tech', 'Atlanta, GA', 'Robot learning, embodied AI, EgoVerse research partner', 'Institute for Robotics and Intelligent Machines (IRIM); Mecka research adviser Animesh Garg teaches here', 'HackGT, RoboJackets'],
  ['Stanford University', 'Stanford, CA', 'Robot learning, computer vision, embodied AI, EgoVerse research partner', 'Stanford AI Lab (SAIL), Stanford Vision and Learning Lab, Stanford HAI', 'Stanford Robotics Club, TreeHacks'],
  ['MIT', 'Cambridge, MA', 'Robotics, manipulation, computer vision, EgoVerse research partner', 'CSAIL, MIT Media Lab', 'MIT Robotics Team, HackMIT'],
  ['UC San Diego', 'San Diego, CA', 'Robotics, computer vision, EgoVerse research partner', 'Contextual Robotics Institute', 'SD Hacks'],
  ['ETH Zürich', 'Zürich, Switzerland', 'Legged robots, robot learning, EgoVerse research partner', 'Robotic Systems Lab, ETH AI Center', 'HackZurich (held in Zürich)'],
  ['Carnegie Mellon University', 'Pittsburgh, PA', 'Robotics, machine learning, computer vision', 'Robotics Institute, Machine Learning Department', 'ScottyLabs (runs TartanHacks)'],
  ['UC Berkeley', 'Berkeley, CA', 'Robot learning, reinforcement learning, deep learning', 'Berkeley AI Research (BAIR)', 'Machine Learning at Berkeley, Cal Hacks'],
  ['Columbia University', 'New York, NY', 'Robotics and computer vision, close to the NYC office', 'Columbia Engineering robotics labs, including the ROAM Lab and Creative Machines Lab', 'Columbia DevFest'],
  ['New York University', 'New York, NY', 'Robot learning, deep learning, close to the NYC office', 'CILVR Lab, NYU Center for Data Science', 'HackNYU'],
  ['University of Toronto', 'Toronto, ON', 'Deep learning, computer vision, robotics; Mecka started in Toronto', 'Vector Institute, UofT Robotics Institute', 'University of Toronto Machine Intelligence Student Team (UTMIST)'],
  ['University of Waterloo', 'Waterloo, ON', 'Mechatronics, machine learning, systems', 'Waterloo.AI (Waterloo Artificial Intelligence Institute)', 'Hack the North, Waterloo Robotics Team (WATonomous)'],
];

export function schoolRows() {
  return TOP_SCHOOLS.map(([school, city, strengths, labs, orgs], i) => ({ id: `school-${i + 1}`, school, city, strengths, labs, orgs }));
}

// Columns of the Recruitment Event Attendance conferences table.
export const CONFERENCE_FIELDS = [
  { key: 'event', label: 'Event', multiline: true },
  { key: 'category', label: 'Category', multiline: true },
  { key: 'region', label: 'Region' },
  { key: 'dates', label: 'Dates' },
  { key: 'location', label: 'Location', multiline: true },
  { key: 'details', label: 'Details', multiline: true },
  { key: 'link', label: 'Link', type: 'url' },
];

const CONFERENCES = [
  ['Training Data podcast (Sequoia)', 'Mecka', 'United States', 'Oct 20, 2026', 'Online (YouTube and podcast)', 'Josh Gao, Mecka’s CEO and co-founder, talked with Sequoia’s Sonya Huang and Pat Grady about how Mecka sensorizes people to collect robot training data.', 'https://sequoiacap.com/podcast/inside-the-robot-data-factory-how-mecka-sensorizes-humans-to-train-robots'],
  ['EgoVerse research release', 'Mecka', '', 'Apr 2026', 'Online (arXiv 2604.07607)', 'Human-to-robot transfer study with Georgia Tech, Stanford, UC San Diego, ETH Zürich, MIT and Meta. Good material for talks and recruiting at research conferences.', 'https://arxiv.org/abs/2604.07607'],
  ['CoRL 2026', 'Robot learning research', 'United States', 'Nov 9–12, 2026', 'JW Marriott, Austin, TX', 'The Conference on Robot Learning, the closest research conference to what Mecka does.', 'https://2026.corl.org/'],
  ['Humanoids Summit Silicon Valley 2026', 'Robotics industry', 'United States', 'Dec 1–2, 2026', 'San Mateo County Event Center, San Mateo, CA', 'Industry event for teams building humanoid robots, a core buyer group for Mecka’s data.', 'https://humanoidssummit.com/silicon-valley-2026'],
  ['NeurIPS 2026 (Atlanta)', 'Deep learning and AI research', 'United States', 'Dec 8–13, 2026', 'Atlanta, GA', 'NeurIPS is split across three cities this year: Sydney (Dec 6–12), Atlanta and Paris. Atlanta is the North American site, and Georgia Tech is a research partner.', 'https://neurips.cc/Conferences/2026'],
  ['NeurIPS 2026 (Paris)', 'Deep learning and AI research', 'Europe', 'Dec 9–13, 2026', 'Paris, France', 'The European site of NeurIPS this year.', 'https://neurips.cc/Conferences/2026'],
  ['NVIDIA GTC 2027', 'Robotics and physical AI', 'United States', 'Mar 15–18, 2027', 'San Jose McEnery Convention Center and venues across San Jose, CA', 'NVIDIA’s main conference, with a large physical AI and robotics track. NVIDIA invested in Mecka’s Series B.', 'https://www.nvidia.com/gtc/'],
  ['ICLR 2027', 'Deep learning and AI research', 'United States', 'Apr 26–30, 2027', 'Moscone Center, San Francisco, CA', 'One of the top three machine learning conferences.', 'https://iclr.cc/Conferences/2027'],
  ['Automate 2027', 'Robotics industry', 'United States', 'May 10–13, 2027', 'Las Vegas Convention Center, Las Vegas, NV', 'A3’s robotics and automation trade show, the largest in North America. Good for meeting enterprise buyers.', 'https://www.automateshow.com/'],
  ['ICRA 2027', 'Robotics research', 'Asia', 'May 24–28, 2027', 'COEX, Seoul, South Korea', 'The IEEE International Conference on Robotics and Automation, the largest robotics research conference.', 'https://2027.ieee-icra.org/'],
  ['CVPR 2027', 'Computer vision research', 'United States', 'Jun 20–24, 2027', 'Seattle, WA', 'The main computer vision conference. Hand-pose tracking and 3D reconstruction are core to Mecka’s data.', 'https://cvpr.thecvf.com/'],
  ['RSS 2027', 'Robotics research', 'Europe', 'Jul 6–11, 2027', 'Athens, Greece', 'Robotics: Science and Systems, a selective robotics research conference.', 'https://roboticsconference.org/'],
  ['Hannover Messe 2027', 'Robotics industry', 'Europe', 'Apr 5–8, 2027', 'Hannover, Germany', 'The main trade fair for industrial automation, a likely buyer base for enterprise robot deployments.', 'https://www.hannovermesse.de/'],
];

// Corrections layered on top of the rows above. None needed yet.
export const CONFERENCE_FIXES = {};

// Event Attendance is split into Mecka's past appearances and upcoming events.
export const CONFERENCE_GROUPS = [
  { key: 'past', label: 'Mecka’s Past Appearances' },
  { key: 'upcoming', label: 'Upcoming' },
];
const CONFERENCE_GROUP_OF = {
  'Training Data podcast (Sequoia)': 'past', 'EgoVerse research release': 'past',
};
export function conferenceGroupOf(event) {
  return CONFERENCE_GROUP_OF[event] || 'upcoming';
}

export function conferenceRows() {
  return CONFERENCES.map(([event, category, region, dates, location, details, link], i) => ({
    id: `conf-${i + 1}`, event, category, region, dates, location, details, link,
    ...(CONFERENCE_FIXES[event] || {}), group: conferenceGroupOf(event),
  }));
}

// Columns of the Recruitment Partnership Events companies table.
export const PARTNER_FIELDS = [
  { key: 'company', label: 'Company Name' },
  { key: 'event', label: 'Event' },
  { key: 'date', label: 'Date' },
  { key: 'notes', label: 'Notes', multiline: true },
];

export function seedTalentPipeline() {
  return [
    {
      id: 'rec-tech-stack',
      title: 'Tech Stack',
      metrics: [],
      table: {
        fields: TECH_STACK_FIELDS,
        rows: techStackRows(),
      },
    },
    {
      id: 'rec-schools',
      title: 'School Partnerships',
      note: 'Top schools for robotics, robot learning and computer vision.',
      entities: [],
      metrics: [],
      table: { fields: SCHOOL_FIELDS, rows: schoolRows() },
    },
    {
      id: 'rec-sponsorships',
      title: 'Event Sponsorships',
      metrics: [
        { id: 'm1', label: 'Budget', target: '$1,000 / in-kind / intros', values: {} },
        { id: 'm2', label: 'Our interest', target: 'Videos, talent', values: {} },
        { id: 'm3', label: 'Type of talent', target: 'Eng / Ops / Sales', values: {} },
        { id: 'm4', label: 'Number of events', note: 'Look at hiring from the same level of talent.', target: null, values: {} },
        { id: 'm5', label: 'Demographic reached', target: null, values: {} },
        { id: 'm6', label: 'Leads (#)', target: '40 per event', values: {} },
        { id: 'm7', label: 'Interviews booked (%)', target: '75%', values: {} },
        { id: 'm8', label: 'Interviews booked (#)', target: '15 per event', values: {} },
      ],
    },
    {
      id: 'rec-attendance',
      title: 'Event Attendance',
      note: 'Conferences and events worth attending, plus the ones Mecka and Josh have already been part of.',
      table: { fields: CONFERENCE_FIELDS, groups: CONFERENCE_GROUPS, rows: conferenceRows() },
      entities: [],
      metrics: [
        { id: 'm1', label: 'Leads (#)', target: 100, values: {} },
        { id: 'm2', label: 'Interviews booked (%)', target: '20%', values: {} },
        { id: 'm3', label: 'Interviews booked (#)', target: 20, values: {} },
      ],
    },
    {
      id: 'rec-partnerships',
      title: 'Partnership Events',
      entities: [],
      table: { fields: PARTNER_FIELDS, rows: [] },
      metrics: [
        { id: 'm1', label: 'Leads (#)', target: '30 per event', values: {} },
        { id: 'm2', label: 'Interviews booked (%)', target: '30%', values: {} },
        { id: 'm3', label: 'Interviews booked (#)', target: '9 per event', values: {} },
      ],
    },
    {
      id: 'rec-total',
      title: 'Total',
      metrics: [
        { id: 'm1', label: 'Leads (#)', target: null, values: {} },
        { id: 'm2', label: 'Interviews booked (%)', target: null, values: {} },
        { id: 'm3', label: 'Interviews booked (#)', target: null, values: {} },
      ],
    },
  ];
}

export const TALENT_PIPELINE_NOTE = 'Mecka has grown from about 40 people in June to about 58 now, with open roles in hardware, research and partnerships, so there is a need for hiring support. Here are a couple of ideas I can put together in my first days to start a system for recruiting technical talent. Sourcing and scheduling need to be automated and systemized, while the interviews stay personal, with people engaging candidates and giving us a chance to build relationships with them.\n\nThis page is about bringing top-of-funnel talent to Mecka.\n\nA note on events: partnering with others on events is much more interesting, since it has the same impact for far less time and effort. With school partnerships, the goal is to build relationships early, so that when very strong talent comes along, it gets funneled to us quickly.\n\nTo build a successful funnel for Mecka, we need several long-term relationships in place. That’s why we’re looking at:\n\n• School partnerships for newcomers\n• Event sponsorships for people already in the ecosystem\n• Event attendance, to understand who we’re getting in front of and whether they’re the right people, whether that’s a future client or a future employee\n• Event partnerships, as our ICPs converge\n• The total count from leads to interviews booked, and the gap between them';
