export const products = [
  {
    name: 'Priora', slug: 'priora', category: 'Productivity', status: 'Available',
    description: 'Productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning.',
    detail: 'Priora is a productivity app for task management, reminders, goal tracking, schedules, deadlines, focus sessions, and daily planning across Android and Web.',
    platforms: ['Android', 'Web/PWA'], logo: 'P', logoAsset: '/priora_icons_assets/priora-icon-v5-512.png', accent: 'teal',
    links: { Android: 'https://play.google.com', 'Web/PWA': 'https://priorapp.netlify.app/' },
    features: [
      'Daily planning & organized schedules',
      'Task management, subtasks & priority tags',
      'Goal tracking & project milestone progress',
      'Smart reminders, notifications & deadline alerts',
      'Distraction-free focus sessions & deep work timers',
      'Productivity streaks, completion stats & analytics',
      'Instant cross-device sync on Android & Web PWA'
    ],
    screenshots: ['1-planner.png', '2-tasks.png', '3-create-task.png', '4-goals.png', '5-analytics-streaks.png', '6-analytics-focus.png'],
  },
  { name: 'Focusflow', slug: 'focusflow', category: 'Productivity', status: 'Coming soon', description: 'A focused workspace for deep work and better routines.', detail: 'A considered space for building focus rituals that last.', platforms: [], logo: 'F', accent: 'coral', links: {}, features: ['Focus sessions', 'Gentle progress cues', 'Personal work rhythms'] },
]

export const games = [
  {
    name: 'Blockzu',
    slug: 'blockzu',
    category: 'Casual Block Puzzle',
    status: 'Available',
    description: 'Addictive 8x8 block puzzle game. Clear lines, combo blocks, and blast high scores.',
    detail: 'Blockzu (also known as bockzur or block blast puzzle) is a casual 8x8 block puzzle game where players fit polyomino pieces, trigger satisfying multi-line combo streaks, unlock vibrant themes, and compete for high scores with smooth 60 FPS gameplay on Web and Android.',
    platforms: ['Web/PWA', 'Android'],
    logo: 'B',
    logoAsset: '/blockzu_assets/blockzu-icon.svg',
    accent: 'royal',
    links: {
      'Web/PWA': 'https://blockzu.priorapp.co.in/',
      'Android': 'https://blockzu.priorapp.co.in/'
    },
    features: [
      'Classic 8x8 block puzzle grid with drag-and-drop piece placement',
      'Satisfying block blast combos & multi-line clear score multipliers',
      'Multiple vibrant theme palettes (Sapphire, Neon, Sunset & Pastel)',
      'Daily bonus rewards, achievement trophies & progressive missions',
      '100% playable offline on Android and instant-load on Web PWA',
      'Player-first design with zero intrusive ads during active gameplay'
    ],
    screenshots: []
  },
  { name: 'Orbit Run', slug: 'orbit-run', status: 'In development', description: 'A small arcade journey through impossible orbits.', logo: 'O', accent: 'ink', platforms: [], features: ['One-thumb controls', 'Short, replayable runs', 'A growing universe'] },
]
