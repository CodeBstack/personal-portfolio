import PlayArrowIcon from '@mui/icons-material/PlayArrow';
interface ExperienceProps {}

const Experience: React.FunctionComponent<
  ExperienceProps
> = () => {
  return (
    <>
      <div className="flex gap-[30px] md:gap-[50px] items-start">
        <PlayArrowIcon
          sx={{
            color: '#64FFDA',
            fontSize: '24px',
          }}
        />
        <div className="text-text-200">
          <p className="font-Calibre2 text-xl md:text-2xl">
            Frontend Developer{' '}
            <span className="text-secondary">
              @ NativeBrands
            </span>
          </p>
          <p className="font-SF2 text-[13px] mb-4">
            August 2022 - Present
          </p>
          <p className="font-Calibre1 text-lg text-text-primary">
            Distinction Student of Electrical
            Engineering
          </p>
        </div>
      </div>

      <div className="flex gap-[30px] md:gap-[50px] mt-[30px] items-start">
        <PlayArrowIcon
          sx={{
            color: '#64FFDA',
            fontSize: '24px',
          }}
        />
        <div className="text-text-200">
          <p className="font-Calibre2 text-xl md:text-2xl">
            Bachelors Degree (Hons.){' '}
            <span className="text-secondary">
              @ University of Lagos
            </span>
          </p>
          <p className="font-SF2 text-[13px] mb-4">
            January 2020 - Present
          </p>
          <p className="font-Calibre1 text-lg text-text-primary">
            Second Class Upper Student in
            Electrical Engineering
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
