export const products = [
  {
    name: 'Priora', slug: 'priora', category: 'Productivity', status: 'Available',
    description: 'Productivity app for task management, goals, reminders, schedules, deadlines, focus sessions, and daily planning.',
    detail: 'Priora is a calm productivity app designed for task management, goals, reminders, schedules, deadlines, focus sessions, and daily planning in one structured workspace.',
    platforms: ['Android', 'Web/PWA'], logo: 'P', logoAsset: '/priora_icons_assets/priora-icon-v5-512.png', accent: 'teal',
    links: { Android: 'https://play.google.com', 'Web/PWA': 'https://priorapp.netlify.app/' },
    features: ['Task management', 'Goal tracking', 'Reminders & deadlines', 'Schedules', 'Focus sessions', 'Daily planning'],
    screenshots: ['1-planner.png', '2-tasks.png', '3-create-task.png', '4-goals.png', '5-analytics-streaks.png', '6-analytics-focus.png'],
  },
  { name: 'Focusflow', slug: 'focusflow', category: 'Productivity', status: 'Coming soon', description: 'A focused workspace for deep work and better routines.', detail: 'A considered space for building focus rituals that last.', platforms: [], logo: 'F', accent: 'coral', links: {}, features: ['Focus sessions', 'Gentle progress cues', 'Personal work rhythms'] },
]

export const games = [
  { name: 'Orbit Run', slug: 'orbit-run', status: 'In development', description: 'A small, satisfying arcade journey through impossible orbits.', logo: 'O', accent: 'ink', platforms: [], features: ['One-thumb controls', 'Short, replayable runs', 'A growing universe'] },
  { name: 'Coming soon', slug: 'coming-soon', status: 'On the horizon', description: 'New playful worlds are taking shape at PriorApp.', logo: '+', accent: 'coral', platforms: [], features: ['Fresh ideas', 'Thoughtful play', 'More to come'] },
]
