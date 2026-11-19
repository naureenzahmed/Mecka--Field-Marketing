/* External events for Mecka: robotics, humanoids, physical AI and egocentric / computer-vision data
   in New York City and the San Francisco Bay Area. Researched Nov 19, 2026. "Confirm" means the
   organizer had not published a firm date yet, or sources disagreed. Blank columns had no source value. */

function importedEvent(id, eventName, date, expectedAttendees, targetAudience, lumaLink = '') {
  return { id, eventName, date, lumaLink, expectedAttendees, currentAttendees: '', targetAudience, checklistLink: '' };
}

export const NYC_EXTERNAL_EVENTS = [
  importedEvent('nyc-rob-1', 'NY Hardware Meetup Holiday Party', 'Dec 17, 7–10 pm (confirm on Luma)', '',
    'NYC hardware and robotics builders at Newlab, Brooklyn Navy Yard. Monthly series (the 119th meetup was in Aug 2026).', 'https://luma.com/6fwvkuej'),
  importedEvent('nyc-rob-2', 'Physical AI Meetup (NYC)', 'Recurring; next date TBA', '',
    'About 670 builders, researchers and roboticists: VLA models, simulation, synthetic data, digital twins, embodied AI.', 'https://www.meetup.com/physical/'),
  importedEvent('nyc-rob-3', 'New York Robotics community events', 'Recurring; next date TBA', '',
    'Nonprofit for NYC robotics and embodied AI. Hosts talks, workshops and NY Tech Week sessions.'),
  importedEvent('nyc-rob-4', 'Construction Robotics Summit 2027', 'Apr 14, 2027 (confirm)', '',
    'Construction robotics founders, contractors and investors. The 2026 edition was at Industry City, Brooklyn.', 'https://luma.com/RoboticsSummit2027'),
  importedEvent('nyc-rob-5', 'Agent Conference 2027 (Physical AI track)', 'May 17–18, 2027', '',
    'Enterprise AI leaders at the New York Hilton Midtown. Physical AI is one of ten themes.', 'https://www.agentconference.com/'),
  importedEvent('nyc-rob-6', 'NY Tech Week 2027: robotics and embodied AI sessions', 'Early June 2027 (dates TBA)', '',
    'New York Robotics hosted robotics and embodied AI talks across Manhattan and Brooklyn during NY Tech Week 2026.'),
];

export const SF_EXTERNAL_EVENTS = [
  importedEvent('sf-rob-1', 'Humanoids Summit Silicon Valley 2026', 'Dec 1–2', '',
    'Teams building humanoid robots, a core buyer group for Mecka’s data. San Mateo County Event Center.', 'https://humanoidssummit.com/silicon-valley-2026'),
  importedEvent('sf-rob-2', 'Bots, Bevs & Humanoids (Silicon Valley Robotics)', 'Dec 2, 6–8:30 pm', '',
    'Robotics and physical AI networking in San Francisco, with short talks and demos by sign-up.', 'https://bit.ly/botsbevsdec26'),
  importedEvent('sf-rob-3', 'IEEE Humanoids 2026', 'Dec 6–9', '1,200+',
    'Humanoid robotics researchers and companies: talks, demos, competitions and workshops. Santa Clara Convention Center.', 'https://2026.ieee-humanoids.org/'),
  importedEvent('sf-rob-4', 'HRI 2027 (ACM/IEEE Human-Robot Interaction)', 'Mar 8–12, 2027', '',
    'Human-robot interaction researchers, in Santa Clara.'),
  importedEvent('sf-rob-5', 'NVIDIA GTC 2027', 'Mar 15–18, 2027', '',
    'Large robotics and physical AI track; NVIDIA invested in Mecka’s Series B. San Jose McEnery Convention Center.', 'https://www.nvidia.com/gtc/'),
  importedEvent('sf-rob-6', 'AUTONOMOUS 2027', 'Apr 13–14, 2027', '1,500+',
    'Robotics and physical AI founders, engineers and investors at Pier 27, San Francisco.', 'https://autonomousfuture.co/'),
  importedEvent('sf-rob-7', 'Physical AI Expo North America 2027', 'Jun 16–17, 2027 (confirm)', '',
    'Trade show for scaling robotics and autonomous systems, at San Jose McEnery Convention Center.'),
  importedEvent('sf-rob-8', 'SF Hardware Meetup', 'Monthly; next date TBA', '',
    'Monthly hardware and robotics demo night with a 2-minute open-mic pitch.'),
  importedEvent('sf-rob-9', 'Monthly Robotics & AI Meetup (Frontier Tower)', 'Monthly; next date TBA', '',
    'Robotics and AI builders with live demos at Frontier Tower, San Francisco.', 'https://luma.com/monthly-robotics-ai-meetup'),
];

