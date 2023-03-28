import { Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import Bio from './widgets/Bio';
import Education from './widgets/Education';
import Experience from './widgets/Experience';
import Passion from './widgets/Passion';
import Skills from './widgets/Skills';
import { motion } from 'framer-motion';
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
      className="min-h-screen pt-[20%] md:pt-[100px] relative mb-[px] md:mb-0 "
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
          <h1 className="text-secondary text-[26px] md:text-[32px]  font-SF2 ">
            01.
          </h1>
          <h1 className="text-text-200 text-[26px] md:text-[32px] font-SF3">
            About Me
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[148px] md:max-w-[395px]"></div>
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
        className="mt-0 flex w-full flex-col md:flex-row md:justify-start md:gap-9 md:p-0"
      >
        <div className="flex flex-col gap-y-5">
          {/* mobile  */}
          <div className="flex gap- items-center noScrollBar overflow-x-auto flex-nowrap md:hidden my-7">
            {steps.map((value) => (
              <Tooltip
                title={value.title}
                placement="top"
              >
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
                        ? 'border-b-[3px] border-secondary text-secondary'
                        : 'text-text-primary'
                    } `}
                  >
                    {value.title}
                  </span>
                </button>
              </Tooltip>
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
        <div className="w-full">
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
