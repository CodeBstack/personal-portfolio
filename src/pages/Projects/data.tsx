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
      ' Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
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
      ' Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
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
      ' Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
    projectTitle: 'Project Dashboard',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
];
