export const site = {
  name: 'Clever Cat Company',
  domain: 'clevercatcompany.com',
  url: 'https://clevercatcompany.com',
  description:
    'A multidisciplinary studio for practical digital, design, engineering, and creative outcomes.',
  contact: {
    // Build placeholder only. Replace before launch with a monitored public inbox.
    email: 'hello@clevercatcompany.com',
    emailIsPlaceholder: true,
  },
  navigation: [
    { label: 'Work', href: '/work' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footerNavigation: [
    { label: 'Home', href: '/' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
  capabilities: [
    {
      index: '01',
      title: 'Digital products and web development',
      description:
        'Websites, interfaces, and digital product work shaped around what people need to do.',
      details: ['Websites and digital products', 'User experience and interface systems', 'Clear, maintainable implementation'],
    },
    {
      index: '02',
      title: 'Brand, interface, and visual design',
      description:
        'Identity, interface, and visual systems that make a useful idea easier to understand and use.',
      details: ['Brand direction and identity systems', 'Interface design', 'Visual language and production-ready assets'],
    },
    {
      index: '03',
      title: 'Engineering, electronics, and prototyping',
      description:
        'Practical exploration across hardware, connected systems, and prototypes where a physical answer helps.',
      details: ['Embedded and connected experiments', 'Prototype planning and iteration', 'Digital-to-physical problem solving'],
    },
    {
      index: '04',
      title: 'Creative production and problem solving',
      description:
        'Creative thinking and hands-on production for ideas that do not fit neatly into one discipline.',
      details: ['Concept development', 'Creative direction and production', 'Focused problem framing'],
    },
  ],
  process: [
    {
      index: '01',
      title: 'Listen',
      description: 'Start with the actual need, context, and constraints.',
    },
    {
      index: '02',
      title: 'Shape',
      description: 'Explore a focused direction before overcommitting.',
    },
    {
      index: '03',
      title: 'Make',
      description: 'Bring the right pieces together with care and clarity.',
    },
    {
      index: '04',
      title: 'Refine',
      description: 'Improve the details that make the work more useful.',
    },
  ],
  workSlots: [
    {
      title: 'Case study space 01',
      description: 'A future project story will appear here when it is ready to share.',
      image: '/images/work-material-grid.png',
      alt: 'Abstract study of stone, a wire grid, and smoked glass.',
    },
    {
      title: 'Case study space 02',
      description: 'This slot is reserved for a confirmed project and approved details.',
      image: '/images/work-material-plate.png',
      alt: 'Abstract study of perforated metal, brushed aluminum, and carbon material.',
    },
    {
      title: 'Case study space 03',
      description: 'A third case study can be added once its story and assets are approved.',
      image: '/images/work-material-study.png',
      alt: 'Abstract study of concrete, smoked glass, and a steel ring.',
    },
  ],
} as const;

export const contactEmailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  'Clever Cat Company conversation',
)}`;
