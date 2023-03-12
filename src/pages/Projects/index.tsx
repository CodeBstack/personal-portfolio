import {
  projects,
  projects2,
  truncateString,
} from './data';
import EachProject from './EachProject';
import { motion } from 'framer-motion';
import GithubIcon from '../../components/Vectors/GithubIcon';
import LinkOutIcon from '../../components/Vectors/LinkOutIcon';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type ProjectProps = {
  data: {
    skills?: string[];
    layout?: string;
    projectTitle?: string;
    projectDesc?: string;
    projectRepoLink?: string;
    projectDemoLink?: string;
  };
};

const Project = ({ data }: ProjectProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-end p-6 text-left `;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="relative"
    >
      <div className={overlayStyles}>
        <p className="font-SF2 text-secondary mb-2 text-[13px]">
          Featured Projects
        </p>
        <p className="font-Calibre2 text-text-200 text-[24px]">
          {data.projectTitle}
        </p>

        <div
          className={` rounded-[0px]  my-4 text-left`}
        >
          <p className="text-xl">
            {truncateString(data.projectDesc, 70)}
          </p>
        </div>

        <div
          className={`flex w-full mb-7 gap-x-6 flex-wrap gap-y-4 items-center`}
        >
          {data.skills?.map((skill, i) => (
            <p
              key={i}
              className="text-300 font-SF2 text-[13px]"
            >
              {skill}
            </p>
          ))}
        </div>

        <div
          className={`flex gap-8 w-full items-center`}
        >
          <a href={data.projectRepoLink}>
            <GithubIcon />
          </a>{' '}
          <a href={data.projectDemoLink}>
            <LinkOutIcon />
          </a>
        </div>
      </div>
      {/* <img
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
      /> */}
      <div
        className={` bg-[#233554] h-[471px] max-wpx]`}
      ></div>
    </motion.div>
  );
};

interface ProjectsPageProps {}

const ProjectsPage: React.FunctionComponent<
  ProjectsPageProps
> = () => {
  return (
    <section
      className="projects min-h-screen md:py-[10%] relative mb-[44px] md:mb-0 "
      id="projects"
    >
      <motion.div
        className="flex gap-4 items-center  mb-10 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex gap-4 md:gap-6 items-center">
          <h1 className="text-secondary text-[26px] md:text-[32px]  font-SF2 ">
            02.
          </h1>
          <h1 className="text-text-200 text-[26px] md:text-[32px] font-SF3">
            Projects
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[148px] md:max-w-[395px]"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 md:flex flex-col gap-5 md:gap-[104px]"
      >
        {projects.map((project) => (
          <EachProject
            key={project.id}
            data={project}
          />
        ))}
      </motion.div>

      <div className="mt-60 text-center">
        <h2 className="font-Calibre2 text-text-200 text-2xl text-[32px]">
          Other Projects Worth Noting
        </h2>

        <a
          href="#"
          className="font-SF1 text-secondary mt-2"
        >
          View my archive
        </a>

        {/* <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"> */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects2.map((project, i) => (
            <Project key={i} data={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
