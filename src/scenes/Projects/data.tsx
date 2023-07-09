interface Projects {
  id?: number;
  imgUrl?: string;
  vidUrl?: string;
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
    vidUrl: '/videos/cms_blog.mp4',
    skills: [
      'NextJS',
      'SASS',
      'Graph QL',
      'TailwindCSS',
    ],
    layout: 'normal',
    projectDesc:
      'Built a fully responsive CMS blog app with featured posts, recent posts, categories and also with full markdown articles, author information, comments and so on.',
    projectTitle: 'CMS Blog Application',
    projectRepoLink:
      'https://github.com/CodeBstack/cms-blog-app',
    projectDemoLink:
      'https://codebstack-blog-app.vercel.app/',
  },
  {
    id: 2,
    vidUrl: '/videos/coingecko_clone.mp4',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React Query',
    ],
    layout: 'reverse',
    projectDesc:
      'This the clone of the coingecko crypto app homepage clone featuring the paginated lists of coins, search functionality and more.',
    projectTitle: 'Coingecko app homepage clone',
    projectRepoLink: 'https://github.com/CodeBstack/coingecko-clone',
    projectDemoLink: 'https://coingecko-homepage-clone.netlify.app/',
  },
  {
    id: 3,
    vidUrl: '/videos/manage_landing.mp4',
    skills: ['HTML', 'CSS', 'TailwindCss'],
    layout: 'normal',
    projectDesc:
      'A single page website built with TailwindCss which is mobile first responsive. Project inspiration gotten from frontend mentor.',
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
