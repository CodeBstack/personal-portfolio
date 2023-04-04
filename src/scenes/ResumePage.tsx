import { motion } from 'framer-motion';

interface ResumePageProps {
  className: string;
}

const ResumePage: React.FunctionComponent<
  ResumePageProps
> = ({ className }) => {
  return (
    <section
      className={`h-[50vh] md:h-screen  relative mb-[44px] md:mb-0 ${className}`}
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
          <h1 className="text-light-text dark:text-secondary text-[26px] md:text-[32px]  font-SF2 ">
            03.
          </h1>
          <h1 className="text-primary-dark dark:text-text-200 text-[26px] md:text-[32px] font-SF3">
            Resume
          </h1>
        </div>
        <div className="h-px bg-primary-dark dark:bg-[#CCD6F6] w-full max-w-[148px] md:max-w-[395px]"></div>
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
          rel="noopener noreferrer"
          href="#contact"
          className="text-secondary-dark dark:text-secondary"
        >
          contact page
        </a>
        .{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1nWKBmgszb1N4Cb0radzbVpzqrZqgM7XJ/view?usp=share_link"
          className="text-secondary-dark dark:text-secondary"
        >
          View
        </a>{' '}
        or{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1nWKBmgszb1N4Cb0radzbVpzqrZqgM7XJ/view?usp=share_link"
          className="text-secondary-dark dark:text-secondary"
          download
        >
          download
        </a>{' '}
        the resume.
      </motion.p>
    </section>
  );
};

export default ResumePage;
