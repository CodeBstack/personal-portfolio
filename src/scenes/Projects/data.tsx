interface Projects {
  id?: number;
  imgUrl?: string;
  skills?: string[];
  layout?: string;
  projectTitle?: string;
  projectDesc?: string;
  projectRepoLink?: string;
  projectDemoLink?: string;
}

export const truncateString = (
  str = '',
  num = 100
) => {
  if (str?.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};

export const projects: Projects[] = [
  {
    id: 1,
    imgUrl: '',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    layout: 'normal',
    projectDesc:
      'Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
    projectTitle: 'Advanced Calculator',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
  {
    id: 2,
    imgUrl: '',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    layout: 'reverse',
    projectDesc:
      'Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
    projectTitle: 'Weather Information',
    projectRepoLink: '#',
    projectDemoLink: '#',
  },
  {
    id: 3,
    imgUrl: '',
    // '/images/Manage-landing-page.png',
    skills: ['HTML', 'CSS', 'TailwindCss'],
    layout: 'normal',
    projectDesc:
      'A single page website built with TailwindCss which is mobile first responsive.',
    projectTitle: 'Manage Landing Page',
    projectRepoLink:
      'https://github.com/CodeBstack/LandingPage-tailwind',
    projectDemoLink:
      'https://codebstack.github.io/LandingPage-tailwind/',
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
    'Lorem ipsum dolor sit amet consectetur. Aliquam donec justo fames euismod consectetur. Enim parturien pulvinar semper neque. Id ac pretium leo non. Fringill',
  projectTitle: 'Advanced Calculator',
  projectRepoLink: '#',
  projectDemoLink: '#',
});
