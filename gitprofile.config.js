// gitprofile.config.js

const config = {
  github: {
    username: 'Peagah-Vieira', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
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
      'https://drive.google.com/file/d/1pc7MsJyUMf_i4PLFPIigBRrkV0pdKf64/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'Python',
    'Django',
    'PostgreSQL',
    'Docker',
    'Mysql',
    'MongoDB',
    'PHP',
    'Laravel',
    'Bootstrap',
    'Tailwind',
    'postman',
    'selenium',
    'HTML',
    'CSS',
    'JavaScript',
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
      name: 'Curso de Python',
      year: 'Concluido 07/2024 - Udemy',
      link: 'https://www.udemy.com/certificate/UC-3630ad73-1fe4-4bf0-8974-0e69318ac1f4/'
    },
    {
      name: 'Curso de Django Web Framework e Django Rest Framework',
      year: 'Concluido 07/2023 - Udemy',
      link: 'https://www.udemy.com/certificate/UC-566d06fd-0cb3-4d79-bf0f-2541142afb3f/'
    },
    {
      name: 'Curso de SQL e PostgreSQL',
      year: 'Concluido 07/2024 - Udemy',
      link: 'https://www.udemy.com/certificate/UC-b7d80fa7-4142-425f-95d1-6a07df31832d/'
    },
    {
      name: 'Curso de Docker',
      year: 'Concluido 07/2024 - Udemy',
      link: 'https://www.udemy.com/certificate/UC-98a537f0-36af-459e-a0b9-ea34f640c4e9/'
    },
    {
      name: 'Gestão Ágil com Scrum',
      year: 'Concluido 07/2023 - Udemy',
      link: 'https://www.udemy.com/certificate/UC-0391393a-ab00-4e3d-a95a-10c742993954/'
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
  blog: {
    source: 'medium', // medium | dev
    username: '@peagahvieira2003', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },

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
