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
import Footer from './pages/Footer';
import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] =
    useState<string>('home');

  return (
    <div className="relative text-text-primary ">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto w[95%] max-w-[1440px] px-4 py-[10%] md:py-0 md:px-[10%]">
        {selectedPage === 'resume' ? (
          <motion.div
            onViewportEnter={() =>
              setSelectedPage('resume')
            }
          >
            <ResumePage />
          </motion.div>
        ) : (
          <>
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
                setSelectedPage('contact')
              }
            >
              <ContactPage />
            </motion.div>
          </>
        )}
      </div>
      <div className="hidden md:flex max-w-fit items-center fixed top-[70%] -right-20  font-SF1 text-sm md:text-base text-[#A8B2D1] hover:text-secondary rotate-90">
        <a href="mailto: ssamuelolumide@gmail.com">
          ssamuelolumide@gmail.com
        </a>
        <div className="h-px w-24 ml-10 bg-[#a8b2d1]"></div>
      </div>

      <div className="hidden md:flex flex-col max-w-[24px] gap-7 items-center fixed top-[53%] left-[5%] ">
        <a href="#">
          <GithubIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>

        <div className="h-px w-24 mt-16 rotate-90 bg-[#a8b2d1]"></div>
      </div>
    </div>
  );
}

export default App;
