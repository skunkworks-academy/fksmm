const siteUrl = 'https://fksmm.skunkworksacademy.com';
const pdfUrl = `${siteUrl}/idr/Fernanda_Koppe_Souto_Maior_Macias_IDR.pdf`;
const calendarUrl = `${siteUrl}/downloads/fernanda-idr-12-week-calendar.ics`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fernanda Macias IDR',
  tagline: 'AI-Enabled Business Operations, Process Improvement and Strategic Executive Support',
  favicon: 'img/favicon-black.svg',
  url: siteUrl,
  baseUrl: '/',
  organizationName: 'skunkworks-academy',
  projectName: 'fksmm',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: ['@docusaurus/theme-mermaid'],
  headTags: [
    {tagName: 'meta', attributes: {name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet'}},
    {tagName: 'meta', attributes: {name: 'referrer', content: 'strict-origin-when-cross-origin'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/favicon-black.svg', media: '(prefers-color-scheme: light)'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/favicon-white.svg', media: '(prefers-color-scheme: dark)'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/favicon-black.svg'}},
    {tagName: 'link', attributes: {rel: 'manifest', href: '/site.webmanifest'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: 'Fernanda Koppe Souto Maior Macias Individual Development Roadmap',
        description: 'A 12-month AI-enabled business operations, process improvement and strategic executive support development roadmap.',
        educationalLevel: 'Professional development',
        provider: {'@type': 'EducationalOrganization', name: 'Skunkworks Academy', url: 'https://www.skunkworksacademy.com/'},
        mentor: {'@type': 'Person', name: 'Raydo Matthee'},
        url: `${siteUrl}/`,
      }),
    },
  ],
  presets: [
    ['classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: 'idr',
        editUrl: 'https://github.com/skunkworks-academy/fksmm/edit/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
      blog: false,
      sitemap: false,
      theme: {customCss: require.resolve('./src/css/custom.css')},
    }],
  ],
  themeConfig: {
    image: 'img/favicon-black.svg',
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true},
    navbar: {
      title: 'Fernanda Macias IDR',
      logo: {alt: 'Skunkworks Academy', src: 'img/favicon-black.svg', srcDark: 'img/favicon-white.svg', width: 34, height: 34},
      items: [
        {to: '/', label: 'Dashboard', position: 'left', exact: true},
        {to: '/idr/overview', label: 'IDR', position: 'left'},
        {to: '/idr/12-week-sprint', label: '12-Week Sprint', position: 'left'},
        {to: '/idr/credentials', label: 'Credentials', position: 'left'},
        {type: 'dropdown', label: 'Execution', position: 'left', items: [
          {to: '/idr/curriculum', label: 'Curriculum'},
          {to: '/idr/labs-and-assignments', label: 'Labs & Assignments'},
          {to: '/idr/portfolio', label: 'Portfolio Projects'},
          {to: '/idr/calendar', label: 'Calendar'},
          {to: '/idr/kpis', label: 'Goals & KPIs'},
        ]},
        {to: '/idr/resources', label: 'Resources', position: 'left'},
        {href: pdfUrl, label: 'Download PDF', position: 'right', className: 'navbar-download-link'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Roadmap', items: [
          {label: 'Executive Summary', to: '/idr/overview'},
          {label: '12-Month Roadmap', to: '/idr/roadmap'},
          {label: '12-Week Sprint', to: '/idr/12-week-sprint'},
          {label: 'Goals & KPIs', to: '/idr/kpis'},
        ]},
        {title: 'Evidence', items: [
          {label: 'Portfolio Projects', to: '/idr/portfolio'},
          {label: 'Labs & Assignments', to: '/idr/labs-and-assignments'},
          {label: 'Mentoring & Reviews', to: '/idr/mentoring'},
          {label: 'Progress Workspace', to: '/#workspace'},
        ]},
        {title: 'Access', items: [
          {label: 'Download IDR PDF', href: pdfUrl},
          {label: 'Download Calendar', href: calendarUrl},
          {label: 'GitHub Repository', href: 'https://github.com/skunkworks-academy/fksmm'},
          {label: 'Skunkworks Academy', href: 'https://www.skunkworksacademy.com/'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Skunkworks Academy. Dream. Design. Deliver.`,
    },
    prism: {additionalLanguages: ['bash', 'json', 'powershell', 'yaml']},
    mermaid: {theme: {light: 'neutral', dark: 'dark'}, options: {securityLevel: 'strict'}},
    metadata: [
      {name: 'description', content: 'Fernanda Macias’s interactive 12-month development roadmap for AI-enabled business operations, process improvement and strategic executive support.'},
      {name: 'theme-color', content: '#1E6BD0'},
      {property: 'og:title', content: 'Fernanda Macias — Individual Development Roadmap'},
      {property: 'og:description', content: 'An interactive IDR with curriculum, labs, assignments, milestones, credentials, calendar and progress tools.'},
      {property: 'og:url', content: `${siteUrl}/`},
      {property: 'og:image', content: `${siteUrl}/img/favicon-black.svg`},
      {name: 'twitter:card', content: 'summary'},
    ],
  },
};

module.exports = config;