/* Asia: Hong Kong, Shenzhen, Beijing, Bangkok and Singapore. Researched Nov 19, 2026. Listings found only on
   call-for-papers aggregators were left out; "confirm" marks dates not yet on the organizer's own site. */
function asiaEvent(id, city, eventName, date, expectedAttendees, targetAudience, lumaLink = '') {
  return { ...importedEvent(id, eventName, date, expectedAttendees, targetAudience, lumaLink), city };
}

export const ASIA_EXTERNAL_EVENTS = [
  asiaEvent('asia-rob-1', 'Singapore', 'AIR 2026 (Artificial Intelligence and Robotics)', 'Dec 7–9', '',
    'Research conference on embodied intelligence: large-scale learning meets acting in the real world.', 'https://air2026.org/'),
  asiaEvent('asia-rob-2', 'Bangkok', 'Automation Thailand 2027', 'Mar 10–12, 2027', '',
    'Industrial automation and robotics trade show at BITEC (Messe Frankfurt): robotics, digital factory, warehouse automation.', 'https://automation-thailand.tw.messefrankfurt.com/thailand/en.html'),
  asiaEvent('asia-rob-3', 'Hong Kong', 'InnoEX 2027', 'Apr 13–16, 2027 (confirm)', '',
    'HKTDC innovation fair at the HKCEC. Robotics is one of five focus areas; its RoboPark showed 100+ robots in 2026.', 'https://www.hktdc.com/event/innoex/en'),
  asiaEvent('asia-rob-4', 'Shenzhen', 'FAIR plus 2027 (Fair of AI and Robotics)', 'Apr 21–23, 2027', '600+ exhibitors',
    'Robotics supply-chain fair focused on embodied-intelligence hardware and humanoids. Shenzhen Convention & Exhibition Center, Futian.', 'https://fairplus.cn/en/about-fairplus/'),
  asiaEvent('asia-rob-5', 'Bangkok', 'ICIAI 2027 (Innovation in Artificial Intelligence)', 'Apr 26–29, 2027', '',
    'Academic AI conference with robotics, mechatronics and control tracks. Papers due Dec 10, 2026.', 'https://iciai.org/'),
  asiaEvent('asia-rob-6', 'Singapore', 'Asia Tech x Singapore 2027', 'May 26–28, 2027', '',
    'ATxEnterprise at Singapore EXPO (ATxSummit is invite-only). The 2026 edition announced robotics partnerships (FieldAI, Unitree) and a physical AI testbed.', 'https://asiatechxsg.com/'),
  asiaEvent('asia-rob-7', 'Shenzhen', 'Shenzhen International Robot Exhibition', 'Jun 16–18, 2027 (confirm)', '',
    'Mainly service robots, at Shenzhen World Exhibition & Convention Center.'),
  asiaEvent('asia-rob-8', 'Bangkok', 'RSAE 2027 (Robotics Systems and Automation Engineering)', 'Jul 8–10, 2027 (confirm)', '',
    'Academic robotics conference sponsored by Chulalongkorn University.'),
  asiaEvent('asia-rob-9', 'Hong Kong', 'ACIRS 2027 (Intelligent Robotic Systems)', 'Jul 23–25, 2027', '',
    'Academic conference on intelligent robotic systems. Full papers due Mar 10, 2027.'),
  asiaEvent('asia-rob-10', 'Beijing', 'World Robot Conference 2027', 'Aug 18–22, 2027 (confirm)', '',
    'China’s largest robotics event, with a humanoid expo floor, forums and exhibitions.'),
  asiaEvent('asia-rob-11', 'Beijing', 'World Humanoid Robot Games 2027', 'Aug 2027 (dates TBA)', '',
    'Humanoid robot competition; the 2026 edition ran Aug 22–26. Good for meeting humanoid makers.'),
  asiaEvent('asia-rob-12', 'Shenzhen', 'IOTE EXPO 2027 (embodied AI zone)', 'Sep 1–3, 2027', '',
    'IoT expo whose AI zone (AGIC) covers embodied AI and humanoid robots. Shenzhen World Exhibition & Convention Center.', 'https://eng.iotexpo.com.cn/'),
];
