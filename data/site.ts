/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 * tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'Node', 'Vite'],
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Rafael Pelayo | Data & Automation engineer',
    description:
      'Portfolio: shipping reliable web products with clear architecture, tests, and delivery practices.',
  },
  hero: {
    name: 'Rafael Pelayo',
    role: ' Data & Automation engineer',
    tagline: 'Driving the transformation towards data integration and automation in production systems.',
    contact: 'I would be happy to collaborate!',
    avatarSrc: '/Foto_de_Rafa.jpg',
    avatarAlt: 'Rafael Pelayo',
  },
  about: {
    paragraphs: [
      'ABOUT >',
      'My passion for computer systems began at an early age in my life and inevitably, over time, laid the foundation for becoming my lovely profession. | Over the years I have worked with incredible companies and gained solid experience in my field. I see myself as someone who bridges technical expertise with creative problem-solving.',
      'Of course, even beyond, I am motivated to be of great help to innovate, collaborate, and contribute to the team and organizational success.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Implement pragmatic solutions for data in the production enviroment.',
          'Automate data, create and mantain data flow, setup monitoring alerts.',
          'Design and optimize data pipelines that help clients make better decisions from clean, timely, and scalable data.',
        ],
      },
      {
        heading: 'TECHNICAL SKILLS',
        techItems: ['GCP Cloud', 'BigQuery', 'Bash', 'Python', 'SQL'],
      },
    ],
  },
  experiences: [
    {
      period: '2021 - 2026',
      title: 'IT Data Production Support Engineer',
      company: 'Hexaware Technologies',
      summary:
        'Support to data production systems and applications (on-premise and sas).',
      highlights: [
        'Support and maintain a centralized structured data repository for company users can query.',
        'Implement fixes, and track solution to applications or system errors.',
        'Develop and deploy ETL jobs for load data into production tables Oracle and Datalake in GCP.',
        'Create and Automate Alerts, Schedule, Monitor and maintain production jobs.',
      ],
      tech: ['GCP', 'BygQuery', 'Python', 'SQL', 'Bash'],
    },
    {
      period: '2017 - 2021',
      title: 'BI Executive Production Support',
      company: 'TATA CONSULTANCY SERVICES',
      summary:
        'RTB Support - Bank Production Issues, Support applications in a UNIX environment.',
      highlights: [
        'Analyze production issues, conduct investigation to determine root cause, setup monitoring alerts.',
        'Investigate data related issues, develop and automate data extractions or develop reports from user requests or requirements.',
        'Closely work with development team to create and provide fix recommendations.',
        'Work and Coordinate with upstream teams for new developments and implementations.',
      ],
      tech: ['Bash', 'ITIL', 'SQL'],
    },
  ],
  featuredProjects: [
    {
      title: 'Lumen Studio Website',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'rafikinet18@gmail.com',
    github: 'https://github.com/Rafael-Pelayo-afk',
    linkedin: 'https://www.linkedin.com/rafael-pelayo-b606b9147',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
