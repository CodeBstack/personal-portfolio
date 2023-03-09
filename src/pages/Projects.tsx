import GithubIcon from '../components/Vectors/GithubIcon';
import LinkOutIcon from '../components/Vectors/LinkOutIcon';

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
        <div className="flex items-center">
          <div className="bg-[#233554] min-h-[360px]  w-1/2 max-w-[580px]"></div>

          <div className="-ml-10 flex-1 flex items-end flex-col text-right">
            <p className="font-SF2 text-secondary mb-2 text-[13px]">
              Featured Projects
            </p>
            <p className="font-Cslibre2 text-200 mb-8 text-[28px]">
              Advanced Calculator
            </p>

            <div className="rounded-[0px] bg-[#112240] p-6 mb-6 text-left">
              <p className="text-xl">
                Lorem ipsum dolor sit amet
                consectetur. Aliquam donec justo
                fames euismod consectetur. Enim
                parturient pulvinar semper neque.
                Id ac pretium leo non. Fringill
              </p>
            </div>

            <div className="flex w-full justify-end gap-6 items-center">
              {skills.map((skill, i) => (
                <p
                  key={i}
                  className="text-300 font-SF2 text-[13px]"
                >
                  {skill}
                </p>
              ))}
            </div>

            <div className="flex gap-8 w-full justify-end mt-12 items-center">
              <a href="#">
                <GithubIcon />
              </a>{' '}
              <a href="#">
                <LinkOutIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center">
          <div className="-ml-10 bg-[#233554] min-h-[360px]  w-1/2 max-w-[580px]"></div>

          <div className="z-10 flex-1 flex items-start flex-col text">
            <p className="font-SF2 text-secondary mb-2 text-[13px]">
              Featured Projects
            </p>
            <p className="font-Cslibre2 text-200 mb-8 text-[28px]">
              Weather Information
            </p>

            <div className="rounded-[0px] bg-[#112240] p-6 mb-6 text-left">
              <p className="text-xl">
                Lorem ipsum dolor sit amet
                consectetur. Aliquam donec justo
                fames euismod consectetur. Enim
                parturient pulvinar semper neque.
                Id ac pretium leo non. Fringilla
              </p>
            </div>

            <div className="flex w-full justify-start gap-6 items-center">
              {skills.map((skill, i) => (
                <p
                  key={i}
                  className="text-300 font-SF2 text-[13px]"
                >
                  {skill}
                </p>
              ))}
            </div>

            <div className="flex gap-8 w-full justify-start mt-12 items-center">
              <a href="#">
                <GithubIcon />
              </a>{' '}
              <a href="#">
                <LinkOutIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
];
