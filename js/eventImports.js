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
