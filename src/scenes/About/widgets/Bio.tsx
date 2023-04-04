import CloseIcon from '../../../components/Vectors/CloseIcon';
import '../index.scss';

interface BioProps {}

const Bio: React.FunctionComponent<
  BioProps
> = () => {
  return (
    <div className="flex flex-col gap-16 lg:flex-row  lg:gap8">
      <p className="flex-1 font-Calibre1 text-light-text dark:text-text-primary text-base md:text-xl max-w-[450px]">
        I'm an extremely ambitious Front-end
        developer looking for a position in a
        reputable IT firm where I can use the
        newest technology on difficult and various
        projects. <br /> I'm naturally interested,
        self-assured, and constantly looking for
        ways to sharpen my skills one design
        challenge at a time.
        <br />
      </p>
      <div className="flex-1  max-w-[450px] lg:mt12 ">
        <div
          className=" self-centr mx-auto md:mx-0 z[2] relative min-h-[269px] max-h-[269px] min-w-[292px] rounded-[10px] max-w-[292px] before:bg-secondary before:absolute before:-top-[10px] before:-right-[10px] before:rounded-[7px]
            before:w-full before:max-w-[292px] before:h-full before:z-[-1]"
        >
          <img
            src="/images/my-picture.jpg"
            alt="my jpeg"
            className="rounded-[8px]  absolte max-h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
