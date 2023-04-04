import { Tooltip } from '@mui/material';
import { useState } from 'react';
import Bio from './widgets/Bio';
import Education from './widgets/Education';
import Experience from './widgets/Experience';
import Passion from './widgets/Passion';
import Skills from './widgets/Skills';
import { motion } from 'framer-motion';
interface AboutPageProps {
  className: string;
}

const AboutPage: React.FunctionComponent<
  AboutPageProps
> = ({ className }) => {
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
    2: <Skills />,
    3: <Education />,
    4: <Experience />,
    5: <Passion />,
  };

  return (
    <section
      className={`md:min-hscreen mb10 lg:mb-20 pt-[25%] md:pt-[100px]  relatve md:mb-0 ${className}`}
      id="about"
    >
      <motion.div
        className="flex  gap-4 items-center md:mb-5 flex-wrap"
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
          <h1 className="text-light-text dark:text-secondary text-[26px] md:text-[32px]  font-SF2 ">
            01.
          </h1>
          <h1 className="text-primary-dark dark:text-text-200 text-[26px] md:text-[32px] font-SF3">
            About Me
          </h1>
        </div>
        <div className="h-px bg-primary-dark dark:bg-[#CCD6F6] w-full max-w-[148px] md:max-w-[395px]"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-0 flex  w-full flex-col md:flex-row md:justify-start md:gap-9 md:px-8"
      >
        <div className="flex flex-col gap-y-5">
          {/* mobile  */}
          <div className="flex gap- items-center noScrollBar overflow-x-auto flex-nowrap md:hidden my-7 md:my-0">
            {steps.map((value) => (
              <button
                key={value.id}
                type="button"
                onClick={() =>
                  setPresentStep(value.id)
                }
                className="flex"
              >
                <span
                  className={`font-SF2  px-5 pb-2 text-[16px] font-medium  ${
                    presentStep === value.id
                      ? 'border-b-[3px] border-secondary-dark dark:border-secondary text-secondary-dark dark:text-secondary'
                      : 'text-light-text dark:text-text-primary'
                  } `}
                >
                  {value.title}
                </span>
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
                className="flex items-center gap-4"
              >
                <span
                  className={`font-SF2 border-l px-5 py-3  text-[16px] font-medium  ${
                    presentStep === value.id
                      ? 'border-l border-secondary-dark dark:border-secondary text-secondary-dark dark:text-secondary'
                      : 'border-[#CCD6F6] dark:border-[#233554] text-light-text dark:text-text-primary'
                  } `}
                >
                  {value.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto md:mt-3">
          {
            stepComponents[
              presentStep as keyof StepComponents
            ]
          }
        </div>
      </motion.div>
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
    title: 'Skills',
    id: 2,
  },
  {
    title: 'Education',
    id: 3,
  },

  {
    title: 'Experience',
    id: 4,
  },
  {
    title: 'Passion',
    id: 5,
  },
];
