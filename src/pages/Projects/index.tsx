import GithubIcon from '../../components/Vectors/GithubIcon';
import LinkOutIcon from '../../components/Vectors/LinkOutIcon';
import { projects } from './data';
import EachProject from './EachProject';

interface ProjectsPageProps {}

const ProjectsPage: React.FunctionComponent<
  ProjectsPageProps
> = () => {
  return (
    <section
      className="projects min-h-screen px-[10%] pt-[10%] relative"
      id="projects"
    >
      <div className="flex gap-4 items-center flex-col md:flex-row mb-[104px]">
        <div className="flex gap-6 items-center">
          <h1 className="text-secondary text-[32px] font-SF2 ">
            02.
          </h1>
          <h1 className="text-text-200 text-[32px] font-SF3">
            Projects
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[395px]"></div>
      </div>

      <div className="flex flex-col gap-[104px]">
        {projects.map((project) => (
          <EachProject
            key={project.id}
            data={project}
          />
        ))}
      </div>

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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {Array(6)
            .fill(6)
            .map((_, i) => (
              <div
                key={i}
                className={` bg-[#233554] min-h-[300px] max-wpx]`}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
