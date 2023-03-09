import { useState } from 'react';
import Bio from './widgets/Bio';
import Education from './widgets/Education';
import Experience from './widgets/Experience';
import Passion from './widgets/Passion';
import Skills from './widgets/Skills';
interface AboutPageProps {}

const AboutPage: React.FunctionComponent<
  AboutPageProps
> = () => {
  const [presentStep, setPresentStep] =
    useState<number>(1);

  interface StepComponents {
    1: JSX.Element;
    2: JSX.Element;
    3: JSX.Element;
    4: JSX.Element;
    5: JSX.Element;
  }

  let stepComponents: StepComponents = {
    1: <Bio />,
    2: <Education />,
    3: <Passion />,
    4: <Experience />,
    5: <Skills />,
  };

  return (
    <section
      className="h-screen p-[10%] relative"
      id="about"
    >
      <div className="flex gap-4 items-center flex-col md:flex-row mb-12">
        <div className="flex gap-6 items-center">
          <h1 className="text-secondary text-[32px] font-SF2 ">
            01.
          </h1>
          <h1 className="text-text-200 text-[32px] font-SF3">
            About Me
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[395px]"></div>
      </div>

      <div className="mt-0 flex w-full flex-col p-2 md:flex-row md:justify-start md:gap-9 md:p-0">
        <div className="flex flex-col gap-y-5">
          {/* mobile  */}
          <div className="flex flex-wrap justify-between md:hidden">
            {steps.map((value) => (
              <button
                onClick={() =>
                  setPresentStep(value.id)
                }
                // disabled={presentStep < value.id}
                key={value.id}
                className={`flex h-[30px] w-[30px] items-center justify-center
                text-[18px] text-text-primary font-SF2 transition-all duration-150 ease-in-out
                 ${
                   presentStep === value.id &&
                   '!bg-secondary text-text-primary '
                 } 
                 
                rounded-[8px] `}
              >
                {value.id}
              </button>
            ))}
          </div>
          {/* desktop  */}
          <div
            className="hidden h-fit min-w-max flex-col
             flex-wrap justify-between
            md:flex md:gap-0 md:px- "
          >
            {steps.map((value) => (
              <button
                key={value.id}
                type="button"
                onClick={() =>
                  setPresentStep(value.id)
                }
                // disabled={presentStep < value.id}
                className="flex items-center gap-4"
              >
                {/* <span
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-16
                 text-lg font-medium text-white
                 ${
                   presentStep === value.id
                     ? 'bg-primary text-grey_60'
                     : presentStep > value.id
                     ? 'bg-grey_20'
                     : 'bg-grey_60 text-grey_30'
                 }`}
                >
                  {value.id}
                </span> */}
                <span
                  className={`font-SF2 border-l px-5 py-3 border-[#233554] text-[16px] font-medium  ${
                    presentStep === value.id
                      ? 'border-l border-secondary text-secondary'
                      : 'text-text-primary'
                  } `}
                >
                  {value.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 w-full md:mt-0">
          {/* Displays the component that corresponds with the presentStep */}
          {/* <div className="flex max-w-[600px] flex-1 flex-cl gap-0 rounded-24 bg-white pb-[40px] "> */}
          {
            stepComponents[
              presentStep as keyof StepComponents
            ]
          }
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
const steps = [
  {
    title: 'Bio',
    id: 1,
  },
  {
    title: 'Education',
    id: 2,
  },

  {
    title: 'Passion',
    id: 3,
  },
  {
    title: 'Experience',
    id: 4,
  },
  {
    title: 'Skills',
    id: 5,
  },
];