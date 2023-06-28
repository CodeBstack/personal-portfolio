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
    'S',
    'u',
    'n',
    'm',
    'o',
    'n',
    'u',
  ];

  return (
    <section
      className="relative pt-[70px] md:pt-[100px] mdpt-[0%] text-light-text dark:text-text-primary flex justify-centr itemscenter mb[44px] md:mb-0 md:h-screen"
      id="home"
    >
      <div>
        <p className="font-SF2 text-light-text dark:text-secondary  mb-3 text-base">
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
        <h1 className="font-Calibre3 trackin-[0.011em] text-primary-dark dark:text-nav-text text-4xl md:text-7xl">
          {/* Samuel Olumide */}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={21}
          />
        </h1>
        <h1 className="heading_2 font-Calibre3 text-light-text dark:text-text-primary text-2xl max-w-[724px] md:text-6xl">
          I create engaging, <br />
          interactive user interfaces.
        </h1>

        <p className="anime_homepage_text max-w-[540px] font-Calibre1 text-lg  text-light-text dark:text-text-primary md:text-xl mt-3 ">
          I'm a{' '}
          <span className="text-secondary-dark dark:text-secondary">
            Frontend Developer
          </span>{' '}
          who specializes in creating exceptional
          digital experiences, accessible and
          human-centered products on the web.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
