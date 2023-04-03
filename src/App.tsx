import React, {
  useEffect,
  useState,
} from 'react';
import InstagramIcon from './components/Vectors/InstagramIcon';
import TwitterIcon from './components/Vectors/TwitterIcon';
import LinkedInIcon from './components/Vectors/LinkedInIcon';
import GithubIcon from './components/Vectors/GithubIcon';
import AboutPage from './scenes/About';
import HomePage from './scenes/HomePage';
import NavBar from './components/Navbar';
import ProjectsPage from './scenes/Projects';
import ResumePage from './scenes/ResumePage';
import ContactPage from './scenes/ContactPage';
import { motion } from 'framer-motion';
import MailIcon from './components/Vectors/MailIcon';

function App() {
  const [selectedPage, setSelectedPage] =
    useState<string>('home');

  const [isNavOpened, setIsNavOpened] =
    useState<boolean>(false);

  const [isDarkMode, setIsDarkMode] =
    useState<boolean>(true);

  useEffect(() => {
    const className = isDarkMode
      ? 'dark'
      : 'light';
    document.documentElement.className =
      className;
  }, [isDarkMode]);

  return (
    <main className="relative max-w-[1440px] mx-auto text-text-primary transition-all duration-500 dark:bg-primary bg-white">
      <div
        className={`overlay z-[99] fixed top-0 left-0 h-screen w-full ${
          isNavOpened ? 'block ' : 'hidden'
        }`}
        onClick={() => setIsNavOpened(false)}
      ></div>

      <NavBar
        isNavOpened={isNavOpened}
        setIsNavOpened={setIsNavOpened}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mxauto  px-4 sm:px-6 pb-14 md:px-[10%]">
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('home')
          }
        >
          <HomePage />
        </motion.div>

        <motion.div
          onViewportEnter={() =>
            setSelectedPage('about')
          }
        >
          <AboutPage
            className={`pt[80px] pt-[100px]`}
          />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('projects')
          }
        >
          <ProjectsPage
            className={`pt[80px] pt-[100px]`}
          />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('resume')
          }
        >
          <ResumePage
            className={`pt[80px] pt-[100px]`}
          />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('contact')
          }
        >
          <ContactPage
            className={`pt[80px] pt-[100px]`}
          />
        </motion.div>
      </div>
      <div className="hidden md:flex max-w-fit items-center fixed top-[70%] -right-28  font-SF1 text-sm md:text-base text-[#A8B2D1] hover:text-secondary rotate-90">
        <a
          aria-label="Email Me"
          title="Email Me"
          href="mailto: ssamuelolumide@gmail.com"
        >
          ssamuelolumide@gmail.com
        </a>
        <div className="h-px w-24 ml-10 bg-[#a8b2d1]"></div>
      </div>

      <div className="hidden md:flex flex-col max-w-[24px] gap-7 items-center fixed top-[53%] left-[5%] ">
        <a
          aria-label="Go to Samuel Olumide Github page"
          title="Github page"
          href="https://github.com/CodeBstack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          aria-label="Go to Samuel Olumide Instagram page"
          title="Instagram page"
          href="https://www.instagram.com/samuel__olumide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          aria-label="Go to Samuel Olumide Twitter page"
          title="Twitter page"
          href="https://twitter.com/SunmonuSam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          aria-label="Go to Samuel Olumide LinkedIn page"
          title="LinkedIn page"
          href="https://www.linkedin.com/in/samuel-sunmonu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>

        <div className="h-px w-24 mt-16 rotate-90 bg-[#a8b2d1]"></div>
      </div>
    </main>
  );
}

export default App;
