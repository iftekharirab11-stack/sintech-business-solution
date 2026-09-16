export const navItems = [
  {
    label: 'Services Hub',
    href: '#',
    children: [
      { label: 'Outbound Sales & Telemarketing', href: '/services/bpo/telemarketing', description: 'Pipeline growth and sales outreach' },
      { label: 'Lead Generation & Qualification', href: '/services/bpo/lead-generation', description: 'Targeted lead acquisition' },
      { label: 'Inbound Customer Support', href: '/services/bpo/customer-support', description: 'Customer conversations and resolve' },
      { label: 'Appointment Setting', href: '/services/bpo/appointment-setting', description: 'Qualified demos and booked meetings' },
      { label: 'Executive Virtual Assistance', href: '/services/bpo/virtual-assistant', description: 'High-touch executive support' },
      { label: 'Back-Office Data & CRM Admin', href: '/services/bpo/back-office', description: 'Operations support done right' },
      { label: 'Web Development', href: '/services/digital/web-development', description: 'Custom digital products and platforms' },
      { label: 'Graphic Design & Branding', href: '/services/digital/graphic-design', description: 'Brand systems that convert' },
      { label: 'SEO & Content Marketing', href: '/services/digital/seo-marketing', description: 'Traffic quality and search visibility' },
      { label: 'Social Media & Digital Ads', href: '/services/digital/social-media-ads', description: 'Paid media and campaign execution' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Process', href: '/process' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const servicePillars = [
  {
    id: 'bpo',
    title: 'BPO & Operations',
    description: 'Human-powered support systems built for speed, accuracy, and scalable customer experience.',
    items: [
      { name: 'Call Center', href: '/services/bpo-call-center', icon: 'PhoneCall' },
      { name: 'Virtual Assistant', href: '/services/bpo/virtual-assistant', icon: 'Users' },
      { name: 'Back-Office', href: '/services/bpo/back-office', icon: 'BriefcaseBusiness' },
    ],
  },
  {
    id: 'digital',
    title: 'Digital Solutions',
    description: 'Conversion-focused web, design, and growth systems engineered for modern brands.',
    items: [
      { name: 'Web Development', href: '/services/digital/web-development', icon: 'MonitorSmartphone' },
      { name: 'SEO', href: '/services/digital/seo-marketing', icon: 'Search' },
      { name: 'Graphic Design', href: '/services/digital/graphic-design', icon: 'Palette' },
    ],
  },
];

export const processSteps = [
  'Understand',
  'Plan',
  'Execute',
  'Monitor',
  'Optimize',
];

export const industryMarquee = [
  'Real Estate & E-Commerce',
  'Tech & SaaS',
  'Healthcare & Education',
  'Financial Services',
  'SMBs & Startups',
  'Retail & Hospitality',
];

export const bpoServices = [
  { title: 'Outbound Sales & Telemarketing', href: '/services/bpo/telemarketing', description: 'Turn leads into revenue through strategic outbound campaigns and scripted sales conversations.' },
  { title: 'Lead Generation & Qualification', href: '/services/bpo/lead-generation', description: 'Build high-intent pipelines through research, outreach, and opportunity qualification.' },
  { title: 'Inbound Customer Support', href: '/services/bpo/customer-support', description: 'Deliver empathetic, efficient, and branded customer experiences across channels.' },
  { title: 'Appointment Setting', href: '/services/bpo/appointment-setting', description: 'Book qualified sales meetings and reduce manual follow-up friction.' },
  { title: 'Executive Virtual Assistance', href: '/services/bpo/virtual-assistant', description: 'Give leaders time back with dependable administrative and operational support.' },
  { title: 'Back-Office Data & CRM Admin', href: '/services/bpo/back-office', description: 'Keep your operations clean, reported, and ready for growth.' },
];

export const digitalServices = [
  { title: 'Web Design & Custom Development', href: '/services/digital/web-development', description: 'Responsive, conversion-ready web experiences built on modern stacks.' },
  { title: 'Graphic Design & Brand Identity', href: '/services/digital/graphic-design', description: 'Design systems and assets that make your brand memorable and credible.' },
  { title: 'SEO & Content Marketing', href: '/services/digital/seo-marketing', description: 'Search visibility and content systems designed to attract high-quality traffic.' },
  { title: 'Social Media & Digital Ads', href: '/services/digital/social-media-ads', description: 'Campaigns, creative, and reporting that accelerate measurable business growth.' },
];

export const relatedServices = {
  bpo: ['Outbound Sales & Telemarketing', 'Lead Generation & Qualification'],
  digital: ['Web Design & Custom Development'],
};
