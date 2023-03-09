interface ResumePageProps {}

const ResumePage: React.FunctionComponent<
  ResumePageProps
> = () => {
  return (
    <section
      className="h- p-[10%] relative"
      id="resume"
    >
      <div className="flex gap-4 items-center flex-col md:flex-row mb-6 md:mb-12">
        <div className="flex gap-6 items-center">
          <h1 className="text-secondary text-[32px] font-SF2 ">
            03.
          </h1>
          <h1 className="text-text-200 text-[32px] font-SF3">
            Resume
          </h1>
        </div>
        <div className="h-px bg-[#CCD6F6] w-full max-w-[395px]"></div>
      </div>

      <p className="text-center md:text-left font-SF2 text-2xl md:text-[32px] text max-w-[818px]">
        Reach out to me via my{' '}
        <a
          href="#contact"
          className="text-secondary"
        >
          contact page
        </a>
        . <br />{' '}
        <a href="../assets/Sunmonu_resume.pdf" className="text-secondary">
          view
        </a>{' '}
        or{' '}
        <a href="#" className="text-secondary">
          download
        </a>{' '}
        the resume
      </p>
    </section>
  );
};

export default ResumePage;
