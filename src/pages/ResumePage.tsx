import { motion } from 'framer-motion';
interface ResumePageProps {}

const ResumePage: React.FunctionComponent<
  ResumePageProps
> = () => {
  return (
    <section
      className="h-[50vh] md:h-screen md:py-[10%] relative mb-[44px] md:mb-0 "
      id="resume"
    >
      <motion.div
        className="flex gap-4 items-center  mb-9 md:mb-12 flex-wrap"
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
            03.
          </h1>
          <h1 className="text-text-200 text-[26px] md:text-[32px] font-SF3">
            Resume
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[148px] md:max-w-[395px]"></div>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-cente md:text-left font-SF2 text-2xl md:text-[32px] text max-w-[818px]"
      >
        Reach out to me via my{' '}
        <a
          href="#contact"
          className="text-secondary"
        >
          contact page
        </a>
        . <br />{' '}
        <a
          href="../assets/Sunmonu_resume.pdf"
          className="text-secondary"
        >
          View
        </a>{' '}
        or{' '}
        <a href="#" className="text-secondary" download>
          download
        </a>{' '}
        the resume
      </motion.p>
      {/* <p className="text-center md:text-left font-SF2 text-2xl md:text-[32px] text max-w-[818px]">
        Reach out to me via my{' '}
        <a
          href="#contact"
          className="text-secondary"
        >
          contact page
        </a>
        . <br />{' '}
        <a
          href="../assets/Sunmonu_resume.pdf"
          className="text-secondary"
        >
          view
        </a>{' '}
        or{' '}
        <a href="#" className="text-secondary">
          download
        </a>{' '}
        the resume
      </p> */}
    </section>
  );
};

export default ResumePage;
