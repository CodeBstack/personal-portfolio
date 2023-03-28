import CloseIcon from '../../../components/Vectors/CloseIcon';
import '../index.scss';

interface BioProps {}

const Bio: React.FunctionComponent<
  BioProps
> = () => {
  return (
    <div className="flex flex-col gap-16 lg:flex-row  lg:gap-8">
      <p className="flex-1 font-Calibre1 text-text-primary text-base md:text-xl max-w-[450px]">
        I'm an extremely ambitious Front-end
        developer looking for a position in a
        reputable IT firm where I can use the
        newest technology on difficult and varied
        projects. <br /> I'm naturally interested,
        self-assured, and constantly looking for
        ways to sharpen my skills one design
        challenge at a time.
        <br />
      </p>
      <div className="flex-1  max-w-[450px] lg:mt-12 ">
        {/* <div
          className=" self-centr mx-auto md:mx-0 relative min-h-[269px] min-w-[292px] rounded-[8px] bg-secondary max-w-[292px] before:bg-[#D9D9D9] before:absolute before:-top-[8px] before:-right-[8px] before:rounded-[8px]
            before:w-full before:max-w-[292px] before:h-full before:border-2 before:border-blue before:z-[-1]"
        ></div> */}

        {/* <div className="stage-cube-cont"> */}
        <div className="cubespinner">
          <div className="face1">
            <CloseIcon />
            {/* <FontAwesomeIcon icon={faSass} color="#DD0031" /> */}
          </div>
          <div className="face2">
            {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
          </div>
          <div className="face3">
            {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
          </div>
          <div className="face4">
            {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
          </div>
          <div className="face5">
            {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
          </div>
          <div className="face6">
            {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Bio;
