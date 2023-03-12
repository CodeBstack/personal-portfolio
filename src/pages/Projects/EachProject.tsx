import GithubIcon from '../../components/Vectors/GithubIcon';
import LinkOutIcon from '../../components/Vectors/LinkOutIcon';
import { motion } from 'framer-motion';

interface EachProjectProps {
  data: {
    skills?: string[];
    layout?: string;
    projectTitle?: string;
    projectDesc?: string;
    projectRepoLink?: string;
    projectDemoLink?: string;
  };
}

const EachProject: React.FunctionComponent<
  EachProjectProps
> = ({ data }) => {
  const overlayStyles = `absolute h-full w-full opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-end p-6 `;

  return (
    <>
      {/* MOBILE */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        className="relative block md:hidden h-[471px]"
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
              {data.projectDesc}
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
          className={` bg-[#233554] h-full max-wpx]`}
        ></div>
      </motion.div>

      {/* DESKTOP */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        className={`hidden md:flex items-center ${
          data.layout === 'reverse' &&
          'flex-row-reverse'
        }`}
      >
        <div
          className={`${
            data.layout === 'reverse' && '-ml-10'
          } bg-[#233554] min-h-[360px]  w-1/2 max-w-[580px]`}
        ></div>
        <div
          className={` flex-1 flex ${
            data.layout === 'normal'
              ? 'items-end -ml-10'
              : 'items-start'
          } flex-col text-right`}
        >
          <p className="font-SF2 text-secondary mb-2 text-[13px]">
            Featured Projects
          </p>
          <p className="font-Calibre2 text-text-200 mb-8 text-[28px]">
            {data.projectTitle}
          </p>

          <div
            className={`${
              data.layout === 'reverse' && 'z-10'
            } rounded-[0px] bg-[#112240] p-6 mb-6 text-left`}
          >
            <p className="text-xl">
              {data.projectDesc}
            </p>
          </div>

          <div
            className={`flex w-full ${
              data.layout === 'normal'
                ? 'justify-end'
                : 'justify-start'
            } gap-6 items-center`}
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
            className={`flex gap-8 w-full  ${
              data.layout === 'normal'
                ? 'justify-end'
                : 'justify-start'
            } mt-12 items-center`}
          >
            <a href={data.projectRepoLink}>
              <GithubIcon />
            </a>{' '}
            <a href={data.projectDemoLink}>
              <LinkOutIcon />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EachProject;
