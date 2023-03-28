import React, { useState } from 'react';
import InstagramIcon from './components/Vectors/InstagramIcon';
import TwitterIcon from './components/Vectors/TwitterIcon';
import LinkedInIcon from './components/Vectors/LinkedInIcon';
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';
import NavBar from './pages/Navbar';
import ProjectsPage from './pages/Projects';
import ResumePage from './pages/ResumePage';
import GithubIcon from './components/Vectors/GithubIcon';
import ContactPage from './pages/ContactPage';
import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] =
    useState<string>('home');
  const [isNavOpened, setIsNavOpened] =
    useState<boolean>(false);

  return (
    <div className="relative text-text-primary ">
      <div
        className={`overlay mobile_nav_backdrop z-[99] fixed top-0 left-0 h-screen w-full ${
          isNavOpened ? 'block ' : 'hidden'
        }`}
      ></div>

      <NavBar
        isNavOpened={isNavOpened}
        setIsNavOpened={setIsNavOpened}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:pb-[5%] md:px-[10%]">
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
          <AboutPage />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('projects')
          }
        >
          <ProjectsPage />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('resume')
          }
        >
          <ResumePage />
        </motion.div>
        <motion.div
          onViewportEnter={() =>
            setSelectedPage('contact')
          }
        >
          <ContactPage />
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

      <div className="flex md:hidden footer_socials ">
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
      </div>
    </div>
  );
}

export default App;
