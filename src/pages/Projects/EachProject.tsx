import GithubIcon from '../../components/Vectors/GithubIcon';
import LinkOutIcon from '../../components/Vectors/LinkOutIcon';

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
  return (
    <div
      className={`flex items-center ${
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
          <p className="text-xl">{data.projectDesc}</p>
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
    </div>
  );
};

export default EachProject;
