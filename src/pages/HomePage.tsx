interface HomePageProps {}

const HomePage: React.FunctionComponent<
  HomePageProps
> = () => {
  return (
    <section
      className="relative text-text-primary flex px-[10%] justify-centr items-center h-screen"
      id="home"
    >
      <div>
        <p className="font-SF2 mb-2.5 text-secondary md:mb-4 text-sm md:text-base">
          Hi, my name is
        </p>
        <h1 className="font-Calibre3 trackin-[0.011em] text-nav-text text-5xl md:text-7xl">
          Samuel Olumide
        </h1>
        <h1 className="font-Calibre3 tra11em] text-text-primary text-5xl md:text-7xl">
          I bring designs to life.{' '}
        </h1>

        <p className="max-w-[540px] mt-2.5 font-Calibre1 text-base  text-text-primary md:text-xl md:mt-4">
          I'm a{' '}
          <span className="text-secondary">
            Software Engineer
          </span>{' '}
          who specializes in creating exceptional
          digital experiences. At Native Brand,
          I'm currently focused on creating
          accessible, human-centered products.
        </p>

        <div className="flex mt-6 items-center font-SF1 text-base text-[#A8B2D1] md:hidden">
          Email me @&nbsp;
          <a
            href="mailto: ssamuelolumide@gmail.com"
            className="hover:text-secondary rotate-0"
          >
            ssamuelolumide@gmail.com
          </a>
          {/* <div className="h-px w-24 ml-10 bg-[#a8b2d1]"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
