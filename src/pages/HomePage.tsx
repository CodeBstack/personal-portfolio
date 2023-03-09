
interface HomePageProps {}

const HomePage: React.FunctionComponent<
  HomePageProps
> = () => {
  return (
    <section
      className="relative text-text-primary flex p-[10%] justify-centr items-centr h-screen"
      id="home"
    >
      <div>
        <p className="font-SF2 mb-2.5 text-secondary md:mb-4 text-sm md:text-base">
          Hi, my name is
        </p>
        <h1 className="font-Calibre3 trackin-[0.011em] text-nav-text text-4xl md:text-7xl">
          Samuel Olumide
        </h1>
        <h1 className="font-Calibre3 tra11em] text-text-primary text-4xl md:text-7xl">
          I bring designs to life.{' '}
        </h1>

        <p className="max-w-[540px] mt-2.5 font-Calibre1 text-sm  text-text-primary md:text-xl md:mt-4">
          I'm a Software Engineer who specializes
          in creating exceptional digital
          experiences. At Native Brand, I'm
          currently focused on creating
          accessible, human-centered products.
        </p>
      </div>

     
    </section>
  );
};

export default HomePage;
