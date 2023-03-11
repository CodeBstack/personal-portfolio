interface Projects {
  id?: number;
  skills?: string[];
  layout?: string;
  projectTitle?: string;
  projectDesc?: string;
  projectRepoLink?: string;
  projectDemoLink?: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    layout: 'normal',
    projectDesc:
      'Lorem sit amet cons. parturient pulvinar semper neque. c pretium ',
    projectTitle: 'Advanced Calculator',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
  {
    id: 2,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    layout: 'reverse',
    projectDesc:
      'Lorem sit amet cons. parturient pulvinar semper neque. c pretium ',
    projectTitle: 'Weather Information',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
  {
    id: 3,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    layout: 'normal',
    projectDesc:
      'Lorem sit amet cons. parturient pulvinar semper neque. c pretium ',
    projectTitle: 'Project Dashboard',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
];

export const projects2: Projects[] = Array(
  6
).fill({
  id: 1,
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
  ],
  layout: 'normal',
  projectDesc:
    'Lorem sit amet cons. parturient pulvinar semper neque. c pretium ',
  projectTitle: 'Advanced Calculator',
  projectRepoLink: '#',
  projectDemoLink: '#',
});
