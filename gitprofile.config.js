// gitprofile.config.js

const config = {
  github: {
    username: 'Peagah-Vieira', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'Basic-File-Organization',
        'Portfolio',
        'timex',
        'Peagah-Vieira',
        'filament-excel'
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },

  social: {
    linkedin: 'pedro-henrique-vieira-073b62236',
    instagram: 'pea_gah',
    stackoverflow: '22348832/peagah',
    phone: '(22) 99843-8864',
    email: 'peagahvieira2003@gmail.com',
  },

  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1JB0MjHjJuiVwiMP-zcFUYByIoQgiRsvQ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Laravel',
    'Python',
    'Django',
    'Bootstrap',
    'Tailwind',
    'Mysql',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Git',
  ],

  experiences: [
    {
      company: 'Freelancer',
      position: 'Web Designer',
      from: 'Junho de 2021',
      to: 'Dezembro de 2021',
    }
  ],

  certifications: [
    {
      name: 'Curso de Django Web Framework e Django Rest Framework',
      year: 'Concluido 07/2023 - Udemy',
      link: 'https://drive.google.com/file/d/1z_lSSdXcPZGofOLrKvfOaOBjKnSC1-Y8/view'
    },
    {
      name: 'Gestão Ágil com Scrum',
      year: 'Concluido 07/2023 - Udemy',
      link: 'https://drive.google.com/file/d/1JMY4RlTbERADpmHB1vIEZg6UoR2D_a4X/view'
    },
  ],

  education: [
    {
      institution: 'Universidade Estácio de Sá',
      degree: 'Bacharelado em Análise Desenvolvimento de Sistemas',
      from: '2023',
      to: '2025',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {},

  googleAnalytics: {},

  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {},
  themeConfig: {
    defaultTheme: 'light',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],
  },
};

export default config;
