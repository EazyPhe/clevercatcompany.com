export type Project = {
  slug: string;
  name: string;
  category: 'software' | 'connected';
  categoryLabel: string;
  status: string;
  summary: string;
  intro: string;
  visual: 'print' | 'control' | 'workflow';
  scope: string;
  technologies: string[];
  challenge: string;
  approach: string;
  delivered: string[];
  outcome: string;
  next: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'maneslice',
    name: 'ManeSlice',
    category: 'software',
    categoryLabel: 'Software & Workflow',
    status: 'Working prototype',
    summary: 'A clearer 3D-printing workspace for printer status, temperature history, files, and toolpath inspection.',
    intro: 'Bringing the information behind a print into one focused workspace.',
    visual: 'print',
    scope: 'Printing dashboard & preview',
    technologies: ['OctoPrint', 'Web interfaces', 'G-code visualization'],
    challenge: 'A printing workflow can spread useful information across several views. Understanding a job means moving between printer status, temperatures, files, and the path the printer is expected to follow.',
    approach: 'ManeSlice brings those views together, with a responsive dashboard and larger workspaces for examining a toolpath. An offline preview supports inspecting and replaying G-code without depending on a connected printer.',
    delivered: [
      'A responsive OctoPrint dashboard for reported printer and job status.',
      'Temperature history, file management, and 2D/3D toolpath views.',
      'A standalone offline preview with G-code playback.',
      'Integration that retains OctoPrint authentication and permissions.',
    ],
    outcome: 'A working dashboard prototype and offline preview create a clearer way to inspect the printing workflow. Development continues across the interface and the wider slicer project.',
    next: 'Refine the printing workflow, broaden validation with representative files, and document a release that others can reproduce.',
    note: 'Toolpath playback visualizes interpreted commands and reported progress; it does not measure physical printer movement. The wider slicer work builds on an open-source foundation and retains upstream attribution and license notices.',
  },
  {
    slug: 'connected-show-control',
    name: 'Connected Show Control',
    category: 'connected',
    categoryLabel: 'Connected Devices & Control',
    status: 'In development',
    summary: 'An Android show-planning interface and embedded-device system, developed through simulation and device observation.',
    intro: 'Connecting show design, embedded interfaces, and a disciplined path toward physical control.',
    visual: 'control',
    scope: 'Android interface & embedded systems',
    technologies: ['Kotlin / Compose', 'ESP32 / CoreS3', 'LVGL', 'Show simulation'],
    challenge: 'A modular show system needs a shared understanding of fixtures, scenes, cues, and device state. Each interface must make that information understandable before the whole system can be trusted together.',
    approach: 'The work is grouped as one project family: an Android planning interface, embedded device interfaces, a field-router direction, and the protocol work connecting them. Simulation, observation, and physical output are developed as distinct stages.',
    delivered: [
      'An Android prototype for offline show storage and editing.',
      'Virtual fixture patching, scene and cue editing, and deterministic playback.',
      'Audio-reactive previews driven by synthetic or recorded audio frames.',
      'Manually requested, read-only status checks for compatible device services.',
    ],
    outcome: 'The Android prototype supports planning, virtual playback, and device observation. The wider embedded work gives the system a common development direction.',
    next: 'Validate the interfaces between software and devices, then establish the evidence needed for a complete live control path.',
    note: 'The current portfolio entry describes simulation and observation. It does not claim a completed Android-to-DMX control path or qualified physical output.',
  },
  {
    slug: 'project-command-center',
    name: 'Project Command Center',
    category: 'software',
    categoryLabel: 'Software & Workflow',
    status: 'Internal working tool',
    summary: 'A local workspace for bringing project inventories, repository context, decisions, and next actions into view.',
    intro: 'Turning a scattered development workspace into a more usable picture of the work.',
    visual: 'workflow',
    scope: 'Internal project operations',
    technologies: ['Python', 'SQLite', 'Responsive web UI'],
    challenge: 'Projects can accumulate across machines, repositories, and working copies. Without a clear inventory, it becomes difficult to tell which work belongs together, what is current, and what needs attention next.',
    approach: 'Project Command Center separates project identity from individual checkouts. It combines a persistent registry, bounded local collection, imported snapshots, and editable project context in a responsive interface.',
    delivered: [
      'A persistent project and repository inventory.',
      'Search and project detail views with source and freshness context.',
      'Project notes, links, tasks, decisions, and handoff exports.',
      'A responsive interface used locally, with preservation checks for existing project files.',
    ],
    outcome: 'A working internal tool brings project context together while leaving source projects in place. Imported snapshots remain identified as snapshots, and unavailable information is represented explicitly.',
    next: 'Improve project grouping and keep the inventory useful as the portfolio grows.',
    note: 'This is an internal operations tool. Private project records, machine details, and the running application are not exposed through this website.',
  },
];

