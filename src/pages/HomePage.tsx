import { useState, useEffect } from 'react';
import AnimatedLetters from '../components/AnimatedLetters';

interface HomePageProps {}

const HomePage: React.FunctionComponent<
  HomePageProps
> = () => {
  const [letterClass, setLetterClass] =
    useState<string>('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  let nameArray: string[];
  nameArray = [
    'S',
    'a',
    'm',
    'u',
    'e',
    'l',
    '',
    'O',
    'l',
    'u',
    'm',
    'i',
    'd',
    'e',
  ];


  return (
    <section
      className="relative text-text-primary flex justify-centr items-center mb-[44px] md:mb-0 md:h-screen"
      id="home"
    >
      <div>
        <p className="font-SF2 text-secondary mb-5 text-base">
          <span className={`${letterClass}`}>
            H
          </span>
          <span className={`${letterClass} _12`}>
            i,
          </span>{' '}
          <span className={`${letterClass} _13`}>
            m
          </span>
          <span className={`${letterClass} _14`}>
            y
          </span>{' '}
          <span className={`${letterClass} _15`}>
            n
          </span>
          <span className={`${letterClass} _16`}>
            a
          </span>
          <span className={`${letterClass} _17`}>
            m
          </span>
          <span className={`${letterClass} _18`}>
            e
          </span>{' '}
          <span className={`${letterClass} _19`}>
            i
          </span>
          <span className={`${letterClass} _20`}>
            s
          </span>
          {/* Hi, my name is */}
        </p>
        <h1 className="font-Calibre3 trackin-[0.011em] text-nav-text text-4xl md:text-7xl">
          {/* Samuel Olumide */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={21}
          />
          
        </h1>
        <h1 className="heading_2 font-Calibre3 tra11em] text-text-primary text-4xl md:text-7xl">
          I bring designs to life.{' '}
          {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            idx={34}
          /> */}
        </h1>

        <p className="anime_homepage_text max-w-[540px] font-Calibre1 text-lg  text-text-primary md:text-xl mt-5">
          I'm a{' '}
          <span className="text-secondary">
            Software Engineer
          </span>{' '}
          who specializes in creating exceptional
          digital experiences. At Native Brand,
          I'm currently focused on creating
          accessible, human-centered products.
        </p>

        {/* <div className="flex mt-6 items-center font-SF1 text-base text-[#A8B2D1] md:hidden">
          Email me @&nbsp;
          <a
            href="mailto: ssamuelolumide@gmail.com"
            className="hover:text-secondary rotate-0"
          >
            ssamuelolumide@gmail.com
          </a>
          <div className="h-px w-24 ml-10 bg-[#a8b2d1]"></div>
        </div> */}
      </div>
    </section>
  );
};

export default HomePage;
