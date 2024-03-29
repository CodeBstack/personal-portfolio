import GithubIcon from '../../components/Vectors/GithubIcon';
import LinkOutIcon from '../../components/Vectors/LinkOutIcon';
import { motion } from 'framer-motion';
import { truncateString } from './data';

interface EachProjectProps {
  data: {
    imgUrl?: string;
    vidUrl?: string;
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
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-[#233554] hover:bg-[#020A13] z-30 flex flex-col justify-end p-6 `;

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
          <p className="font-SF2 text-secondary-dark dark:text-secondary mb-2 text-[13px]">
            Featured Project
          </p>
          <p className="font-Calibre2 text-primary-dark dark:text-text-200 text-[24px]">
            {data?.projectTitle}
          </p>

          <div
            className={` rounded-[0px]  my-4 text-left`}
          >
            <p className="text-xl">
              {truncateString(
                data?.projectDesc,
                70
              )}
            </p>
          </div>

          <div
            className={`flex w-full mb-7 gap-x-6 flex-wrap gap-y-4 items-center`}
          >
            {data?.skills?.map((skill, i) => (
              <p
                key={i}
                className="text-light-text dark:text-text-300 font-SF2 text-[13px]"
              >
                {skill}
              </p>
            ))}
          </div>

          <div
            className={`flex gap-8 w-full items-center`}
          >
            <a
              aria-label="Go to the project github repo"
              title="Github repo"
              target="_blank"
              rel="noreferrer"
              href={data?.projectRepoLink}
            >
              <GithubIcon />
            </a>{' '}
            <a
              aria-label="Go to the project demo"
              title="Project Demo"
              target="_blank"
              rel="noreferrer"
              href={data?.projectDemoLink}
            >
              <LinkOutIcon />
            </a>
          </div>
        </div>
        {/* <img
          className={`bg-[#020A13] dark:bg-[#233554] h-full object-cover`}
          src={`${data?.imgUrl}`}
          alt={data?.projectTitle}
        /> */}
        <a
          href={data?.projectDemoLink}
          className=""
          target="_blank"
          rel="noreferrer"
          aria-label="Go to the project demo"
          title="Project Demo"
        >
          {data?.imgUrl ? (
            <img
              // className="!h-full !w-full absolute top-0 right-0 object-ver"
              // className={`${
              //   data?.layout === 'reverse' &&
              //   '-ml-8'
              // } bg-[#020A13] !dark:bg-[#233554] min-h-[360px] z[-1] relative  w-1/2 max-w-[580px] object-cover`}
              src={data?.imgUrl}
              alt={data?.projectTitle}
            />
          ) : data?.vidUrl ? (
            <video
              src={data?.vidUrl}
              autoPlay
              loop
              // height="100%"
            >
              Sorry, your browser doesn't support
              embedded videos.
            </video>
          ) : null}
          {/* <div
          className={`bg-[#020A13 dark:bg-[#233554] h-full max-wpx]`}
        ></div> */}
        </a>
      </motion.div>

      {/* DESKTOP */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        className={`hidden md:flex items-center ${
          data?.layout === 'reverse' &&
          'flex-row-reverse'
        }`}
      >
        {/* <div
          className={`${
            data?.layout === 'reverse' && '-ml-8'
          } bg-[#020A13] !dark:bg-[#233554] min-h-[360px] hfull z[-1] relative  w-1/2 max-w-[580px] objectcover`}
        > */}
        <a
          href={data?.projectDemoLink}
          target="_blank"
          aria-label="Go to the project demo"
          title="Project Demo"
          rel="noreferrer"
          className={`${
            data?.layout === 'reverse' && '-ml-8'
          } bg-[#020A13] !dark:bg-[#233554] max-h-fit h-full min-h[360px] z[1] relative  w-1/2 max-w-[580px]`}
        >
          {data?.imgUrl ? (
            <img
              // className='object-cover h-auto w-full'
              // className="!h-full !w-full absolute top-0 right-0 object-ver"
              className={`h-full w-full object-cover`}
              src={data?.imgUrl}
              alt={data?.projectTitle}
            />
          ) : data?.vidUrl ? (
            <video
              src={data?.vidUrl}
              autoPlay
              loop
              className={`h-full w-full object-cover`}
            >
              Sorry, your browser doesn't support
              embedded videos.
            </video>
          ) : null}
          {/* </div> */}
        </a>

        <div
          className={` flex-1 flex z-[1] ${
            data?.layout === 'normal'
              ? 'items-end -ml-8'
              : 'items-start'
          } flex-col text-right`}
        >
          <p className="font-SF2 text-secondary-dark dark:text-secondary mb-2 text-[13px]">
            Featured Projects
          </p>
          <p className="font-Calibre2 text-primary-dark dark:text-text-200 mb-8 text-[28px]">
            {data?.projectTitle}
          </p>

          <div
            className={`${
              data?.layout === 'reverse' && ''
            } rounded-[0px] bg-[#F1EFEE] dark:bg-[#112240] p-4 mb-6 text-left`}
          >
            <p className="text-xl">
              {data?.projectDesc}
            </p>
          </div>

          <div
            className={`flex w-full ${
              data?.layout === 'normal'
                ? 'justify-end'
                : 'justify-start'
            } gap-6 items-center`}
          >
            {data?.skills?.map((skill, i) => (
              <p
                key={i}
                className="text-light-text dark:text-text-light-text dark:text-text-300 font-SF2 text-[13px]"
              >
                {skill}
              </p>
            ))}
          </div>

          <div
            className={`flex gap-8 w-full  ${
              data?.layout === 'normal'
                ? 'justify-end'
                : 'justify-start'
            } mt-12 items-center`}
          >
            <a
              aria-label="Go to the project github repo"
              title="Github repo"
              target="_blank"
              rel="noreferrer"
              href={data?.projectRepoLink}
            >
              <GithubIcon />
            </a>{' '}
            <a
              aria-label="Go to the project demo"
              title="Project Demo"
              target="_blank"
              rel="noreferrer"
              href={data?.projectDemoLink}
            >
              <LinkOutIcon />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default EachProject;