export const site = {
  name: 'Clever Cat Company',
  domain: 'clevercatcompany.com',
  url: 'https://clevercatcompany.com',
  description: 'The project portfolio of Clever Cat Company: focused software, connected systems, and practical prototyping.',
  mission: 'Clever Cat Company turns focused creativity and practical skill into useful software, connected systems, and physical products. We build with integrity, follow through on our commitments, and create work that earns trust, strengthens connection, and delivers lasting value.',
  aboutIntro: "Clever Cat Company is the umbrella for Phelix Estinvil's businesses and projects, bringing creative and technical work into one clear home.",
  business: {
    name: 'DJ Phelix',
    url: 'https://djphelix.com',
    description: 'Explore DJ Phelix and start a booking inquiry on its dedicated website.',
    bookingUrl: 'https://djphelix.com/contact/',
  },
  founder: {
    name: 'Phelix Estinvil',
    url: 'https://phelixestinvil.com',
    description: 'Get to know Phelix Estinvil and explore his background and projects on his personal website.',
  },
  contact: {
    // Existing public professional contact, also published on the owner's public contact card.
    email: 'estinvilp3@gmail.com',
    emailIsPlaceholder: false,
  },
  navigation: [
    { label: 'Work', href: '/work/' },
    { label: 'Capabilities', href: '/capabilities/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNavigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work/' },
    { label: 'Capabilities', href: '/capabilities/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  capabilities: [
    {
      index: '01',
      id: 'software-workflow',
      title: 'Software & Workflow',
      description: 'Interfaces and tools that make a complicated process easier to understand, operate, and maintain.',
      details: ['Web interfaces and dashboards', 'Workflow and project tools', 'Visualization and interaction design'],
    },
    {
      index: '02',
      id: 'connected-devices',
      title: 'Connected Devices & Control',
      description: 'Embedded interfaces, device communication, and systems developed through observable, testable steps.',
      details: ['Embedded interface development', 'Device status and communication', 'Simulation and prototype integration'],
    },
    {
      index: '03',
      id: 'product-design',
      title: 'Product Design & Fabrication',
      description: 'Practical exploration of how a physical idea fits, functions, and improves through iteration.',
      details: ['Mechanical concepts and CAD studies', 'Enclosures and workshop fixtures', 'Digital-to-physical prototyping'],
    },
  ],
  principles: [
    { title: 'Focus', text: 'Give the right work enough attention to become useful.' },
    { title: 'Integrity', text: 'Describe the work honestly and make its current state clear.' },
    { title: 'Follow-through', text: 'Build trust through consistent care, documentation, and refinement.' },
  ],
  process: [
    { index: '01', title: 'Listen', description: 'Understand the actual need, the people, and the constraints.' },
    { index: '02', title: 'Shape', description: 'Choose a focused direction and define what success should mean.' },
    { index: '03', title: 'Make', description: 'Build something tangible that can be inspected and tested.' },
    { index: '04', title: 'Refine', description: 'Use evidence to improve the details and earn the next step.' },
  ],
} as const;

export const contactEmailHref = 'mailto:' + site.contact.email + '?subject=' +
  encodeURIComponent('Clever Cat Company conversation');
